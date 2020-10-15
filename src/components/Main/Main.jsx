import React from 'react';
import './Main.css';

const videos = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    other: 'space'
}

const Main = ({rocket}) => {
    return(
        <section className="main">
            <h1 className="title">{rocket}</h1>
            <div className="video-container">
                <video className="video" 
                        autoPlay 
                        loop 
                        muted 
                        src={`./video/${videos.hasOwnProperty(rocket) ? videos[rocket] :
                        videos.other }.mp4`}>
                </video>
            </div>
        </section>
    )
}

export default Main;