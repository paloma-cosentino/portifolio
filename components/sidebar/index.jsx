import React from 'react'
import Avatar from '../../components/sidebar/avatar'
import Bio from '../../components/sidebar/bio'
import Techs from '../../components/sidebar/techs'
import './styles.css'

function Sidebar() {
    return (
        <div className="sidebar">
           <Avatar />
           <Bio />
           <Techs />
        </div>
    )
}

export default Sidebar 