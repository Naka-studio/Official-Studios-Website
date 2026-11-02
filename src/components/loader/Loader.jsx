import "./Loader.scss";

const ANGLES = [0, 120, 240];
const DURATION = 2; // detik, samain sama durasi di SCSS

export default function Loader({
  size = "2em",
  fontSize = 16,
  hue = 69,
  label = "Fetching data",
}) {
  return (
    <div
      className="orb-wrap"
      style={{ "--size": size, "--hue": hue, fontSize }}
      role="status"
      aria-live="polite"
    >
      {label && (
        <p className="orb-label">
          {label}
          <span className="orb-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      )}

      <div className="orb-scene">
        <div className="orb-tilt">
          <div className="orb-orbit">
            {ANGLES.map((a) => (
              <div
                key={a}
                className="orb-ball"
                style={{
                  "--a": `${a}deg`,
                  "--d": `${-(a / 360) * DURATION}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
