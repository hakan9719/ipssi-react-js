import React, { Component } from 'react'

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
                {this.state.date}
            </div>
        )
    }
}

export default Clock