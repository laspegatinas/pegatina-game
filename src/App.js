import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Game from './Components/Game/Game';
import Home from './Components/Home/Home';
import Instagram from './Components/Instagram/Instagram'
import SocialMedia from './Components/SocialMedia/SocialMedia';
import Team from './Components/Team/Team';
import Navbar from './Components/Navbar/Navbar';

import './App.css';
import ListenedSongs from './Components/ListenedSongs/ListenedSongs';


class App extends React.Component {

  state = {
    selectedLanguage: 'spanish',
  }

  setLanguage = (lang) => {
    this.setState ({
      selectedLanguage: lang
    })

    localStorage.setItem('selectedLanguage', lang);

  }

  render() {

    const { selectedLanguage } = this.state;

    var language = localStorage.getItem('selectedLanguage');

    return (

      <div>
        <Navbar onChangeLanguage={this.setLanguage} />

        <Switch>
          <Route exact path='/' render={props => <Home language={language} {...props} />} />
          <Route path='/game' render={props => <Game language={language} {...props} />} />   
          <Route path='/team' render={props => <Team language={language} {...props} />} />
          <Route path='/instagram' render={props => <Instagram language={language} {...props} />} />
          <Route parth='/listenedsongs' render={props => <ListenedSongs language={language} {...props} />} />
        </Switch> 
        
        <div className="social-media-follow-buttons">
          <SocialMedia language={selectedLanguage}/>
        </div>
      </div>
    );
  }
}

export default App;
