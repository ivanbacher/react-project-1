import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        };
    }

    changeDeadline() {
        //always use setState - never mutate directly
        this.setState({
            deadline: this.state.newDeadline
        })
    }

    
    
    render() {
        return (
            <div className="App container">
                
                <div className="row pt-5 mt-5">
                    <div className="col-10 offset-1 text-center">
                        
                        <div className="App-title">
                            Countdown to {this.state.deadline}
                        </div>
                        
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-10 offset-1 text-center">
                        
                        <Clock deadline={this.state.deadline}/>
                        
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-8 offset-2 text-center">
                        
                        <input className="form-control form-control-lg mb-4" type="text" placeholder="insert date" onChange={ event => this.setState({newDeadline: event.target.value})} />

                        <button className="btn btn-secondary btn-lg pl-5 pr-5" onClick={ () => this.changeDeadline() }>
                            Submit
                        </button>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default App;