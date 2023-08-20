import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import {
  AnimatedGradientBackground,
  BoxShadowGenerator,
  GlassmorphismGenerator,
} from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/gradient-background"
          Component={AnimatedGradientBackground}
        />
        <Route
          path="/glassmorphism-generator"
          Component={GlassmorphismGenerator}
        />
        <Route path="/box-shadow-generator" Component={BoxShadowGenerator} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
