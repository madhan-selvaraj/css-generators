import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const generators = [
  {
    name: "Animated Gradient Background Generator",
    path: "/gradient-background",
    disabled: false,
  },
  {
    name: "Glasmorphism UI Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Box shadow Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Neumorphism UI Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Text shadows Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Border radius Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Grid Layout Generator",
    path: "",
    disabled: true,
  },
  {
    name: "Flexbox Layout Generator",
    path: "",
    disabled: true,
  },
];

const Home = () => {
  return (
    <main className={classes.container}>
      <header className={classes.header}>
        <h1>CSS Generators</h1>
      </header>
      <ul className={classes.generatorList}>
        {generators.map((generator) => (
          <Card
            to={generator.path}
            disabled={generator.disabled}
            key={generator.name}
          >
            {generator.name}
          </Card>
        ))}
      </ul>
    </main>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ children, to = "", disabled = false }) => {
  return (
    <li title={disabled ? "Coming soon" : ""} disabled={disabled}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Home;
