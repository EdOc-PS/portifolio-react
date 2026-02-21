interface TechnologyCardProps {
    name: string;
    path: string;
}

const TechnologyCard = ({ name, path }: TechnologyCardProps) => {
    return (
        <div className="flex gap-4 items-center">
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 fill-gray-300"
            >
                <title>{name}</title>
                <path d={path} />
            </svg>
            <p className="text-gray-300 text-2xl font-bold">{name}</p>
        </div>
    );
};

export default TechnologyCard;
