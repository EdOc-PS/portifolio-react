interface RoadmapCardProps {
    setRoadSelected: (index: number) => void;
    index: number;
    title: string;
    roadSelected: number;
    description: string;
}

const RoadmapCard = ({ setRoadSelected, index, title, roadSelected, description, }: RoadmapCardProps) => {
    return (
        <div
            className={`p-3 rounded-lg hover:bg-white-500 transition-colors duration-200 ease-in-out cursor-pointer ${index === roadSelected ? "bg-white-500" : ""}`}
            onClick={() => setRoadSelected(index)}
        >
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-[15px]">{description}</p>
        </div>
    );
}
export default RoadmapCard;