import Drawer from "./components/Drawer";
import Preview from "./components/Preview";
import useAnimatedGradientBackgroundReducer from "./useAnimatedGradientBackgroundReducer";

const AnimatedGradientBackground = () => {
  const animatedGradientBackgroundReducer =
    useAnimatedGradientBackgroundReducer();
  const { speed, gradientAngle, colors } = animatedGradientBackgroundReducer;

  return (
    <main>
      <Drawer {...animatedGradientBackgroundReducer} />
      <Preview speed={speed} gradientAngle={gradientAngle} colors={colors} />
    </main>
  );
};

export default AnimatedGradientBackground;
