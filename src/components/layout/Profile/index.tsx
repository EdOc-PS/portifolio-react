import Roadmap from "@/components/ui/Roadmap"
import RoadmapCard from "@/components/ui/RoadmapCard"
import { Icon } from "@/components/ui/Icon"
import { useState } from "react"

const Profile = () => {
    const [roadSelected, setRoadSelected] = useState<number>(0);
    const [visibleStart, setVisibleStart] = useState(0);

    const roadMocks = [
        {
            title: "Tecnico de Informática",
            description: "Tecnico em informatica concluido em 2023 no IFMG"
        },
        {
            title: "Sistemas de Informação",
            description: "Graduação em sistemas de informação em andamento no IFMG"
        },
        {
            title: "Tecnico de Informatica",
            description: "Atuei como estágiário em TI, com experiência em suporte técnico, manutenção de hardware e software, além de colaborar com a equipe para resolver problemas técnicos."
        }, {
            title: "Assessor de Marketing",
            description: "Atuei voluntariamnent na em empresa Júnior do IFMG, desenvolvi habilidades como trabalho em equipe, criação de conteúdo e suporte em TI."
        },
        {
            title: "Analista de Integração de Dados",
            description: "Atuei desenvolvendo e mantendo integrações de dados entre sistemas, garantindo a consistência e a qualidade, colaborando com equipes multidisciplinares para otimizar processos de integração."
        },
        {
            title: "Desenvolvedor Frontend",
            description: "Desenvolvimento de interfaces web modernas e responsivas."
        }]

    const visibleCount = 4;
    const maxStart = Math.max(0, roadMocks.length - visibleCount);

    const visibleRoads = roadMocks.slice(visibleStart, visibleStart + visibleCount);

    const handleShowNext = () => {
        setVisibleStart((prev) => Math.min(prev + 1, maxStart));
    };

    const handleShowPrev = () => {
        setVisibleStart((prev) => Math.max(prev - 1, 0));
    };

    const liquidGlassStyles = {
        background: "#FFFFFF1F",
        border: "1px solid #FFFFFF59",
        backdropFilter: "blur(16px)",
        boxShadow: "inset 0 1px 0 #FFFFFF73, 0 10px 24px #00000038"
    };



    return (
        <section id="profile" className="py-40 w-full ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                <div className="w-full">
                    <h1 className="text-6xl font-bold text-start mb-2">
                        Trajetória
                    </h1>
                    <p className="w-lg">
                        Ao longo da minha trajetória, busquei constantemente aprimorar meus conhecimentos e habilidades, com ênfase em áreas essenciais para o desenvolvimento profissional na área de tecnologia.
                    </p>
                </div>

                <div className="h-126 w-full flex gap-15 py-4">
                    <div className="relative h-full w-lg">
                        <div className="flex h-full flex-col justify-start gap-2 transition-all duration-300 ease-out">
                            {visibleRoads.map((road, index) => {
                                const absoluteIndex = visibleStart + index;

                                return (
                                    <RoadmapCard
                                        key={absoluteIndex}
                                        setRoadSelected={setRoadSelected}
                                        roadSelected={roadSelected}
                                        index={absoluteIndex}
                                        title={road.title}
                                        description={road.description}
                                    />
                                );
                            })}
                        </div>

                        {visibleStart > 0 && (
                            <button
                                type="button"
                                className="cursor-pointer absolute top-0 left-90 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-out"
                                style={liquidGlassStyles}
                                onClick={handleShowPrev}
                                aria-label="Mostrar card anterior"
                            >
                                <Icon name="ArrowUp01Icon" size={20} color={"#d1cfc0"} />
                            </button>
                        )}

                        {visibleStart < maxStart && (
                            <button
                                type="button"
                                className="cursor-pointer absolute top-10 left-90 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-out"
                                style={liquidGlassStyles}
                                onClick={handleShowNext}
                                aria-label="Mostrar proximo card"
                            >
                                <Icon name="ArrowDown01Icon" size={20} color={"#d1cfc0"} />
                            </button>
                        )}
                    </div>

                    <Roadmap roadSelected={roadSelected} />
                </div>
            </div>

        </section >
    )
}

export default Profile