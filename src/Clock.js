import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
    }

    componentWillMount() {
        this.getTimeUntil( this.props.deadline );
    }

    componentDidMount() {
        setInterval( () => {
            this.getTimeUntil( this.props.deadline );
        }, 1000)
    }

    leading0( num ) {
        if( num < 10) {
            return '0' + num;
        } 

        return num;
    }

    getTimeUntil( deadline ) {
        const time = Date.parse(deadline) - Date.parse( new Date() );

        const seconds = Math.floor( (time/1000) % 60 );
        const minutes = Math.floor( (time/1000/60) % 60 );
        const hours = Math.floor( (time/(1000 * 60 * 60)) % 24 );
        const days = Math.floor( time/(1000 * 60 * 60 *24));

        this.setState({
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds
        })
    }

    render() {

       

        return (
            <div className="pt-4 pb-4">
                <div className="Clock-days"> {this.leading0( this.state.day )} days </div>
                <div className="Clock-hours"> {this.leading0( this.state.hour )} hours </div>
                <div className="Clock-minutes"> {this.leading0( this.state.minute )} minutes </div>
                <div className="Clock-seconds"> {this.leading0( this.state.second )} seconds </div>
            </div>
        );
    }
}

export default Clock;