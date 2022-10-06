import React from 'react';
import './posts.css'

function Posts() {
    return(
        <div className="myPosts">
            <h1>Recent Posts</h1>
            <div className="postResume">
                <div className="image">
                    <img src="../assets/profile-photo.jpg" alt="profile photo" id="photo" />
                </div>
                <div className="text">
                    <span className='titleText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='timestamp'><p>3 anos atrás</p></span>
                    <p className='resumeText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque aut explicabo asperiores ducimus pariatur voluptates voluptatem numquam dolore neque atque rem, sed rerum obcaecati quas repudiandae placeat distinctio aspernatur?</p>
                    <div className="hashtags">
                        <p>#react</p>
                        <p>#coding</p>
                        <p>#exercise</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;