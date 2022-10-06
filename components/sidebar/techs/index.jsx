import React from 'react'
import './techs.css'


function Techs(){
    const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Typescript']
    return (
        <div className="list">
            <h1>Tecnologias</h1>
            <div className="techList">
                {
                    techs.map(tech => <p>{tech}</p>)
                }
            </div>
        </div>
    )
}

export default Techs