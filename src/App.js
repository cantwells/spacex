import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import FetchData from './FetchData';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';

class App extends React.Component {
  fetchData = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null
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

  updateCompany = () => {
    this.fetchData.getCompany()
      .then( company =>  this.setState({company}))
    
  }

  changeRocket = rocket => {
    this.setState({rocket}, this.updateRocket)
  }

  componentDidMount(){
    this.getRockets();
    this.updateRocket();
    this.updateCompany();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
            <Route exact path='/'>
              {this.state.company && <Home company={this.state.company}/>}
            </Route>
            <Route path='/rocket'>
              {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />} 
            </Route>
            <Route path='/calendar'>
              <Calendar/>
            </Route>
            <Route path='/details'>
              <Details/>
            </Route>
            {this.state.company && <Footer {...this.state.company.links}/>}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
