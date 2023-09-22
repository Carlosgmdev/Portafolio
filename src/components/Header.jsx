import Contact from "./Contact"
import Nav from "./Nav"

const Header = ({ mobileMenu, setMobileMenu, theme, setTheme }) => {

  const handleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <header className="sticky top-2 w-full p-4 gap-14 blurBgHeader flex items-center rounded-xl justify-between ">
      <a href="#about" className="text-lg hidden md:block">{'<CarlosgDev/>'}</a>
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
        {
          mobileMenu ? (
            <ion-icon size="large" name="close-outline"></ion-icon>
            
          )
          : (
            <ion-icon size="large" name="menu-outline"></ion-icon>
          )
        }
      </button>
      
      <Nav />
      <div className="flex gap-4">
        <Contact />
        <button className="flex" onClick={handleTheme}>
          {
            theme === 'light' ? (
              <ion-icon size="large" name="moon-outline"></ion-icon>
            )
            : (
              <ion-icon size="large" name="sunny-outline"></ion-icon>
            )
          }
          
        </button>
      </div>
    </header>
  )
}

export default Header