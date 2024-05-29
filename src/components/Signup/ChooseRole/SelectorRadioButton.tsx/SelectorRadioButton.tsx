import React from "react";
import { Role } from "../../../../types/role.type";
import styles from "./styles.module.scss";

interface Props {
  onRoleChange: (role: Role) => void;
}

const SelectorRadioButton: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onRoleChange(event.target.value as Role);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            type="radio"
            name="selectRole"
            value={Role.CLIENT}
            className={styles.inputCustom}
            onChange={handleChange}
            defaultChecked
          />
          <span className={styles.inputPoint}></span>
          <div className={styles.labelInner}>
            <p className={styles.textRole}>I'm a BLS user</p>
            <p className={styles.textDescription}>
              For users and patients looking for effective Bilateral Stimulation
              tools
            </p>
          </div>
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="selectRole"
            value={Role.THERAPIST}
            className={styles.inputCustom}
            onChange={handleChange}
          />
          <span className={styles.inputPoint}></span>

          <div className={styles.labelInner}>
            <p className={styles.textRole}>I'm a certified therapist</p>
            <p className={styles.textDescription}>
              For professionals who want to host BLS sessions for their clients.
            </p>
          </div>
        </label>
      </form>
    </div>
  );
};

export default SelectorRadioButton;
