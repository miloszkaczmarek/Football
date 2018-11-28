import React from "react";
import axios from "axios";
import {db} from './firebase';

class Matches extends React.Component {
   constructor() {
   super();

    this.state = {
        matches: '',
        matches2: '',
        clubs: '',
        comments: [],
        msg: "",
        login:"",
        errors: []
    }

   }

    handleSubmit = (e) => {
        e.preventDefault();

        let correct = true;
        let errors = [];

        if(!this.state.login) {
            correct = false;
            errors.push('Wpisz login')
        }

        if(!correct) {
            this.setState({
                errors: errors
            })
        } else {
            this.setState({
                success: 'Dodano komentarz',
                errors: []
            })
        }

    }

    handleClick = (e) => {

        let correct = true;

        let post = {
            name: this.state.msg,
            login: this.state.login
        }

        if(this.state.login.length > 0){
            this.setState({
                comments: [
                    ...this.state.comments,
                    post
                ]
            })

        }



        db.collection('comments').add(post);
    }

    handleChange =(e) => {
       this.setState({
           msg: e.target.value
       })
    }

    handleChange2 =(e) => {
        this.setState({
            login: e.target.value
        })
    }

   render(){

       let errors = this.state.errors.map((e,i) => {
           return <li key={i}>{e}</li>
       })

       let comments = this.state.comments.map((e) => {
           return <h4>{e.name}<p>{e.login}</p></h4>
       })

       let match = this.state.matches && this.state.matches.map((e,i) => {
            if(this.props.teamName == e.awayTeam.name || this.props.teamName == e.homeTeam.name ){
                return <div>
                <div className="match container">
                    <div className="teamName"><h2>{e.awayTeam.name}</h2></div>
                    <div className="teamName"><h1>{e.score.fullTime.awayTeam} : {e.score.fullTime.homeTeam}<h4 style={{fontSize: "20px"}}>{e.utcDate.slice(0, 10)}</h4></h1></div>
                    <div className="teamName"><h2>{e.homeTeam.name}</h2></div>
                </div>

                    <div className="comments container">
                        <h2>Comments:</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus eligendi error
                            laboriosam nulla numquam odio, reiciendis ullam unde.<p>Login</p></h4>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus eligendi error
                            laboriosam nulla numquam odio, reiciendis ullam unde.<p>Login</p></h4>
                        {comments}
                        <form onSubmit={this.handleSubmit}>
                        <textarea ref={e => this.name = e}
                                  name=""
                                  id=""
                                  rows="10"
                                  placeholder="Your comment"
                                  onChange={this.handleChange}
                                  value={this.state.msg}
                        ></textarea>
                        <input onChange={this.handleChange2} value={this.state.login} type="text" placeholder="Your Name" />
                        <button onClick={this.handleClick}>Dodaj komentarz</button>
                        <ul>
                            {errors}
                        </ul>
                            <h5>{this.state.success}</h5>
                        </form>
                    </div>

                </div>
            }
       })

       let match2 = this.state.matches2 && this.state.matches2.map((e,i) => {
           if(this.props.teamName == e.awayTeam.name || this.props.teamName == e.homeTeam.name ){
               return <div>
                   <div className="match container">
                       <div className="teamName"><h2>{e.awayTeam.name}</h2></div>
                       <div className="teamName"><h1>{e.score.fullTime.awayTeam} : {e.score.fullTime.homeTeam}<h4 style={{fontSize: "20px"}}>{e.utcDate.slice(0, 10)}</h4></h1></div>
                       <div className="teamName"><h2>{e.homeTeam.name}</h2></div>
                   </div>

                   <div className="comments container">
                       <h2>Comments:</h2>
                       <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus eligendi error
                           laboriosam nulla numquam odio, reiciendis ullam unde.<p>Login</p></h4>
                       <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus eligendi error
                           laboriosam nulla numquam odio, reiciendis ullam unde.<p>Login</p></h4>
                       {comments}
                       <form onSubmit={this.handleSubmit}>
                        <textarea ref={e => this.name = e}
                                  name=""
                                  id=""
                                  rows="10"
                                  placeholder="Your comment"
                                  onChange={this.handleChange}
                                  value={this.state.msg}
                        ></textarea>
                           <input onChange={this.handleChange2} value={this.state.login} type="text" placeholder="Your Name" />
                           <button onClick={this.handleClick}>Dodaj komentarz</button>
                           <ul>
                               {errors}
                           </ul>
                           <h5>{this.state.success}</h5>
                       </form>
                   </div>

               </div>
           }
       })



       // let test = this.state.clubs && this.state.clubs.map((e,i) =>{
       //     if(this.props.teamName == e.team.name){
       //         return <img src={e.team.crestUrl} alt=""/>
       //     }
       // })

     return (

        <div>
            {match}
            {match2}
            {/*{test}*/}
        </div>
     )
   }

    componentDidMount(){

        axios.get(`https://api.football-data.org/v2/competitions/2014/matches?status=FINISHED`, {
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


        axios.get(`https://api.football-data.org/v2/competitions/2021/matches?status=FINISHED`, {
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

        db.collection('comments').get().then((snap) => {
            console.log(snap.docs);

            snap.docs.forEach((e) => {
                console.log(e.data());
                this.setState({
                    comments: [
                        ...this.state.comments,
                        e.data()
                    ]
                })

            })

        });
    }

 }

export default Matches;