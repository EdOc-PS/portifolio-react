import { Icon } from "../Icon";

interface ProjectsCardProps {
    title?: string;
    viewModal: (value: boolean) => void;
}

const ProjectCard = ({ title, viewModal }: ProjectsCardProps) => {
    const liquidGlassStyles = {
        background: "#FFFFFF1F",
        border: "1px solid #FFFFFF59",
        backdropFilter: "blur(16px)",
        boxShadow: "inset 0 0px 0 #FFFFFF73, 0 10px 24px #00000038"
    };

    const defaultStyles = {
        background: "transparent",
        border: "1px solid transparent",
        backdropFilter: "none",
        boxShadow: "none"
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        Object.assign(e.currentTarget.style, liquidGlassStyles);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        Object.assign(e.currentTarget.style, defaultStyles);
    };

    return (
        <div
            className="flex flex-col gap-4 items-start justify-start w-60 p-3 transition-all hover:scale-105 rounded-xl ease-in-out duration-200 cursor-pointer group"
            style={defaultStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => viewModal(true)}
       >
            <img src="https://i.redd.it/d95vefqn7nn71.png" alt="" className=" h-90 object-cover rounded-xl transition-all hover:scale-101" />
            <div className="w-full relative ">
                <h1 className=" text-lg font-bold">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloribus?</p>
                <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Icon name="ArrowRight01Icon" size={20} color="text-gray-500" />
                </div>
            </div>

        </div>

    );
};

export default ProjectCard;
