import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  onChange: (code: string) => void;
  isError?: boolean;
}

const CodeInput: React.FC<Props> = ({ onChange, isError }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = useCallback((index: number) => {
    const input = inputs.current[index];
    if (input) {
      input.focus();
    }
  }, []);

  const updateCode = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    onChange(newCode.join(""));

    if (value && index < 3) {
      focusInput(index + 1);
    } else if (!value && index > 0) {
      focusInput(index - 1);
    }
  };

  // Підготовка референсів для кожного інпуту
  useEffect(() => {
    inputs.current = inputs.current.slice(0, code.length);
  }, [code.length]);

  return (
    <div className={styles.inputContainer}>
      {code.map((singleCode, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          className={`${styles.input} ${
            singleCode === "" ? styles.empty : ""
          } ${isError ? styles.error : ""}`}
          value={singleCode}
          onChange={(e) => updateCode(e.target.value, index)}
          type="text"
          maxLength={1}
          placeholder="0"
          // Додайте ваши стилі тут...
        />
      ))}
    </div>
  );
};

export default CodeInput;
