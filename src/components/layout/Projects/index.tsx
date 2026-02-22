import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal"
import ProjectCard from "@/components/ui/ProjectCard"
import Badge from "@/components/ui/Badge"
import { useEffect, useState } from "react";
import { GetRequest } from "@/service/getRequest";
import { Link } from "react-router-dom";


interface Project {
    title: string;
    _id: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [projects, setProjects] = useState<Project[]>([]);
    const [details, setDetails] = useState<Project | null>(null);

    const getProjects = async () => {
        const response = await GetRequest("/api/projects");

        if (!response.success) {
            console.error("Ocorreu um erro ao obter os projetos.");
            return;
        }
        setProjects(response.projects);
    }

    const getDetails = async (id: string) => {
        const response = await GetRequest(`/api/projects/${id}`);

        if (!response.success) {
            console.error("Ocorreu um erro ao obter os detalhes do projeto.");
            return;
        }

        console.log(response.project);
        setDetails(response.project);
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <section id="projects" className="py-20 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col gap-10">
                <div>
                    <h1 className="text-6xl font-bold text-center mb-2">
                        Projetos
                    </h1>
                    <p className="w-lg  text-center">
                        Confira a seguir alguns dos projetos que desenvolvi, refletindo minhas habilidades e a aplicação de tecnologias para resolver desafios reais.
                    </p>
                </div>



                <div className="flex gap-8 flex-wrap items-center justify-center">
                    {projects.map((project) => (
                        <ProjectCard id={project._id} key={project._id} title={project.title} viewModal={setIsModalOpen} getDetails={getDetails} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col justify-between h-full">
                    <img src="https://i.redd.it/d95vefqn7nn71.png" alt="" className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="mb-4">
                        <h1 className="text-md font-bold mb-3">{details?.title}</h1>
                        <p className="font-light h-full">
                            {details?.description}
                        </p>
                    </div>
                    <div className="mb-4">
                        <h1 className="text-md font-medium mb-3">Tecnologias</h1>
                        <div className="flex flex-wrap gap-2">
                            {details?.technologies.map((tech, index) => (
                                <Badge key={index} variant="liquidGlass">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {details?.live && (
                            <Button isFullWidth icon="InternetIcon">
                                <Link to={details?.live || "#"} target="_blank">Site</Link>
                            </Button>
                        )}
                        <Button isFullWidth variant="liquidGlass">
                            <Link to={details?.github || "#"} target="_blank">Repositório  🦎</Link>
                        </Button>
                    </div>
                </div>
            </Modal>


        </section >
    )
}

export default Projects