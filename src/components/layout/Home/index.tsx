import Button from '@/components/ui/Button'

import { Icon } from '@/components/ui/Icon'
import { Link } from 'react-router'


const Home = () => {
    return (
        <section className="mt-20 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col gap-10">
                <div className="mt-30">
                    <h1 className="font-['IBM Plex Mono'] text-8xl font-light text-center">
                        Hello Amigo
                        <br />
                        <i className="text-indigo-300"> There </i>
                        Lorem ad
                    </h1>

                    <p className="text-center font-medium mt-4" >
                        Lorem bla bla gteste asda Sas. asdasd asd.
                        <br />
                        We care about your experience, not your data.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Button icon='ArrowDownRight01Icon' >Curriculo</Button>
                    <Button variant="liquidGlass">
                        <Link target="_blank" to="https://github.com/EdOc-PS?tab=repositories">Ver Repositorios 🦎</Link>
                    </Button>
                </div>

                <ul className="flex gap-4 items-center">
                    <li><div className="icon-wrapper">
                        <Link target="_blank" to="https://github.com/EdOc-PS">
                            <Icon name="GithubIcon" size={20} color="text-gray-500" />
                        </Link>
                    </div></li>

                    <li><div className="icon-wrapper">
                        <Link target="_blank" to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=euardooctavio@gmail.com">
                            <Icon name="Mail02Icon" size={20} color="text-gray-500" />
                        </Link>
                    </div></li>

                    <li><div className="icon-wrapper">
                        <Link target="_blank" to="https://www.linkedin.com/in/eduardo-octavio/">
                            <Icon name="Linkedin01Icon" size={20} color="text-gray-500" />
                        </Link>
                    </div></li>
                </ul>


                <img
                    className="rounded-2xl w-full h-204.25 object-cover object-center"
                    src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" />

            </div>

        </section >
    )
}

export default Home