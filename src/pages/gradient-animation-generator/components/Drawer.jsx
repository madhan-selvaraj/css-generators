import "./drawer.css";

const Drawer = () => {
  return (
    <aside>
      <label htmlFor="speed">Speed</label>
      <input type="range" name="speed" id="speed" />
      <label htmlFor="gradient-angle">Gradient angle</label>
      <input type="range" name="gradient-angle" id="gradient-angle" />
      <label htmlFor="scroll-angle">Scroll angle</label>
      <input type="range" name="scroll-angle" id="scroll-angle" />
      <label htmlFor="colors">Add colors</label>
      <legend>
        <input type="color" name="color1" id="color1" />
        <input type="color" name="color1" id="color1" />
        <input type="color" name="color1" id="color1" />
        <input type="button" value="+" />
      </legend>
    </aside>
  );
};

export default Drawer;
