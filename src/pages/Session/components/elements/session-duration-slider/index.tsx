import Slider from "react-slider";
import "./styles.module.scss";
import styles from "./styles.module.scss";
import {FC} from "react";
import useDeviceInfo from "../../../../../hooks/device-info.hook";

interface ISessionDuration {
  value: number
  onChange: (v: number) => void
}

const getMarkTransform = (isMobile: boolean, count: number) => {
  if (!isMobile) return 0
  if (count === 65) return -30
  if (count === 5) return 20
  return 0
}

const SessionDurationSlider: FC<ISessionDuration> = ({onChange, value}) => {
  const {isMobile} = useDeviceInfo()
  const transformValue = getMarkTransform(isMobile, value)

  return (
    <Slider
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      onChange={(v) => onChange(v)}
      renderTrack={(props, state) => (
        <div
          {...props}
          className={`${styles.track} ${
            state.index === 0 ? styles.track0 : styles.track1
          }`}
        ></div>
      )}
      renderThumb={(props) => (
        <div className={styles.thumb} {...props}>
          <div className={styles.mark} style={{transform:`translateX(${transformValue}px)`}}>
            <span className={styles.text}>
              {
                value < 65 ? (
                  `${value} min`
                ) : (
                  <>
                    <span className={styles.icon}>∞</span> Infinite
                  </>
                )
              }
            </span>
          </div>
        </div>
      )}
      step={5}
      min={5}
      max={65}
      defaultValue={value}
    />
  );
};

export default SessionDurationSlider;
