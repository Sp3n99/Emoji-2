import React, { useEffect, useReducer, useState } from "react";
import "./home.scss"
import Topbar from "../components/Topbar"
import mergeImages from 'merge-images-v2'
import { saveAs } from 'file-saver'


const INITIAL_FACE = {
    head: 1,
    body: 1,
    hair: 1,
    shirt: 1,
    eyes: 1,
    background: 1,
    mouth: 1,
    nose: 1,
    color: 1,
    src: null
}

const FEATURES = {
    HEAD: 'head',
    BODY: 'body',
    HAIR: 'hair',
    SHIRT: 'shirt',
    EYES: 'eyes',
    BACKGROUND: 'background',
    MOUTH: 'mouth',
    NOSE: 'nose',
    COLOR: 'color'
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    SETSRC: 'setSrc'

}



const reducer = (state, action) => {
    switch(action.type){
            // INCREMENTING
            case ACTIONS.INCREMENT:
                switch(action.feature){
                    case FEATURES.HEAD:
                        if(state.head == 2){
                            return {...state, head: 1}
                      }else{
                            return {...state, head: state.head + 1}
                      }
                    break;

                    case FEATURES.BODY:
                        if(state.body == 2){
                            return {...state, body: 1}
                      }else{
                            return {...state, body: state.body + 1}
                      }
                    break;

                    case FEATURES.HAIR:
                        if(state.hair == 3){
                              return {...state, hair: 1}
                        }else{
                              return {...state, hair: state.hair + 1}
                        }

                    break;
                    case FEATURES.SHIRT:
                        if(state.shirt == 5){
                              return {...state, shirt: 1}
                        }else{
                            return {...state, shirt: state.shirt + 1}
                        }

                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 6){
                              return {...state, eyes: 1}
                        }else{
                              return {...state, eyes: state.eyes + 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        if(state.background == 8){
                            return {...state, background: 1}
                      }else{
                            return {...state, background: state.background + 1}
                      }
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 8){
                              return {...state, mouth: 1}
                        }else{
                              return {...state, mouth: state.mouth + 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 5){
                              return {...state, nose: 1}
                        }else{
                              return {...state, nose: state.nose + 1}
                        }
                    break;

                    case FEATURES.COLOR:
                        if(state.color == 8){
                            return {...state, color: 1}
                      }else{
                            return {...state, color: state.color + 1}
                      }
                    break;

                }
            break;

            //DECREMENTING
            case ACTIONS.DECREMENT:
                switch(action.feature){
                    case FEATURES.HEAD:
                        if(state.head == 1){
                            return {...state, head: 2}
                      }else{
                            return {...state, head: state.head - 1}
                      }
                    break;

                    case FEATURES.BODY:
                        if(state.body == 1){
                            return {...state, body: 2}
                      }else{
                            return {...state, body: state.body - 1}
                      }
                    break;

                    case FEATURES.HAIR:
                        if(state.hair == 1){
                              return {...state, hair: 8}
                        }else{
                              return {...state, hair: state.hair - 1}
                        }
                    break;

                    case FEATURES.SHIRT:
                        if(state.shirt == 1){
                            return {...state, shirt: 5}
                      }else{
                            return {...state, shirt: state.shirt - 1}
                      }
                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 1){
                              return {...state, eyes: 6}
                        }else{
                              return {...state, eyes: state.eyes - 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        if(state.background == 1){
                            return {...state, background: 8}
                      }else{
                            return {...state, background: state.background - 1}
                      }
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 1){
                              return {...state, mouth: 8}
                        }else{
                              return {...state, mouth: state.mouth - 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 1){
                              return {...state, nose: 5}
                        }else{
                              return {...state, nose: state.nose - 1}
                        }
                    break;

                    case FEATURES.COLOR:
                        if(state.color == 1){
                            return {...state, color: 8}
                      }else{
                            return {...state, color: state.color - 1}
                      }
                    break;
                }
            break;

            case ACTIONS.SETSRC:
                return{...state, src: action.payload}
            break;

            default:
    }
}

export default function Home() {
    const [src, setSrc] = useState(null);
    const [finalSRC, setFinalSRC] = useState("");
    const [emojis, dispatch] = useReducer(reducer, INITIAL_FACE);
    const [name, setName] = useState("character");

    const downloadFunc = async () => {
        let downloadPromise = new Promise(async (resolve, reject) => {
            var images = []
            images.push(require(`../images/Background/Background${emojis.background}.png`))
            images.push(require(`../images/Bodies/Body${"" +emojis.body + emojis.color}.png`))
            images.push(require(`../images/Heads/Head${"" + emojis.head + emojis.color}.png`))
            images.push(require(`../images/Eyes/Eyes${emojis.eyes}.png`))
            images.push(require(`../images/Mouths/Mouth${emojis.mouth}.png`))
            images.push(require(`../images/Noses/Nose${emojis.nose}.png`))
            images.push(require(`../images/Shirts/Shirt${"" + emojis.body + emojis.shirt}.png`))
            let download = await mergeImages(images)
            resolve(download)
        });

        downloadPromise.then((res) => {
            saveAs(res, name + "'s emoji");
        });
    }

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div className="home">
        <div className = "wrapper">
            <div className="image-container" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}}>
                <div className="menu">
                    <div className="options">
                        <form>
                            <input placeholder="Enter your name" onChange={(e) => handleName(e)}></input>
                        </form>
                        <button className="download" onClick = {async() =>{downloadFunc()}}>Download</button>
                    </div>
                </div>
                <div className="main">

                    <img src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} alt="emoji preview" />
                    <img src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} alt="emoji preview" />
                    <img src={require(`../images/Eyes/Eyes${emojis.eyes}.png`)} alt="emoji preview" />
                    <img src={require(`../images/Noses/Nose${emojis.nose}.png`)} alt="emoji preview" />
                    <img src={require(`../images/Mouths/Mouth${emojis.mouth}.png`)} alt="emoji preview" />
                    <img src={require(`../images/Shirts/Shirt${emojis.body}${emojis.shirt}.png`)} alt="emoji preview" />
                </div>
           </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Head</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD}) }>-</button>
                                <img src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})  }>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Eyes/Eyes${emojis.eyes}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Nose</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.NOSE})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Noses/Nose${emojis.nose}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.NOSE})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Mouth</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.MOUTH})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Mouths/Mouth${emojis.mouth}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.MOUTH})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Shirt</span>
                            <div className="feature-wrapper">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.SHIRT})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} />
                                <img src={require(`../images/Shirts/Shirt${emojis.body}${emojis.shirt}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.SHIRT})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Body</span>
                            <div className="feature-wrapper">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.BODY})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.BODY})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Color</span>
                            <div className="feature-wrapper">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.COLOR})}>-</button>
                                <img className="base" src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.COLOR})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Background</span>
                            <div className="feature-wrapper background">
                                <button className="left-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.BACKGROUND})}>-</button>
                                <img className="base" src={require(`../images/Background/Background${emojis.background}.png`)} />
                                <button className="right-button" style={{backgroundImage: `url(${require(`../images/Background/Background${emojis.background}.png`)})`}} onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.BACKGROUND})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
