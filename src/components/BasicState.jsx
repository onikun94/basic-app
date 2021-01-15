import React, { Component } from 'react'
 import BasicState2 from './BasicState2'

export class BasicState extends Component {
    constructor(props){
        super(props);
        this.state = {
            isTest:false,
            unkoFun: "加藤純一最強"
        }
    }

    toggleTest = () =>{
        this.setState({
            isTest : !this.state.isTest,
            unkoFun : "もえ〜"
        })

        console.log(this.state.isTest); 
        
        this.Changeunko()
    }

    Changeunko = () =>{
        if(this.state.isTest){
            this.setState({
                unkoFun: "やあ"
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Stateについて</h2>
                <h3>{this.state.unkoFun}</h3>
                <BasicState2 stateName ={"stateの基本"} toggle ={() => this.toggleTest()}/>
            </div>
        )
    }


}

export default BasicState
