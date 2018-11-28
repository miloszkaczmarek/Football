import React from "react";
import axios from "axios";

class Scheduled extends React.Component {
   constructor() {
   super();

   this.state = {
       matches: '',
       matches2:'',
       matches3:'',
       matches4:'',
       matches5:'',
       scorers:'',
       scorers2:'',
       scorers3:'',
       scorers4:'',
       scorers5:'',
       display: "none",
       display2: "none",
       display3: "none",
       display4: "none",
       display5: "none"
   }

   }


    handleClick = (e) => {
        this.setState({
            display: this.state.display === "none" ? "block" : "none",
            opacity:"1"
        })
    }

    handleClick2 = (e) => {
        this.setState({
            display2: this.state.display2 === "none" ? "block" : "none",
        })
    }

    handleClick3 = (e) => {
        this.setState({
            display3: this.state.display3 === "none" ? "block" : "none",
        })
    }

    handleClick4 = (e) => {
        this.setState({
            display4: this.state.display4 === "none" ? "block" : "none",
        })
    }

    handleClick5 = (e) => {
        this.setState({
            display5: this.state.display5 === "none" ? "block" : "none",
        })
    }


   render(){


       let matchSchedule = this.state.matches && this.state.matches.map((e,i) => {
           if(i < 10) {
               return <div className="scheduled" style={{display: this.state.display}}>
                   <h1>{e.awayTeam.name} - {e.homeTeam.name}</h1>
                   <h2>{e.utcDate.slice(0, 10)}</h2>
                   <hr/>
               </div>
           }
       })

       let matchSchedule2 = this.state.matches2 && this.state.matches2.map((e,i) => {
           if(i < 10) {
               return <div className="scheduled" style={{display: this.state.display2}}>
                   <h1>{e.awayTeam.name} - {e.homeTeam.name}</h1>
                   <h2>{e.utcDate.slice(0, 10)}</h2>
                   <hr/>
               </div>
           }
       })

       let matchSchedule3 = this.state.matches3 && this.state.matches3.map((e,i) => {
           if(i < 10) {
               return <div className="scheduled" style={{display: this.state.display3}}>
                   <h1>{e.awayTeam.name} - {e.homeTeam.name}</h1>
                   <h2>{e.utcDate.slice(0, 10)}</h2>
                   <hr/>
               </div>
           }
       })

       let matchSchedule4 = this.state.matches4 && this.state.matches4.map((e,i) => {
           if(i < 10) {
               return <div className="scheduled" style={{display: this.state.display4}}>
                   <h1>{e.awayTeam.name} - {e.homeTeam.name}</h1>
                   <h2>{e.utcDate.slice(0, 10)}</h2>
                   <hr/>
               </div>
           }
       })

       let matchSchedule5 = this.state.matches5 && this.state.matches5.map((e,i) => {
           if(i < 10) {
               return <div className="scheduled" style={{display: this.state.display5}}>
                   <h1>{e.awayTeam.name} - {e.homeTeam.name}</h1>
                   <h2>{e.utcDate.slice(0, 10)}</h2>
                   <hr/>
               </div>
           }
       })

       let Scorers = this.state.scorers && this.state.scorers.map((e,i) => {
           if(i < 3) {
               return <div style={{display: this.state.display4}} className="scorers">
                   <h2>{e.player.name} - {e.numberOfGoals} goals</h2>
               </div>
           }
       })

       let Scorers2 = this.state.scorers2 && this.state.scorers2.map((e,i) => {
           if(i < 3) {
               return <div style={{display: this.state.display2}} className="scorers">
                   <h2>{e.player.name} - {e.numberOfGoals} goals</h2>
               </div>
           }
       })

       let Scorers3 = this.state.scorers3 && this.state.scorers3.map((e,i) => {
           if(i < 3) {
               return <div style={{display: this.state.display}} className="scorers">
                   <h2>{e.player.name} - {e.numberOfGoals} goals</h2>
               </div>
           }
       })

       let Scorers4 = this.state.scorers4 && this.state.scorers4.map((e,i) => {
           if(i < 3) {
               return <div style={{display: this.state.display3}} className="scorers">
                   <h2>{e.player.name} - {e.numberOfGoals} goals</h2>
               </div>
           }
       })

       let Scorers5 = this.state.scorers5 && this.state.scorers5.map((e,i) => {
           if(i < 3) {
               return <div style={{display: this.state.display5}} className="scorers">
                   <h2>{e.player.name} - {e.numberOfGoals} goals</h2>
               </div>
           }
       })


     return (
         <div className="schedule">
             <a className="myButton" onClick={this.handleClick}>PRIMERA DIVISION</a>
             <h1 style={{display: this.state.display}}>TOP SCORERS PRIMERA DIVISION</h1>
             {Scorers3}
             {matchSchedule}
                 <a className="myButton" onClick={this.handleClick2}>PREMIER LEAGUE</a>
                  <h1 style={{display: this.state.display2}}>TOP SCORERS PREMIER LEAGUE</h1>
                 {Scorers2}
                 {matchSchedule2}
                 <a className="myButton" onClick={this.handleClick3}>BUNDESLIGA</a>
             <h1 style={{display: this.state.display3}}>TOP SCORERS BUNDESLIGA</h1>
                 {Scorers4}
                 {matchSchedule3}
                 <a className="myButton" onClick={this.handleClick4}>SERIE A</a>
                 <h1 style={{display: this.state.display4}}>TOP SCORERS SERIE A</h1>
                 {Scorers}
                 {matchSchedule4}
                 <a className="myButton" onClick={this.handleClick5}>LIGUE 1</a>
             <h1 style={{display: this.state.display5}}>TOP SCORERS LIGUE 1</h1>
                 {Scorers5}
                 {matchSchedule5}
         </div>
     )
   }

    componentDidMount(){

        axios.get(`https://api.football-data.org/v2/competitions/2014/matches?status=SCHEDULED`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.matches)
                this.setState({
                    matches:res.data.matches
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/2021/matches?status=SCHEDULED`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.matches)
                this.setState({
                    matches2:res.data.matches
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/2002/matches?status=SCHEDULED`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.matches)
                this.setState({
                    matches3:res.data.matches
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/2019/matches?status=SCHEDULED`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.matches)
                this.setState({
                    matches4:res.data.matches
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/2015/matches?status=SCHEDULED`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.matches)
                this.setState({
                    matches5:res.data.matches
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/SA/scorers`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.scorers)
                this.setState({
                    scorers: res.data.scorers
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/PL/scorers`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.scorers)
                this.setState({
                    scorers2: res.data.scorers
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/PD/scorers`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.scorers)
                this.setState({
                    scorers3: res.data.scorers
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/BL1/scorers`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.scorers)
                this.setState({
                    scorers4: res.data.scorers
                })
            }).catch((error) => {
            console.log(error);
        })

        axios.get(`https://api.football-data.org/v2/competitions/FL1/scorers`, {
            'headers': {"X-Auth-Token": "df99bd5700c34c88917e8d20f0664761"}
        })
            .then((res) => {
                console.log(res.data.scorers)
                this.setState({
                    scorers5: res.data.scorers
                })
            }).catch((error) => {
            console.log(error);
        })

    }
 }

export default Scheduled