/* eslint-disable react/prop-types */
import "./preview.css";

const Preview = ({ speed, gradientAngle, colors }) => {
  const gradientStyle = {
    animationDuration: `${speed}s`,
    backgroundImage: `linear-gradient(${gradientAngle}deg, ${colors.join(
      ", "
    )})`,
    backgroundSize: "600% 600%",
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
