import React,{Component} from 'react'
import './app.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds: 0
        }
console.log(this.props)

    }
    render(){
        return(
        <div>
            <div className='.clock-days'>{this.state.days}days</div>
            <div className="clock-hours">{this.state.hours} hours</div>
            <div className='clock-minutes'>{this.state.minutes} minutes</div>
            <div className='clock-seconds'>{this.state.seconds} seconds</div>
        </div>
        )
    }
}
export default Clock;
