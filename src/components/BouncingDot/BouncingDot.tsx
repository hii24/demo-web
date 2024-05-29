import { useEffect, useRef, useState } from "react";
import { playInLeftEar, playInRightEar } from "../../utils/audio/howler";
import styles from "./styles.module.scss";

interface Props {
  radius: number;
  backgroundColor: string;
  speed: number;
  startPosition: number;
  backgroundImage: string;
  addPasses: () => void;
  isOpenSidebar: boolean;
}

const BouncingDot: React.FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const dot = useRef({
    x: 491.5,
    y: 408,
    dx: 2,
    dy: 0,
    radius: props.radius,
  });
  const requestRef = useRef<number | undefined>();

  useEffect(() => {
    dot.current.radius = props.radius;
    dot.current.dx &&
      (dot.current.dx > 0
        ? (dot.current.dx = props.speed)
        : (dot.current.dx = -props.speed));
    dot.current.dy &&
      (dot.current.dy > 0
        ? (dot.current.dy = props.speed)
        : (dot.current.dy = -props.speed));

    draw();
  }, [props]);

  const updatePosition = () => {
    dot.current.x += dot.current.dx;
    dot.current.y += dot.current.dy;

    if (
      canvasRef.current &&
      dot.current.x + dot.current.radius > canvasRef.current.width
    ) {
      //   alert("right");
      playInRightEar();
      dot.current.dx = -dot.current.dx;
      props.addPasses();
    }
    if (canvasRef.current && dot.current.x - dot.current.radius < 0) {
      //   alert("left");
      playInLeftEar();
      dot.current.dx = -dot.current.dx;
      props.addPasses();
    }
    if (
      canvasRef.current &&
      dot.current.y + dot.current.radius > canvasRef.current.height
    ) {
      //   alert("down");
      dot.current.dy = -dot.current.dy;
      props.addPasses();
    }
    if (canvasRef.current && dot.current.y - dot.current.radius < 0) {
      //   alert("top");
      dot.current.dy = -dot.current.dy;
      props.addPasses();
    }
  };

  const draw = () => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        context.beginPath();
        context.arc(
          dot.current.x,
          dot.current.y,
          dot.current.radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "black";
        context.fill();
        context.closePath();
      }
    }
  };

  const animate = () => {
    updatePosition();
    draw();
    requestRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (Howler.ctx) {
      Howler.ctx.resume();
    }
    if (!isAnimating) {
      setIsAnimating(true);
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  const pauseAnimation = () => {
    if (isAnimating) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        setIsAnimating(false);
      }
    }
  };

  const stopAnimation = () => {
    pauseAnimation();
    dot.current = { ...dot.current, x: 491.5, y: 408 }; // Reset dot position and velocity
    draw(); // Redraw to show the dot in the initial position
  };

  const changeDirection = (newDx: number, newDy: number) => {
    dot.current.dx = newDx;
    dot.current.dy = newDy;
    if (!isAnimating) {
      draw();
    }
  };

  useEffect(() => {
    // Initialize canvas size here if needed
    draw(); // Draw the initial state
    return () => {
      pauseAnimation();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // width={983}
      width={1042}
      height={948}
      // height={816}
      style={{ backgroundColor: props.backgroundColor }}
      className={`${styles.canva} ${props.isOpenSidebar ? styles.isOpen : ""}`}
    />
  );
};

export default BouncingDot;
