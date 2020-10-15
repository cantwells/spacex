import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';
import FetchData from './FetchData';

class App extends React.Component {
  fetchData = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: []
  }

  getRockets = () => {
    this.fetchData.getRockets()
    .then(data => {
      this.setState( { rockets: data.map( rocket => rocket.name)}) ;
    })
  }

  updateRocket = () => {
    this.fetchData.getRockets()
    .then( data => data.find( item => item.name === this.state.rocket ))
    .then( rocketFeatures => {
      this.setState( {rocketFeatures} )
    })
  }

  componentDidMount(){
    this.updateRocket();
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Main rocket={this.state.rocket}/>
          <Features/>
          <Footer/>
      </div>
    );
  }
}

export default App;
