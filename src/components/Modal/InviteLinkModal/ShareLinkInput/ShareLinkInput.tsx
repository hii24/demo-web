import styles from "./styles.module.scss";

interface Props {
  url: string;
}

const ShareLinkInput: React.FC<Props> = (props) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>Share link</span>
      <input value={props.url} className={styles.input} />
    </label>
  );
};

export default ShareLinkInput;
