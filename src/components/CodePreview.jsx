import styles from "./CodePreview.module.css";

const CodePreview = ({ open, onClose, code }) => {
  return (
    <dialog open={open} className={styles.dialog}>
      <button onClick={onClose} className={styles.closeButton}>
        &#10006;
      </button>
      <pre>{code}</pre>
    </dialog>
  );
};

export default CodePreview;
