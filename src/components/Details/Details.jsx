import React,{useState, useEffect}  from 'react';
import './Details.css';
import FetchData from '../../FetchData';
import {useHistory} from 'react-router-dom';
import Youtube from 'react-youtube';

const fetchData = new FetchData();

const Details = props => {
    const history = useHistory();
    const launchID = props.match.params.id;
    const [launch, setLaunch] = useState(null);
    
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
                        <img src={launch.links.patch.small} alt={launch.name} />
                    </div>
                    <div className="details-content">
                        <p className="details-description">{launch.details}</p>
                    </div>
                </div>
                <div>
                    <Youtube className="details-youtube" opts={ {height: '315', width: '560'} } videoId={launch.links.youtube_id}/>
                </div>
            </div>
                <div onClick={ history.goBack } className="button button-back">go back</div>
	    </section>
    )
}

export default Details;