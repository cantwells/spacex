import React,{useState, useEffect}  from 'react';
import './Details.css';
import FetchData from '../../FetchData';

const fetchData = new FetchData();

const Details = () => {
    
    const launchID = window.location.hash.slice(1);
    const [launch, setLaunch] = useState([]);
    
    useEffect(() => {
        fetchData.getLaunches()
                .then( data =>  setLaunch(data.find( item => item.id === launchID )))
    }, [launchID])
    if(!launch) return null;
    return (
        <section className="details">
            <div className="container">
                <h1 className="title">{launch.name}</h1>
                <div className="details-row">
                    <div className="details-image">
                        <img src={launch.links ? launch.links.patch.small : ''} alt={launch.name} />
                    </div>
                    <div className="details-content">
                        <p className="details-description">{launch.details}</p>
                    </div>
                </div>
                <div>
                    <iframe className="details-youtube" width="560" height="315" src={launch.links ? `https://www.youtube.com/embed/${launch.links.youtube_id}` : ''} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div onClick={() => {window.history.back()}} className="button button-back">go back</div>
	    </section>
    )
}

export default Details;