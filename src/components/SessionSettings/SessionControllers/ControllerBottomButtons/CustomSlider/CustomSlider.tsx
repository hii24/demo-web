import Slider from "react-slider";
import "./styles.module.scss";
import styles from "./styles.module.scss";

const CustomSlider = () => {
  return (
    <Slider
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      renderTrack={(props, state) => (
        <div
          {...props}
          className={`${styles.track} ${
            state.index === 0 ? styles.track0 : styles.track1
          }`}
        ></div>
      )}
      renderThumb={(props, value) => (
        <div className={styles.thumb} {...props}>
          <div className={styles.mark}>
            <span className={styles.text}>
              {value.valueNow < 65 ? (
                `${value.valueNow} min`
              ) : (
                <>
                  <span className={styles.icon}>∞</span> Infinite
                </>
              )}
            </span>
          </div>
        </div>
      )}
      step={5}
      min={5}
      max={65}
      defaultValue={30}
    />
  );
};

export default CustomSlider;
