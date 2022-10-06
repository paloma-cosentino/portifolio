import React from 'react'
import './avatar.css';

function Avatar(){
    return (
        <div className="avatar">
            <img src="../assets/profile-photo.jpg" alt="profile photo" id="photo" />
            <h1>Paloma Cosentino</h1>
            <p>Front-end developer</p>
        </div>
    )
};

export default Avatar