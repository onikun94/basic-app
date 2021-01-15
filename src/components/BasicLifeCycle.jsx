import React, { Component } from 'react'
import BasicLifeCycle2 from './BasicLifeCycle2';
import BasicLifeCycle3 from './BasicLifeCycle3';

export class BasicLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            testcount:0,
            count:0
        }
    }

    componentDidMount(){
        document.getElementById('counter').addEventListener('click', this.countUp)
    }

    componentDidUpdate(){
        if(this.state.count > 10){
            this.setState({
                count:0
            })
        }
    }

    componentWillUnmount(){
        document.getElementById('counter').removeEventListener('click', this.countUp)
    }
    

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    toggleGood = () =>　{
        this.setState({
            testcount: this.state.testcount + 1
        }
        )
    }


    render() {

        return (
            <div>
                <h2>LifeCycleについて</h2>
                <h3>LifeCycleを用いずにprops経由でカウント</h3>
                <h3>{this.state.testcount}</h3>
                <BasicLifeCycle2  Good = {() => this.toggleGood()} />
                <h3>LifeCycleを用いてカウント</h3>
                <BasicLifeCycle3  count = {this.state.count}/>
            </div>
        )
    }


}

export default BasicLifeCycle
