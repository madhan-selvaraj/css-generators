import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const generators = [
  {
    name: "Animated Gradient Background Generator",
    path: "/gradient-background",
  },
  {
    name: "Glasmorphism UI Generator",
    path: "/glassmorphism-generator",
  },
  {
    name: "Box shadow Generator",
    path: "/box-shadow-generator",
  },
  {
    name: "Neumorphism UI Generator",
    path: "",
  },
  {
    name: "Text shadows Generator",
    path: "",
  },
  {
    name: "Border radius Generator",
    path: "",
  },
  {
    name: "Grid Layout Generator",
    path: "",
  },
  {
    name: "Flexbox Layout Generator",
    path: "",
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
          <Card to={generator.path} key={generator.name}>
            {generator.name}
          </Card>
        ))}
      </ul>
    </main>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ children, to = "" }) => {
  const disabled = to === "";

  return (
    <li title={disabled ? "Coming soon" : ""} disabled={disabled}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Home;
