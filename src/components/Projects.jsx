import projects from '../data/projects'
import { getRandomId } from '../js/utils'

const Projects = () => {
    return (
        <div className='flex flex-col items-center gap-14  justify-center section projects' id='projects'>
            <h1 className='text-4xl'>Proyectos</h1>
            <div className='flex flex-col gap-10'>
                {
                    projects.map(project => (
                        <div key={project.id} className='blurBg rounded-xl overflow-hidden max-w-xl '>
                            <img src={`../assets/${project.image}`} alt={`${project.name} capture`} />
                            <div className='flex flex-col p-4 gap-4'>
                                <h1 className='text-xl'>{project.name}</h1>
                                <p>{project.description}</p>
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        project.stack.map(tech => (
                                            <p className='bg-blue-500 text-white p-1 rounded-xl font-bold text-sm' key={getRandomId()}>{tech}</p>
                                        ))
                                    }
                                </div>
                                <div className='flex items-center justify-end gap-2'>
                                    {
                                        project.demo && (
                                            <a href={project.demo}>
                                                <ion-icon size="large" name="eye-outline"></ion-icon>
                                            </a>
                                        )
                                    }
                                    <a href={project.repository}>
                                        <ion-icon size="large" name="logo-github"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <a href="https://github.com/Carlosgmdev" className='text-end'>
                    Ver más proyectos →
                </a>
            </div>
        </div>
    )
}

export default Projects