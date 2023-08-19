import { useReducer } from "react";

const initialState = {
  color: "#111928",
  blur: 15,
  opacity: 60,
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return { ...state, color: action.payload };
    case "UPDATE_BLUR":
      return { ...state, blur: action.payload };
    case "UPDATE_OPACITY":
      return { ...state, opacity: action.payload };
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const useGlassmorphismReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateColor = (color) =>
    dispatch({ type: "UPDATE_COLOR", payload: color });
  const updateBlur = (blur) => dispatch({ type: "UPDATE_BLUR", payload: blur });
  const updateOpacity = (opacity) =>
    dispatch({ type: "UPDATE_OPACITY", payload: Math.min(opacity, 100) });
  const toggleDarkMode = () => dispatch({ type: "UPDATE_SPEED" });

  return {
    color: state.color,
    blur: state.blur,
    opacity: state.opacity,
    darkMode: state.darkMode,
    updateColor,
    updateBlur,
    updateOpacity,
    toggleDarkMode,
  };
};

export default useGlassmorphismReducer;
