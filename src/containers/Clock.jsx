import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Clock extends Component {
    state = {
        date : new Date().toLocaleTimeString("fr-FR")
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({date: new Date().toLocaleTimeString("fr-FR")})
        }, 1000);
    }

    componentDidUpdate(){
        this.interval = setInterval(() => {
            this.setState({date: new Date().toLocaleTimeString("fr-FR")})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render () {
        return (
            <div>
                <Link style={{color:'red'}} to="/">Home</Link>
                {this.state.date}
            </div>
        )
    }
}

export default Clock