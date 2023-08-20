import { useMemo, useState } from "react";
import CodePreview from "../../components/CodePreview";
import useBoxShadowReducer from "./useBoxShadowReducer";

const BoxShadowGenerator = () => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const {
    boxColor,
    shadowColor,
    horizontalLength,
    verticalLength,
    blur,
    spread,
    opacity,
    setBoxColor,
    setShadowColor,
    setHorizontalLength,
    setVerticalLength,
    setBlur,
    setSpread,
    setOpacity,
  } = useBoxShadowReducer();

  const code = useMemo(
    () => `
  .selector {
    box-shadow: ${horizontalLength}px ${verticalLength}px ${blur}px ${spread}px ${shadowColor}${opacity.toString(
      16
    )};
    -webkit-box-shadow: ${horizontalLength}px ${verticalLength}px ${blur}px ${spread}px ${shadowColor}${opacity.toString(
      16
    )};
    -moz-box-shadow: ${horizontalLength}px ${verticalLength}px ${blur}px ${spread}px ${shadowColor}${opacity.toString(
      16
    )};
    background-color: ${boxColor};
  }`,
    [
      blur,
      boxColor,
      horizontalLength,
      opacity,
      shadowColor,
      spread,
      verticalLength,
    ]
  );

  return (
    <main className="flex justify-center items-center">
      <div
        className="p-12 text-white rounded-2xl flex flex-col gap-4 w-1/3 h-auto"
        style={{
          boxShadow: `${horizontalLength}px ${verticalLength}px ${blur}px ${spread}px ${shadowColor}${opacity.toString(
            16
          )}`,
          // -webkit-box-shadow: 6px 6px 7px 0px rgba(168, 168, 168, 1),
          // -moz-box-shadow: 6px 6px 7px 0px rgba(168, 168, 168, 1),
          backgroundColor: boxColor,
        }}
      >
        <h1 className="text-3xl font-bold text-center">Box Shadow Generator</h1>
        <div className="flex flex-row justify-between items-center gap-8">
          <span>
            <label htmlFor="box-color">Box Color</label>
            &nbsp;&nbsp;
            <input
              type="color"
              value={boxColor}
              onChange={(e) => setBoxColor(e.target.value)}
              id="box-color"
            />
          </span>
          <span>
            <label htmlFor="shadow-color">Shadow Color</label>
            &nbsp;&nbsp;
            <input
              type="color"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
              id="shadow-color"
            />
          </span>
        </div>

        <label htmlFor="horizontal-length">Horizontal Length</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={25}
            value={horizontalLength}
            onChange={(e) => setHorizontalLength(e.target.value)}
            className="flex-1"
            id="horizontal-length"
          />
          <span>{horizontalLength} px</span>
        </div>

        <label htmlFor="vertical-length">Vertical Length</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={25}
            value={verticalLength}
            onChange={(e) => setVerticalLength(e.target.value)}
            className="flex-1"
            id="vertical-length"
          />
          <span>{verticalLength} px</span>
        </div>

        <label htmlFor="blur">Blur</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={25}
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
            className="flex-1"
            id="blur"
          />
          <span>{blur} px</span>
        </div>

        <label htmlFor="spread">Spread</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={25}
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
            className="flex-1"
            id="spread"
          />
          <span>{spread} px</span>
        </div>

        <label htmlFor="opacity">Opacity</label>
        <div className="inline-flex gap-6">
          <input
            type="range"
            min={0}
            max={100}
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
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

export default BoxShadowGenerator;
