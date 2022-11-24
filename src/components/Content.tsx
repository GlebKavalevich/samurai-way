import React from "react";
import './components-css/Content.css'
import post from "../Post/post";
import Post from "../Post/post";

const Content = () => {
    return (  <div className='content'>
            <div>
                <img src='https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png'/>
            </div>
            <div>
                <img src='https://cdn.theatlantic.com/thumbor/AoAiL8qVFcRcRtFoDLBej4tjDHk=/0x0:4800x2700/1600x900/media/img/mt/2022/09/Cat_purr_1/original.jpg'/>
            </div>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default Content