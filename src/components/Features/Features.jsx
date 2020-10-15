import React from 'react';
import './Features.css';
import ReactRelluxWrapper from 'react-rellax-wrapper';

const rockets = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship'
}

const Features = ({rocketFeatures}) => {
    console.log(rocketFeatures);
    return(
        <section className="features">
            <h2 className="features-title">{rocketFeatures.name} <br />Overview</h2>
            <div className="overview">
                <table className="table">
                    <caption className="table-title">Size</caption>
                    <thead>
                        <tr>
                            <td className="table-column">HEIGHT</td>
                            <td className="table-column">{rocketFeatures.height.meters} m / {rocketFeatures.height.feet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">DIAMETER</td>
                            <td className="table-column">{rocketFeatures.diameter.meters} m / {rocketFeatures.diameter.feet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">MASS</td>
                            <td className="table-column">{rocketFeatures.mass.kg} kg / {rocketFeatures.mass.lb} lb</td>
                        </tr>
                        <tr>
                            <td className="table-column">PAYLOAD TO LEO</td>
                            <td className="table-column">{rocketFeatures.payload_weights[0].kg} kg / {rocketFeatures.payload_weights[0].lb} lb</td>
                        </tr>
                    </thead>
                </table>
                <ReactRelluxWrapper speed={14}>
                    <img
                        src={`./imgs/${rockets.hasOwnProperty(rocketFeatures.name) && rockets[rocketFeatures.name]}.png`}
                        alt="rocket"
                        className="rocket"
                        data-rellax-speed="14"
                    />
                </ReactRelluxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">{rocketFeatures.description}</p>
                </article>
            </div>
        </section>
    );
} 

export default Features;