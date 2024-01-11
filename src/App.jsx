import { useEffect, useState } from "react"
import Layout from "./layout/Layout"
import Header from "./components/Header"
import About from "./components/About"
import Main from "./components/Main"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Formations from "./components/Formations"
import MobileMenu from "./components/MobileMenu"
import Footer from "./components/Footer"


const App = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [theme])

  return (
    <>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <Layout>
        <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} theme={theme} setTheme={setTheme}/>
        <Main>
          <About />
          <Formations />
          <Skills />
          <Projects />
        </Main>
        <Footer/>
      </Layout>
    </>
  )
}
export default App
