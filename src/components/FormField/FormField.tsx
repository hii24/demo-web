import React, { Dispatch, SetStateAction } from 'react';
import { ReactComponent as AlertIcon } from '../../assets/vectors/alertCircle.svg';
import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  isRequired: boolean;
  fieldName?: string;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  errorMessage?: string;
  startIcon?: string;
}

const FormField: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  const errorClass = props.errorMessage ? styles.errorBorder : '';
  return (
    <div className={styles.container}>
      {props.fieldName && <label htmlFor={props.fieldName} className={styles.label}>
        {props.fieldName}{' '}
        {!props.isRequired && (
          <span className={styles.optional}>(optional)</span>
        )}
      </label>}
      <div className={styles.inputContainer}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          required={props.isRequired}
          className={`${styles.input} ${errorClass} ${props.startIcon && styles.inputWithStartIcon}`}
          id={props.fieldName}
          onChange={handleChange}
          value={props.value}
        />
        {props.startIcon && <img src={props.startIcon} className={styles.inputIcon} alt="start icon"/>}
      </div>
      {props.errorMessage && <AlertIcon className={styles.errorIcon}/>}
      {props.errorMessage && (
        <p className={styles.errorMessage}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default FormField;
