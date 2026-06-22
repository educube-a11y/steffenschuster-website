interface NetworkFieldProps {
  seed: number;
  count: number;
  color: string;
  opacity: number;
  className?: string;
  style?: React.CSSProperties;
}

function lcgRandom(seed: number, count: number): [number, number][] {
  const pts: [number, number][] = [];
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < count; i++) pts.push([rnd() * 100, rnd() * 100]);
  return pts;
}

export function NetworkField({ seed, count, color, opacity, className, style }: NetworkFieldProps) {
  const pts = lcgRandom(seed, count);
  const lines: [[number, number], [number, number]][] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i][0] - pts[j][0];
      const dy = pts[i][1] - pts[j][1];
      if (Math.sqrt(dx * dx + dy * dy) < 26) lines.push([pts[i], pts[j]]);
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", ...style }}
      className={className}
    >
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
          stroke={color} strokeWidth={0.18} opacity={opacity}
        />
      ))}
      {pts.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={0.55} fill={color} opacity={opacity + 0.2} />
      ))}
    </svg>
  );
}
