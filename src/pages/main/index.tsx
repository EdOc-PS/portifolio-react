import Home from "@/components/layout/Home"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Profile from "@/components/layout/Profile"
import Projects from "@/components/layout/Projects"
import Technology from "@/components/layout/Technology"



const Main: React.FC = () => {
  return (
    <>
      <Header />

      <Home />
      <Profile />
      <Technology />
      <Projects />
      
      <Footer />
    </>

  )
}

export default Main