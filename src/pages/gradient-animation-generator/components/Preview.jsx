import "./preview.css";

const Preview = ({ speed, gradientAngle, colors }) => {
  const gradientStyle = {
    animationDuration: `${speed}s`,
    backgroundImage: `linear-gradient(${gradientAngle}deg, ${colors.join(
      ", "
    )})`,
    backgroundSize: `${colors.length * 100}% ${colors.length * 100}%`,
  };

  return (
    <section className="preview" style={gradientStyle}>
      <div className="content">
        Animated <br /> Gradient <br /> Background <br /> Generator
      </div>
    </section>
  );
};

export default Preview;
