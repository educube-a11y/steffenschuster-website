const NODES: [number, number][] = [
  [24, 4], [42, 16], [42, 38], [24, 50], [6, 38], [6, 16], [24, 27],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
  [0, 3], [1, 4], [2, 5],
];

interface LogoMarkProps {
  size?: number;
  nodeColor?: string;
  edgeColor?: string;
  centerColor?: string;
  textColor?: string;
}

export function LogoMark({
  size = 48,
  nodeColor = "#fff",
  edgeColor = "#ff9800",
  centerColor = "#ff9800",
  textColor = "#16212e",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 54"
      width={size}
      height={size}
      style={{ display: "block", overflow: "visible" }}
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a][0]} y1={NODES[a][1]}
          x2={NODES[b][0]} y2={NODES[b][1]}
          stroke={edgeColor}
          strokeWidth={0.9}
          opacity={0.45}
        />
      ))}
      {NODES.slice(0, 6).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2.4} fill={nodeColor} />
      ))}
      <circle cx={24} cy={27} r={9} fill={centerColor} />
      <text
        x={24} y={27}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-cormorant), serif"
        fontSize={13}
        fontWeight={600}
        fill={textColor}
      >
        S
      </text>
    </svg>
  );
}
