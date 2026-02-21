import { Icon } from "@/components/ui/Icon"

const Footer = () => {
    return (
        <footer className="w-full bg-gray-edoc-500">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 py-30">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-edoc-500">
                            Obrigado pela visita!
                        </h1>
                        <p className="max-w-lg text-neutral-edoc-500/80 text-base sm:text-lg">
                            Um portfolio pensado para mostrar o que importa: projetos, impacto e
                            detalhes de implementacao.
                        </p>
                        
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <p className="text-neutral-edoc-500 font-semibold">Redes</p>
                            <ul className="flex flex-wrap items-center gap-4">
                                <li><Icon name="Github01Icon" size={22} color="#1f1f1f" /></li>
                                <li><Icon name="InstagramIcon" size={22} color="#1f1f1f" /></li>
                                <li><Icon name="Linkedin01Icon" size={22} color="#1f1f1f" /></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-neutral-edoc-500 font-semibold">Navegação</p>
                            <ul className="space-y-2 text-neutral-edoc-500/80">
                                <li>Perfil</li>
                                <li>Carreira</li>
                                <li>Projetos</li>
                            </ul>
                        </div>

                        

                       
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-2 text-sm text-neutral-edoc-500/80">
                    <span>Feito por Eduardo Octavio</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer