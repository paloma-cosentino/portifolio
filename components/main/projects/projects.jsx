import React from 'react'
import Card from './card'
import './projects.css'

function Project(){
    return(
    <div className="projectContainer">
        <div className="projectTitle">
        <h1>My Projects</h1>
        <a href="http://google.com">Veja todos</a>
        </div>
        <div className="cards">
        <Card/>
        <Card/>
        </div>

    </div>
)}

export default Project