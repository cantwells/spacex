import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';

class App extends React.Component {
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: []
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Features/>
          <Footer/>
      </div>
    );
  }
}

export default App;
