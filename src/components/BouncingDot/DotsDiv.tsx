import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import controllerSettingsStore from "../../store/controllerSettingsStore";
import visualSettingsStore from "../../store/visualSettingsStore";
import { PathSettingsEnum, PositionEnum } from "../../types/settings.type";
import { playInLeftEar, playInRightEar } from "../../utils/audio/howler";
import { defaultSpeed } from "../../utils/default";
import { getOrbColor, getSizeOrb } from "../../utils/visualSettings";

interface Props {
  radius: number;
  backgroundColor: string;
  speed: number; // Базова швидкість при ідеальному розмірі контейнера
  startPosition: number;
  backgroundImage: string;
  addPasses: () => void;
  isOpenSidebar: boolean;
  isAnimating: boolean;
  setIsAnimating: () => void;
}

const BouncingDot: React.FC<Props> = (props) => {
  const {
    activeBackground,
    activeColor,
    activeSize,
    isActive,
    activePath,
    activePosition,
  } = visualSettingsStore;
  const { isPaused, isPlaying, speed, addCount } = controllerSettingsStore;
  const containerRef = useRef<HTMLDivElement>(null);
  const [dotStyle, setDotStyle] = useState<React.CSSProperties>({
    position: "absolute",
    left: "50%",
    top: "10%",
    width: `${getSizeOrb(activeSize) * 2}px`,
    height: `${getSizeOrb(activeSize) * 2}px`,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const dot = useRef({
    x: containerRef.current
      ? containerRef.current.offsetWidth / 2
      : props.startPosition,
    y: containerRef.current
      ? containerRef.current.offsetHeight / 2
      : props.startPosition,
    dx: props.speed,
    dy: props.speed,
  });

  useEffect(() => {
    function updateContainerSize() {
      if (containerRef.current) {
        const newSize = {
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        };
        if (!initialSize.width || !initialSize.height) {
          setInitialSize(newSize);
        }
        setContainerSize(newSize);
        console.log(activePosition);
        dot.current.y =
          activePosition === PositionEnum.CENTER
            ? newSize.height / 2
            : activePosition === PositionEnum.TOP
            ? newSize.height / 4
            : (newSize.height * 3) / 4;
        dot.current.x = newSize.width / 2;
      }
    }
    updateContainerSize();
    const resizeObserver = new ResizeObserver(updateContainerSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [props.isOpenSidebar, activePosition]);

  useEffect(() => {
    // Адаптація швидкості в залежності від розміру контейнера
    const widthRatio = containerSize.width / initialSize.width;
    const heightRatio = containerSize.height / initialSize.height;
    dot.current.dx = defaultSpeed * widthRatio * speed;
    dot.current.dy = defaultSpeed * heightRatio * speed;
  }, [containerSize, initialSize, speed]);

  useEffect(() => {
    function updatePosition() {
      const container = containerRef.current;
      if (!container) return;

      if (activePath === PathSettingsEnum.HORIZONTAL) {
        dot.current.x += dot.current.dx;
      } else if (activePath === PathSettingsEnum.VERTICAL) {
        dot.current.y += dot.current.dy;
      } else if (activePath === PathSettingsEnum.DIAGONAL_UP_LEFT) {
        dot.current.x -= dot.current.dx;
        dot.current.y -= dot.current.dy;
      } else if (activePath === PathSettingsEnum.DIAGONAL_UP_RIGHT) {
        dot.current.x += dot.current.dx;
        dot.current.y -= dot.current.dy;
      }

      if (dot.current.x + getSizeOrb(activeSize) >= container.offsetWidth) {
        playInRightEar();
        dot.current.dx = -dot.current.dx;
        addCount();
      }

      if (dot.current.x - getSizeOrb(activeSize) <= 0) {
        playInLeftEar();
        dot.current.dx = -dot.current.dx;
        addCount();
      }

      if (dot.current.y + getSizeOrb(activeSize) >= container.offsetHeight) {
        playInRightEar();
        dot.current.dy = -dot.current.dy;
        addCount();
      }

      if (dot.current.y - getSizeOrb(activeSize) <= 0) {
        playInLeftEar();
        dot.current.dy = -dot.current.dy;
        addCount();
      }

      setDotStyle({
        position: "absolute",
        left: `${dot.current.x}px`,
        top: `${dot.current.y}px`,
        width: `${getSizeOrb(activeSize) * 2}px`,
        height: `${getSizeOrb(activeSize) * 2}px`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      });
    }

    let animationFrameId: number;

    const animate = () => {
      updatePosition();
      animationFrameId = requestAnimationFrame(animate);
    };

    console.log(isPlaying, !isPaused);

    if (!isPlaying && !isPaused) {
      setDotStyle({
        position: "absolute",
        left: "50%",
        top:
          activePosition === PositionEnum.CENTER
            ? "50%"
            : activePosition === PositionEnum.TOP
            ? "25%"
            : "75%",
        width: `${getSizeOrb(activeSize) * 2}px`,
        height: `${getSizeOrb(activeSize) * 2}px`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      });
      dot.current.x = containerSize.width / 2;
      dot.current.y = containerSize.height / 2;
    }

    if (isPlaying && isPaused) {
      setDotStyle({
        position: "absolute",
        left: "50%",
        top: "50%",
        width: `${getSizeOrb(activeSize) * 2}px`,
        height: `${getSizeOrb(activeSize) * 2}px`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      });
    }

    if (isPlaying && !isPaused) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [props, isPlaying, isPaused, activePosition]);

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        // background: getBackground(activeBackground),
        opacity: isActive ? 1 : 0,
      }}
    >
      <div
        style={{
          ...dotStyle,
          backgroundColor: getOrbColor(activeColor),
          height: getSizeOrb(activeSize),
          width: getSizeOrb(activeSize),
        }}
      />
    </div>
  );
};

export default observer(BouncingDot);
