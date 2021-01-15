import React from 'react'

const BasicState2 = (props) => {
    return(
        <div>
            <h2>{props.stateName}</h2>
            <input type="checkbox" checked = {props.isTest} onClick = {() => {props.toggle()}}/>
        </div>
    )
}
export default BasicState2
