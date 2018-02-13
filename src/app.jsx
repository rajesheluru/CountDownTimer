import React, {Component} from 'react';
import './app.css';
import Clock from './clock.jsx'
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            deadline:"December 25,2018",
            newDeadline:''
        }
    }
    chnageDeadline(){
        this.setState({deadline:this.state.newDeadline})
    }
render(){
    return(
    <div className='app'>
        <div>Countdown to {this.state.deadline} </div>
    
        <Clock deadline={this.state.deadline} />
        <div>
            <input placeholder="new date" onChange={event=>this.setState({newDeadline:event.target.value})}/>
            <button onClick={()=>this.chnageDeadline()}>submit</button>
        </div>
    </div>
    )
}
}
export default App;