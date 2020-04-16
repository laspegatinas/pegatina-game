import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SpotifyRoundOne from './Components/Spotify/SpotifyRoundOne/SpotifyRoundOne';
import Home from './Components/Home/Home';
import InstagramRoundTwo from './Components/Instagram/InstagramRoundTwo/InstagramRoundTwo';
import InstagramRoundOne from './Components/Instagram/InstagramRoundOne/InstagramRoundOne';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import Team from './Components/Team/Team';
import Navbar from './Components/Navbar/Navbar';
import YoutubeRoundOne from './Components/Youtube/YoutubeRoundOne/YoutubeRoundOne';
import YoutubeRoundTwo from './Components/Youtube/YoutubeRoundTwo/YoutubeRoundTwo';
import ListenedSongs from './Components/Spotify/ListenedSongs/ListenedSongs';
import MembersAccounts from './Components/Instagram/InstagramRoundTwo/MembersAccounts';
import './App.css';


class App extends React.Component {

  state = {
      selectedLanguage: 'spanish',
  }

setLanguage = (lang) => {
    this.setState({
        selectedLanguage: lang,
    });
}

render() {

    const { selectedLanguage } = this.state;

    return (
        <div>
            <Navbar onChangeLanguage={this.setLanguage} />

            <Switch>
                <Route exact path="/" render={(props) => <Home language={selectedLanguage} {...props} />} />
                <Route path="/spotifyroundone" render={(props) => <SpotifyRoundOne language={selectedLanguage} {...props} />} />
                <Route path="/listenedsongs" render={(props) => <ListenedSongs language={selectedLanguage} {...props} />} />
                <Route path="/team" render={(props) => <Team language={selectedLanguage} {...props} />} />
                <Route path="/instagramroundone" render={(props) => <InstagramRoundOne language={selectedLanguage} {...props} />} />
                <Route path="/instagramroundtwo" render={(props) => <InstagramRoundTwo language={selectedLanguage} {...props} />} />
                <Route path="/youtuberoundone" render={(props) => <YoutubeRoundOne language={selectedLanguage} {...props} />} />
                <Route path="/youtuberoundtwo" render={(props) => <YoutubeRoundTwo language={selectedLanguage} {...props} />} />
                <Route path="/members" render={(props) => <MembersAccounts language={selectedLanguage} {...props} />} />
            </Switch>

            <div className="social-media-follow-buttons">
                <SocialMedia language={selectedLanguage} />
            </div>
        </div>
    );
}
}

export default App;
