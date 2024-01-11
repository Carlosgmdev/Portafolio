import React from 'react'
import skills from '../data/skills'

const Skills = () => {

    return (
        <div className='flex flex-col items-center gap-14 h-screen justify-center section skills' id='skills'>
            <h1 className='text-4xl'>Habilidades</h1>
            <div className='flex gap-10 flex-wrap justify-center'>
                {
                    skills.map(skill => (
                        <div key={skill.id} className='bg-white flex items-center justify-center p-2 rounded-xl blurBg'>
                            <img src={`../assets/${skill.image}`} alt={`${skill.name} logo`} className='w-16' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills