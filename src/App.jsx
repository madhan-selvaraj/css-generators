import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import { AnimatedGradientBackground, GlassmorphismGenerator } from "./pages";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
