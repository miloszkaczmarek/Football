import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Players extends React.Component {
    constructor() {
        super();

        this.state = {
            post: '',
            post2: '',
            typeName: '',
            data: ''
        }

    }

    handleName = e => {
        this.setState({
            typeName: e.target.value
        })
    }

    checkPlayer = (event, e) =>{
        this.setState({
            data: e.name
        })
        this.props.getPlayerName(e.name)
        window.location.href='#/oneplayer'
    }


    render(){

        let playersName = this.state.post && this.state.typeName == "" && this.state.post.map((e,i) => {
            const fileName = 'img/' + e.id + ".png"


            return <div className="oneplayer" data-name = {e.name} onClick={event=>this.checkPlayer(event,e)}>
                <img src={fileName} alt=""/>
                <h2>{e.name}</h2>
            </div>
        })

        // let playersName2 = this.state.post2 && this.state.typeName == "" && this.state.post2.map((e,i) => {
        //     const fileName = e.id + ".png"
        //
        //
        //     return <div className="oneplayer" data-name = {e.name} onClick={event=>this.checkPlayer(event,e)}>
        //         <img src={fileName} alt=""/>
        //         <h2>{e.name}</h2>
        //     </div>
        // })


        const filteredData = this.state.post && !this.state.typeName == "" && this.state.post.filter(e=> {
            let reg = `^${this.state.typeName.toLocaleLowerCase()}`;
            let re = new RegExp(reg, 'g')
            return e.name.toLocaleLowerCase().match(re) != null
        }).map((e,i) => {
            const fileName = 'img/' + e.id + ".png"
            return <div className="oneplayer" data-name = {e.name} onClick={event=>this.checkPlayer(event,e)} >
                <img src={fileName} alt=""/>
                <h2>{e.name}</h2>
            </div>
        })

        // const filteredData2 = this.state.post2 && !this.state.typeName == "" && this.state.post2.filter(e=> {
        //     let reg = `^${this.state.typeName.toLocaleLowerCase()}`;
        //     var re = new RegExp(reg, 'g')
        //     return e.name.toLocaleLowerCase().match(re) != null
        // }).map((e,i) => {
        //     const fileName = e.id + ".png"
        //     return <div className="oneplayer" data-name = {e.name} onClick={event=>this.checkPlayer(event,e)} >
        //         <img src={fileName} alt=""/>
        //         <h2>{e.name}</h2>
        //     </div>
        // })



        if(!this.state.post) {
            return <p style={{color: "white"}}>Loading ...</p>
        }

        console.log(this.state.typeName)
        console.log(this.state.data);

        return (
            <div>
                <ul className="menu">
                    <li><Link to={'/'}>zawodnicy</Link></li>
                    <li><Link to={'/clubs'}>kluby</Link></li>
                    <li><Link to={'/scheduled'}>terminarz</Link></li>
                </ul>

                <h1>Lista zawodników</h1>
                <input type="text" placeholder="Search" value={this.state.typeName} onChange={this.handleName}/>
                <div className="players">
                    {playersName}
                    {/*{playersName2}*/}
                    {filteredData}
                    {/*{filteredData2}*/}
                </div>
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
                    post: res.data.squad
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
                    post2: res.data.squad
                })
            }).catch((error) => {
            console.log(error);
        })


    }
}

export default Players;