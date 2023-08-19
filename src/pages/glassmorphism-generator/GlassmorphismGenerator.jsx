import { useMemo, useState } from "react";
import CodePreview from "../../components/CodePreview";
import useGlassmorphismReducer from "./useGlassmorphismReducer";

const GlassmorphismGenerator = () => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const { color, opacity, blur, updateColor, updateBlur, updateOpacity } =
    useGlassmorphismReducer();

  const code = useMemo(
    () => `
    body {
      background-image: url('https://images.unsplash.com/photo-1676793894040-b6dd72276620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3289&q=80');
      background-position: center;
      background-size: cover;
  }
  
  .selector {
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      background-color: ${color}${opacity.toString(16)};
      border: 1px solid rgba(255, 255, 255, 0.125);
  }`,
    [blur, color, opacity]
  );

  return (
    <main
      className="flex justify-center items-center"
      style={{
        // background: "linear-gradient(270deg, #e39600, #ea4c89, #8f48eb)",
        background:
          "url(https://images.unsplash.com/photo-1676793894040-b6dd72276620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3289&q=80) no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="p-12 text-white rounded-2xl flex flex-col gap-4 w-1/3 h-auto"
        style={{
          backdropFilter: `blur(${blur}px) saturate(175%)`,
          backgroundColor: `${color}${opacity.toString(16)}`,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <h1 className="text-3xl font-bold text-center">Glassmorphism</h1>
        <label htmlFor="color">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => updateColor(e.target.value)}
          id="color"
        />

        <label htmlFor="blur">Blur</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={25}
            value={blur}
            onChange={(e) => updateBlur(e.target.value)}
            className="flex-1"
            id="blur"
          />
          <span>{blur} px</span>
        </div>

        <label htmlFor="opacity">Opacity</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={100}
            value={opacity}
            onChange={(e) => updateOpacity(e.target.value)}
            className="flex-1"
            id="opacity"
          />
          <span>{opacity} %</span>
        </div>

        <div className="flex justify-around pt-6">
          <button
            onClick={() => setPreviewOpen(true)}
            className="w-48 p-2 rounded bg-green-600"
          >
            View CSS
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="w-48 p-2 rounded bg-green-600"
          >
            Copy CSS
          </button>
        </div>
      </div>

      <CodePreview
        open={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
        code={code}
      />
    </main>
  );
};

export default GlassmorphismGenerator;
