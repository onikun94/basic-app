import React from 'react'

const BasicLifeCycle2 = (props) => {
    return(
        <div>
            <input type="checkbox" onClick = {() => {props.Good()}}/>
        </div>
    )
}
export default BasicLifeCycle2
