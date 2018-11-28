import React from "react";
import axios from "axios";

class PlayerInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            playersInfo: '',
            playersInfo2: '',
            name : ''
        }

    }

    render(){
        console.log("Player name", this.props.playerName)

        let playersInfo = this.state.playersInfo && this.state.playersInfo.map((e,i) => {
            const fileName = 'img/' + e.id + "big.png"
            if(this.props.playerName == e.name){
                return <div className="container playerinfo">
                    <div>
                        <img src={fileName} alt=""/>
                        <div className="info">
                            <h1>Name: </h1>
                            <h3>{e.name}</h3>
                        </div>
                        <div className="info">
                            <h1>Date of Birth: </h1>
                            <h3>{e.dateOfBirth.slice(0, 10)}</h3>
                        </div>
                        <div className="info">
                            <h1>Country of Birth: </h1>
                            <h3>{e.countryOfBirth}</h3>
                        </div>
                        <div className="info">
                            <h1>Nationality: </h1>
                            <h3>{e.nationality}</h3>
                        </div>
                        <div className="info">
                            <h1>Position: </h1>
                            <h3>{e.position}</h3>
                        </div>
                    </div>
                </div>
            }
        })

        let playersInfo2 = this.state.playersInfo2 && this.state.playersInfo2.map((e,i) => {
            const fileName = 'img/' + e.id + "big.png"
            if(this.props.playerName == e.name){
                return <div className="container playerinfo">
                    <div>
                        <img src={fileName} alt=""/>
                        <div className="info">
                            <h1>Name: </h1>
                            <h3>{e.name}</h3>
                        </div>
                        <div className="info">
                            <h1>Date of Birth: </h1>
                            <h3>{e.dateOfBirth.slice(0, 10)}</h3>
                        </div>
                        <div className="info">
                            <h1>Country of Birth: </h1>
                            <h3>{e.countryOfBirth}</h3>
                        </div>
                        <div className="info">
                            <h1>Nationality: </h1>
                            <h3>{e.nationality}</h3>
                        </div>
                        <div className="info">
                            <h1>Position: </h1>
                            <h3>{e.position}</h3>
                        </div>
                    </div>
                </div>
            }
        })

        return (
            <div>
                {playersInfo}
                {playersInfo2}
            </div>
        )
    }

    componentDidMount(){

        axios.get(`https://api.football-data.org/v2/teams/86`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.squad)
                this.setState({
                    playersInfo: res.data.squad
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/teams/78`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.squad)
                this.setState({
                    playersInfo2: res.data.squad
                })
            }).catch((error) => {
            console.log(error);
        })
    }
}

export default PlayerInfo;