import formations from '../data/formations'

const Formations = () => {
    return (
        <div className='flex flex-col items-center gap-14 h-screen justify-center section formations' id='formations'>
            <h1 className='text-4xl'>Formaciones</h1>
            <div className='flex flex-col gap-4'>
                {
                    formations.map(formation => (
                        <div key={formation.id} className='flex flex-col md:flex-row items-center justify-between p-4 rounded-xl blurBg gap-4 max-w-lg'>
                            <div className='w1/4'>
                                <img src={`../assets/${formation.image}`} alt={`${formation.institution} logo`} className='w-20 h-20' />
                            </div>
                            <div className='flex flex-col gap-1 justify-center w-3/4'>
                                <h2 className='font-bold'>{formation.title}</h2>
                                <h3 className='italic'>{formation.institution}</h3>
                                <p>{`${formation.startYear} - ${formation.endYear}`}</p>
                                {
                                    formation.certificate && (
                                        <a href={formation.certificate} className='flex items-center justify-end gap-1'>
                                            <ion-icon name="document-text-outline"></ion-icon>
                                            Certificado
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Formations