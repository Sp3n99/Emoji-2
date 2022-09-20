import React, { useEffect, useReducer, useState } from "react";
import "./home.scss"
import Topbar from "../components/Topbar"
import mergeImages from 'merge-images-v2'

const INITIAL_FACE = {
    head: 1,
    body: 1,
    hair: 1,
    bracelet: 1,
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
    BRACELET: 'bracelet',
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

async function RenderFinal(selections) {
    var images = []
    images.push(require(`../images/Background/Background${selections[0]}.png`))
    images.push(require(`../images/Bodies/Body${selections[0]}.png`))
    images.push(require(`../images/Heads/Head${selections[1]}.png`))
    images.push(require(`../images/Eyes/Eyes${selections[2]}.png`))
    images.push(require(`../images/Hair/Hair${selections[2]}.png`))
    images.push(require(`../images/Mouths/Mouth${selections[3]}.png`))
    images.push(require(`../images/Noses/Nose${selections[4]}.png`))
    images.push(require(`../images/Bracelet/Bracelet${selections[4]}.png`))
    let download = await mergeImages(images)
    console.log(download)
    return download
}
const reducer = (state, action) => {
    switch(action.type){
            // INCREMENTING
            case ACTIONS.INCREMENT:
                switch(action.feature){
                    case FEATURES.HEAD:
                        if(state.head == 8){
                            return {...state, head: 1}
                      }else{
                            return {...state, head: state.head + 1}
                      }
                    break;

                    case FEATURES.BODY:
                        if(state.body == 8){
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
                    case FEATURES.BRACELET:
                        return {...state, bracelet: state.bracelet + 1}
                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 3){
                              return {...state, eyes: 1}
                        }else{
                              return {...state, eyes: state.eyes + 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        return {...state, background: state.background + 1}
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 3){
                              return {...state, mouth: 1}
                        }else{
                              return {...state, mouth: state.mouth + 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 2){
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
                            return {...state, head: 8}
                      }else{
                            return {...state, head: state.head - 1}
                      }
                    break;

                    case FEATURES.BODY:
                        if(state.body == 1){
                            return {...state, body: 8}
                      }else{
                            return {...state, body: state.body - 1}
                      }
                    break;

                    case FEATURES.HAIR:
                        if(state.hair == 1){
                              return {...state, hair: 3}
                        }else{
                              return {...state, hair: state.hair - 1}
                        }
                    break;

                    case FEATURES.BRACELET:
                        return {...state, bracelet: state.bracelet - 1}
                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 1){
                              return {...state, eyes: 3}
                        }else{
                              return {...state, eyes: state.eyes - 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        return {...state, background: state.background - 1}
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 1){
                              return {...state, mouth: 3}
                        }else{
                              return {...state, mouth: state.mouth - 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 1){
                              return {...state, nose: 2}
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

    const [emojis, dispatch] = useReducer(reducer, INITIAL_FACE);

  return (
    <div className="home">
        <Topbar />
        <button onClick={() => {
                    console.log("clicked")
                    RenderFinal([emojis.background, '' + emojis.body + emojis.color, '' + emojis.head + emojis.color, emojis.eyes, emojis.hair, emojis.mouth, emojis.nose, emojis.bracelet]);
                }}></button>
        <div className = "wrapper">
            <div className="image-container">
                <img src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} alt="emoji preview" />
                <img src={require(`../images/Eyes/Eyes${emojis.eyes}.png`)} alt="emoji preview" />
                <img src={require(`../images/Noses/Nose${emojis.nose}.png`)} alt="emoji preview" />
                <img src={require(`../images/Mouths/Mouth${emojis.mouth}.png`)} alt="emoji preview" />
                <img src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} alt="emoji preview" />
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Head</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
                                <img src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Eyes/Eyes${emojis.eyes}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Nose</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.NOSE})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Noses/Nose${emojis.nose}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.NOSE})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Body</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.BODY})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.BODY})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Head</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
                                <img src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Eyes/Eyes${emojis.eyes}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Mouth</span>
                            <div className="feature-wrapper head">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.MOUTH})}>-</button>
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Mouths/Mouth${emojis.mouth}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.MOUTH})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Color</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.COLOR})}>-</button>
                                <img className="base" src={require(`../images/Bodies/Body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/Head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.COLOR})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
