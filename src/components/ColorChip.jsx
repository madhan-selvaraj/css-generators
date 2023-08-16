import classes from "./ColorChip.module.css";

const ColorChip = ({ color, onChange, onRemove, id }) => {
  return (
    <span className={classes.container}>
      <input
        type="color"
        value={color}
        onChange={onChange}
        name={id}
        id={id}
        className={classes.colorInput}
      />
      {onRemove && (
        <button onClick={onRemove} className={classes.remove}>
          x
        </button>
      )}
    </span>
  );
};

export default ColorChip;
