import React, {useState} from 'react'

const BasicHooks = () => {

    const [isTest, toggleTest] = useState(false);
    const [unkoFun, changeUnko] = useState("加藤純一最強");
    console.log(isTest);

    const ChangeKato = () =>{
        if(isTest){
            changeUnko("やあ");
        }else{
            changeUnko("もえ〜")
        }
    }

    return (
        <div>
            <h2>Hooksについて</h2>
            <h3>{unkoFun}</h3>
            <input type="checkbox" checked = {isTest} onClick = {() => toggleTest(!isTest, ChangeKato()) }/>
            
        </div>
    )

}



export default BasicHooks
