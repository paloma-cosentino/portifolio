import React from 'react'
import Posts from './posts/posts'
import Project from './projects/projects'
import './style.css'

function Main(){
    return (
        <div className="container">
            <Project/>
            <Posts />
        </div>
    )
}

export default Main