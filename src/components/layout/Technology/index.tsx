import TechnologyCard from "../../ui/TechnologyCard";
import {
    siAngular,
    siHtml5,
    siCss,
    siNextdotjs,
    siVuedotjs,
    siSass,
    siTailwindcss,
    siReact,
    siPython,
    siTypescript,
    siJavascript,
    siDocker,
    siFigma,
    siGit,
    siGithub,
    siMysql,
    siPostgresql,
    siPostman,
    siUnity,
    siVercel,
} from "simple-icons";

const Technology = () => {
    return (
        <section className="py-20 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col gap-10">
                <div>
                    <h1 className="text-6xl font-bold text-center mb-2">
                        Tecnologias
                    </h1>
                    <p className="w-lg  text-center ">
                        Aqui estão algumas das tecnologias e ferramentas que domino, cada uma representando um passo na minha jornada de aprendizado e desenvolvimento como profissional de tecnologia.
                    </p>
                </div>

                <div className="flex justify-between w-full items-start relative">
                    <div className="flex items-center flex-col  w-120">
                        <h1 className="text-4xl font-bold text-center mb-8">
                            Desenvolvimento
                        </h1>
                        <div className="flex flex-wrap gap-8 justify-center items-center">
                            <TechnologyCard
                                name="HTML5"
                                path={siHtml5.path}
                            />

                            <TechnologyCard
                                name="CSS"
                                path={siCss.path}
                            />

                            <TechnologyCard
                                name="SASS"
                                path={siSass.path}
                            />

                            <TechnologyCard
                                name="JavaScript"
                                path={siJavascript.path}
                            />

                            <TechnologyCard
                                name="Typescript"
                                path={siTypescript.path}
                            />

                            <TechnologyCard
                                name="Python"
                                path={siPython.path}
                            />

                            <TechnologyCard
                                name="Java"
                                path="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"
                            />

                            <TechnologyCard
                                name="Angular"
                                path={siAngular.path}
                            />

                            <TechnologyCard
                                name="React-Native"
                                path={siReact.path}
                            />

                            <TechnologyCard
                                name="React.js"
                                path={siReact.path}
                            />

                            <TechnologyCard
                                name="Next.js"
                                path={siNextdotjs.path}
                            />

                            <TechnologyCard
                                name="Vue"
                                path={siVuedotjs.path}
                            />

                            <TechnologyCard
                                name="Tailwind CSS"
                                path={siTailwindcss.path}
                            />
                        </div>

                    </div>

                    <span className="w-1 h-70 bg-white-500 absolute bottom-20 right-150 rounded-4xl"></span>

                    <div className="flex items-center flex-col  w-120">
                        <h1 className="text-4xl font-bold text-center mb-8">
                            Ferramentas
                        </h1>
                        <div className="flex flex-wrap gap-8 justify-center items-center">    
                            <TechnologyCard
                                name="Git"
                                path={siGit.path}
                            />

                            <TechnologyCard
                                name="Github"
                                path={siGithub.path}
                            />

                            <TechnologyCard
                                name="Docker"
                                path={siDocker.path}
                            />

                            <TechnologyCard
                                name="Figma"
                                path={siFigma.path}
                            />

                            <TechnologyCard
                                name="Postman"
                                path={siPostman.path}
                            />

                            <TechnologyCard
                                name="Vercel"
                                path={siVercel.path}
                            />

                            <TechnologyCard
                                name="PostgreSQL"
                                path={siPostgresql.path}
                            />

                            <TechnologyCard
                                name="MySQL"
                                path={siMysql.path}
                            />

                            <TechnologyCard
                                name="Unity"
                                path={siUnity.path}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Technology