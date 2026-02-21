import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal"
import ProjectCard from "@/components/ui/ProjectCard"
import Badge from "@/components/ui/Badge"
import { useState } from "react";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const technologies = ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"];

    return (
        <section id="projects" className="py-20 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col gap-10">
                <div>
                    <h1 className="text-6xl font-bold text-center mb-2">
                        Projetos
                    </h1>
                    <p className="w-lg  text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus totam minus consequatur, est inventore suscipit accusamus deleniti voluptate necessitatibus delectus.
                    </p>
                </div>



                <div className="flex gap-8 flex-wrap items-center justify-center">
                    <ProjectCard title="Amanda" viewModal={setIsModalOpen} />
                    <ProjectCard title="Amanda" viewModal={setIsModalOpen} />
                    <ProjectCard title="Amanda" viewModal={setIsModalOpen} />
                    <ProjectCard title="Amanda" viewModal={setIsModalOpen} />
                    <ProjectCard title="Amanda" viewModal={setIsModalOpen} />
                </div>
            </div>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col justify-between h-full">
                    <img src="https://i.redd.it/d95vefqn7nn71.png" alt="" className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="mb-4">
                        <h1 className="text-md font-bold mb-3">Projeto X</h1>
                        <p className="font-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Fuga, qui? Expedita odit accusantium illo voluptatibus odio, dolor commodi error reprehenderit consequatur quidem.
                            Quasi recusandae harum, sed cumque dicta unde. Quaerat!
                        </p>
                    </div>
                    <div className="mb-4">
                        <h1 className="text-md font-medium mb-3">Tecnologias</h1>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <Badge key={index} variant="liquidGlass">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button isFullWidth icon="InternetIcon">Site </Button>
                        <Button isFullWidth variant="liquidGlass">Repositorio  🦎</Button>
                    </div>
                </div>
            </Modal>


        </section >
    )
}

export default Projects