
//Lista klubów z danej ligi + herb
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class LaLigaClubs extends React.Component {
    constructor() {
        super();

        this.state = {
            data: '',
            clubs: '',
            clubs2: '',
            typeName: ''
        }

    }

    handleName =e => {
        this.setState({
            typeName: e.target.value
        })
    }

    checkTeam = (event, e) =>{
        this.setState({
            data: e.team.name
        })
        this.props.getTeamName(e.team.name)
        window.location.href='#/matches'
    }

    render(){

        let clubsNames = this.state.clubs && this.state.typeName == "" && this.state.clubs.map((e,i) => {
            return <div className="oneplayer" data-name = {e.team.name} onClick={event=>this.checkTeam(event,e)}>
                <div><img src={e.team.crestUrl} alt=""/></div>
                <h2>{e.team.name}</h2>
            </div>
        })

        let clubsNames2 = this.state.clubs2 && this.state.typeName == "" && this.state.clubs2.map((e,i) => {
            return <div className="oneplayer" data-name = {e.team.name} onClick={event=>this.checkTeam(event,e)}>
                <img src={e.team.crestUrl} alt=""/>
                <h2>{e.team.name}</h2>
            </div>
        })

        const filteredData = this.state.clubs && !this.state.typeName == "" && this.state.clubs.filter(e=> {
            var re = new RegExp(this.state.typeName, 'i')
            return e.team.name.match(re) != null
        }).map((e,i) => {
            return <div className="oneplayer" data-name = {e.team.name} onClick={event=>this.checkTeam(event,e)}>
                <img src={e.team.crestUrl} alt=""/>
                <h2>{e.team.name}</h2>
            </div>
        })

        const filteredData2 = this.state.clubs2 && !this.state.typeName == "" && this.state.clubs2.filter(e=> {
            var re = new RegExp(this.state.typeName, 'i')
            return e.team.name.match(re) != null
        }).map((e,i) => {
            return <div className="oneplayer" data-name = {e.team.name} onClick={event=>this.checkTeam(event,e)}>
                <img src={e.team.crestUrl} alt=""/>
                <h2>{e.team.name}</h2>
            </div>
        })

        console.log(this.state.data);

        return (
            <div>
                <ul className="menu">
                    <li><Link to={'/'}>zawodnicy</Link></li>
                    <li><Link to={'/clubs'}>kluby</Link></li>
                    <li><Link to={'/scheduled'}>terminarz</Link></li>
                </ul>
                <h1>Lista klubów</h1>
                <input type="text" placeholder="Search" value={this.state.typeName} onChange={this.handleName}/>

                <div className="players">

                    {clubsNames}
                    {clubsNames2}
                    {filteredData}
                    {filteredData2}
                </div>
            </div>
        )

    }

    componentDidMount(){

        axios.get(`https://api.football-data.org/v2/competitions/2014/standings`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.standings[0].table)
                this.setState({
                    clubs: res.data.standings[0].table
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/2021/standings`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    clubs2: res.data.standings[0].table
                })
            }).catch((error) => {
            console.log(error);
        })
    }
}

export default LaLigaClubs;