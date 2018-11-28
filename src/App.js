import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Players from './Players'
import LaLigaClubs from './LaLigaClubs'
import PlayerInfo from './PlayerInfo'
import Matches from './Matches'
import Error from './Error'
import Scheduled from './Scheduled'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            teamName: ""
        }
    }
    getPlayerName =(name)=> {
        this.setState({
            playerName: name
        })
    }

    getTeamName =(team)=> {
        this.setState({
            teamName: team
        })
    }

    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={ e => <Players getPlayerName={this.getPlayerName}/>} />
                    <Route exact path='/clubs' component={e => <LaLigaClubs getTeamName={this.getTeamName} />} />
                    <Route path='/matches' component={e => <Matches teamName={this.state.teamName}/>} />
                    <Route path='/oneplayer' component={ e => <PlayerInfo playerName={this.state.playerName}/> } />
                    <Route path='/scheduled' component={Scheduled} />
                    <Route component={Error} />

                </Switch>
            </div>
        </HashRouter>;
    }
}
export default App