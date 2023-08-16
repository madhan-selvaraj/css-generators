import { useMemo, useState } from "react";
import CodePreview from "../../components/CodePreview";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import useAnimatedGradientBackgroundReducer from "./useAnimatedGradientBackgroundReducer";

const AnimatedGradientBackground = () => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const animatedGradientBackgroundReducer =
    useAnimatedGradientBackgroundReducer();
  const { speed, gradientAngle, colors } = animatedGradientBackgroundReducer;

  const code = useMemo(
    () =>
      ` .selector {
        background: linear-gradient(${gradientAngle}deg, ${colors.join(", ")});
        background-size: ${colors.length * 100}% ${colors.length * 100}%;
    
        -webkit-animation: movingGradient ${speed}s ease infinite;
        -moz-animation: movingGradient ${speed}s ease infinite;
        animation: movingGradient ${speed}s ease infinite;
    }
    
  @keyframes movingGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPreviewOpen]
  );

  return (
    <main>
      <Editor
        {...animatedGradientBackgroundReducer}
        openPreview={() => setPreviewOpen(true)}
        onCopy={() => navigator.clipboard.writeText(code)}
      />
      <Preview speed={speed} gradientAngle={gradientAngle} colors={colors} />
      <CodePreview
        open={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
        code={code}
      />
    </main>
  );
};

export default AnimatedGradientBackground;
