import { Icon } from "../Icon";
interface RoadmapProps {
    roadSelected: number;
}

const roadmapPoints = [
    { cx: 200, cy: 70, icon: "Mortarboard02Icon" },
    { cx: 760, cy: 70, icon: "Mortarboard02Icon" },
    { cx: 620, cy: 270, icon: "AiComputerIcon" },
    { cx: 260, cy: 270, icon: "MarketingIcon" },
    { cx: 260, cy: 470, icon: "DatabaseIcon" },
    { cx: 800, cy: 470, icon: "SourceCodeIcon" },
] as const;

const Roadmap = ({ roadSelected }: RoadmapProps) => {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 590"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Roadmap do processo"
            >
                <defs>
                    <filter id="lastItemGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="5"
                            floodColor="#a5b4fc"
                            floodOpacity="0.35"
                        >
                            <animate
                                attributeName="stdDeviation"
                                values="3;7;3"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="flood-opacity"
                                values="0.35;0.8;0.35"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </feDropShadow>
                    </filter>
                </defs>

                <path
                    d="M 80 70 H 820 C 900 70 940 110 940 170 C 940 230 900 270 820 270 H 180 C 110 270 60 310 60 370 C 60 430 110 470 180 470 H 930"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <g>
                    {roadmapPoints.map((point, index) => {
                        const isSelected = roadSelected === index;

                        return (
                            <g
                                key={`circle-${point.cx}-${point.cy}`}
                                className={isSelected ? "text-indigo-300" : undefined}
                                filter={isSelected ? "url(#lastItemGlow)" : undefined}
                            >
                                <circle
                                    cx={point.cx}
                                    cy={point.cy}
                                    r="35"
                                    fill="#d1cfc0"
                                    stroke={isSelected ? "currentColor" : "#d1cfc0"}
                                    strokeWidth={isSelected ? "5" : "3"}
                                />

                                {isSelected && (
                                    <circle
                                        cx={point.cx}
                                        cy={point.cy}
                                        r="46"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        opacity="0.15"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="42;52;42"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0.2;0.85;0.2"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}
                            </g>
                        );
                    })}
                </g>

                <g>
                    {roadmapPoints.map((point, index) => {
                        const isSelected = roadSelected === index;

                        return (
                            <foreignObject
                                key={`icon-${point.cx}-${point.cy}`}
                                x={point.cx - 18}
                                y={point.cy - 18}
                                width="36"
                                height="36"
                            >
                                <div className="flex h-full w-full items-center justify-center">
                                    <Icon name={point.icon} size={36} color={isSelected ? "#1f1f1f" : "#1f1f1f"} />
                                </div>
                            </foreignObject>
                        );
                    })}
                </g>

                <g fill="currentColor" fontSize="16" fontWeight="600" textAnchor="middle" className="text-gray-edoc-500">
                    <text x="200" dy="140">Tecnico de Informatica</text>
                    <text x="760" dy="140">
                        <tspan x="760" dy="140"> Graduação em </tspan>
                        <tspan x="760" dy="20"> Sistemas de Informação</tspan>

                    </text>

                    <text x="620" y="340">
                        <tspan x="620" dy="0">Estagiário </tspan>
                        <tspan x="620" dy="20">em TI</tspan>
                    </text>

                    <text x="260" y="340">
                        <tspan x="260" dy="0">Assessor  </tspan>
                        <tspan x="260" dy="20">de Marketing</tspan>
                    </text>

                    <text x="260" y="540">
                        <tspan x="260" dy="0">Analista de </tspan>
                        <tspan x="260" dy="20">Integração de Dados</tspan>
                    </text>

                    <text x="800" y="540">
                        <tspan x="800" dy="0">Desenvolvedor </tspan>
                        <tspan x="800" dy="20">Front-End</tspan>
                    </text>
                
                </g>
            </svg>
        </div>
    );
}
export default Roadmap;