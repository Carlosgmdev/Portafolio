const MobileMenu = ({setMobileMenu}) => {
    return (
        <div className="fixed inset-0 flex items-center blurBgHeader justify-center ">
            <nav className="flex flex-col items-center gap-20" onClick={() => setMobileMenu(false)}>
                <a className="text-2xl " href="#about">Acerca de mí</a>
                <a className="text-2xl " href="#formations">Formaciones</a>
                <a className="text-2xl " href="#skills">Habilidades</a>
                <a className="text-2xl " href="#projects">Proyectos</a>
            </nav>
        </div>
    )
}

export default MobileMenu