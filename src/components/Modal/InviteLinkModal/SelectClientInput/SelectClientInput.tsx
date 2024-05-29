import { useState } from "react";
import ReactSelect, { components } from "react-select";
import { ReactComponent as UserIcon } from "../../../../assets/vectors/invite/user.svg";
import styles from "./styles.module.scss";

const SelectClientInput: React.FC = () => {
  const [client, setClient] = useState<string | null>(null);

  const options = [
    { value: "1", label: "Client 1" },
    { value: "2", label: "Client 2" },
    { value: "3", label: "Client 3" },
  ];

  const ControlComponent = (props: any) => {
    return (
      <components.Control {...props}>
        <UserIcon />
        {props.children}
      </components.Control>
    );
  };

  return (
    <label className={styles.container}>
      <span className={styles.text}>Client</span>
      <ReactSelect
        placeholder={"Select client"}
        options={options}
        components={{
          Control: (props) => <ControlComponent {...props} />,
        }}
        onChange={(value) => {
          if (value?.label) {
            setClient(value.label);
          }
        }}
        styles={{
          indicatorSeparator: (base) => ({
            ...base,
            width: "0px",
          }),

          dropdownIndicator: (base) => ({ ...base, padding: 0 }),
          option: (base) => ({ ...base, justifyContent: "flex-start" }),
          placeholder: (base) => ({
            ...base,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: 1.5,
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "8px",
          }),

          control: (base, state) => ({
            ...base,
            fontSize: "16px",
            color: "#101828",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: 1.5,
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            padding: "10px 14px",
            borderRadius: "8px",
            outline: "none",
            borderWidth: "1px",
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            marginLeft: "8px",
          }),
          singleValue: (base) => ({
            ...base,
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "8px",
          }),
          valueContainer: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
          }),
          menu: (base) => ({
            ...base,

            textAlign: "start",
          }),
        }}
      />
    </label>
  );
};

export default SelectClientInput;
