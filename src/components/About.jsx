import Contact from "./Contact";

const About = () => {
    return (
        <div id="about" className="flex flex-col h-screen items-center justify-center gap-8 section about">
            <div className="flex flex-col gap-8 md:flex-row items-center">
                <img
                    src="../assets/profile.png"
                    alt="Profile Picture"
                    className="h-40 w-40 bg-transparent"
                />
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold">Carlos Martínez</h1>
                        <h2 className="text-xl">Web Developer</h2>
                    </div>
                    <Contact />
                </div>
            </div>
            <p className="text-lg text-center max-w-2xl">
                ¡Hola! ✋ Soy amante de la programación y autodidacta. Me gusta aprender nuevas tecnologías y mejorar mis habilidades día a día. Actualmente soy estudiante de Ingeniería en sistemas computacionales y he completado un par de formaciones extraordinarias de desarrollo web.
            </p>
        </div>
    );
};

export default About;
