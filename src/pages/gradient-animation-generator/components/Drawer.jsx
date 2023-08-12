/* eslint-disable react/prop-types */
import "./drawer.css";

const Drawer = ({
  speed,
  gradientAngle,
  colors,
  updateSpeed,
  updateGradientAngle,
  addColor,
  updateColor,
  // moveColor,
  removeColor,
}) => {
  return (
    <aside>
      <label htmlFor="speed">Speed</label>
      <input
        type="range"
        value={speed}
        min={1}
        max={30}
        onChange={(e) => updateSpeed(e.target.value)}
        name="speed"
        id="speed"
      />
      <label htmlFor="gradient-angle">Gradient angle</label>
      <input
        type="range"
        value={gradientAngle}
        min={0}
        max={360}
        onChange={(e) => updateGradientAngle(e.target.value)}
        name="gradient-angle"
        id="gradient-angle"
      />
      <label htmlFor="colors">Add colors</label>
      <legend>
        {colors.map((color, index) => (
          <span key={color + "" + index}>
            <input
              type="color"
              value={color}
              onChange={(e) => updateColor(e.target.value, index)}
              name={color + "" + index}
              id={color + "" + index}
            />
            <button type="button" onClick={() => removeColor(index)}>
              x
            </button>
          </span>
        ))}
        <input type="button" value="+" onClick={addColor} />
      </legend>
    </aside>
  );
};

export default Drawer;
