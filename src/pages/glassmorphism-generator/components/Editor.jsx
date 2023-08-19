import ColorChip from "../../../components/ColorChip";
import styles from "./editor.module.css";

const Editor = ({
  speed,
  gradientAngle,
  colors,
  updateSpeed,
  updateGradientAngle,
  addColor,
  updateColor,
  // moveColor,
  removeColor,
  openPreview,
  onCopy,
}) => {
  return (
    <aside className={styles.container}>
      <div className={styles.editor}>
        <label htmlFor="colors">Colors</label>
        <legend className={styles.colorContainer}>
          {colors.map((color, index) => (
            <ColorChip
              color={color}
              onChange={(e) => updateColor(e.target.value, index)}
              onRemove={() => removeColor(index)}
              id={color + "" + index}
              key={color + "" + index}
            />
          ))}
          <input
            type="button"
            value="+"
            onClick={addColor}
            className={styles.addColor}
          />
        </legend>
        <label htmlFor="speed">Speed</label>
        <span className={styles.sliderInput}>
          <input
            type="range"
            value={speed}
            min={1}
            max={30}
            onChange={(e) => updateSpeed(e.target.value)}
            name="speed"
            id="speed"
          />
          &nbsp;
          {speed} s
        </span>
        <label htmlFor="gradient-angle">Gradient angle</label>
        <span className={styles.sliderInput}>
          <input
            type="range"
            value={gradientAngle}
            min={0}
            max={360}
            onChange={(e) => updateGradientAngle(e.target.value)}
            name="gradient-angle"
            id="gradient-angle"
          />
          &nbsp;
          {gradientAngle} &#176;
        </span>
      </div>
      <div className={styles.actions}>
        <button onClick={openPreview}>View CSS</button>
        <button onClick={onCopy}>Copy CSS</button>
      </div>
    </aside>
  );
};

export default Editor;
