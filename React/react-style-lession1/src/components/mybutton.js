import React from 'react';
import './button.css';
function MyButton (){
    return (
        <div>
            <div>
                <button className="mybutton">My button</button>
                <button className={"mybutton mybutton1"}>My button1</button>
                <button className={"mybutton mybutton2"}>My button2</button>
                <button className={"mybutton mybutton3"}>My button3</button>
                <button className={"mybutton mybutton4"}>My button4</button>
                <button className={"mybutton mybutton5"}>My button5</button>    
            </div>           
            <div>
                <button class="hoverbutton hoverbutton1">Green</button>
                <button class="hoverbutton hoverbutton2">Blue</button>
                <button class="hoverbutton hoverbutton3">Red</button>
                <button class="hoverbutton hoverbutton4">Gray</button>
                <button class="hoverbutton hoverbutton5">Black</button>
            </div>     
            <div class="btn-group">
                <button class="button">Button</button>
                <button class="button">Button</button>
                <button class="button">Button</button>
                <button class="button">Button</button>
            </div>   
        </div>
    )
}
export default MyButton;