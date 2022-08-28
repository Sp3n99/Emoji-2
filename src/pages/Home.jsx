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
    images.push(require(`../images/Bodies/${selections[0]}.png`))
    images.push(require(`../images/Heads/${selections[1]}.png`))
    images.push(require(`../images/Eyes/${selections[2]}.png`))
    images.push(require(`../images/Mouths/${selections[3]}.png`))
    images.push(require(`../images/Noses/${selections[4]}.png`))
    let download = await mergeImages(images)
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
                              return {...state, mouth: state.nose + 1}
                        }
                    break;

                    case FEATURES.COLOR:
                        return {...state, color: state.color + 1}
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
                        return {...state, color: state.color - 1}
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
        <div className = "wrapper">
            <div className="image-container">
                <img src={require(`../images/Heads/head${emojis.head}.png`)} alt="emoji preview" />
                <img src={require(`../images/Eyes/eyes${emojis.eyes}.png`)} alt="emoji preview" />
                <img src={require(`../images/Noses/nose${emojis.nose}.png`)} alt="emoji preview" />
                <img src={require(`../images/Mouths/mouth${emojis.mouth}.png`)} alt="emoji preview" />
                <img src={require(`../images/Bodies/body${emojis.body}.png`)} alt="emoji preview" />
                
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Head</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}$emojis.color.png`)} />
                                <img src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Eyes/eyes${emojis.eyes}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Nose</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.NOSE})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Noses/nose${emojis.nose}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.NOSE})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Body</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.BODY})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.BODY})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Head</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Eyes/eyes${emojis.eyes}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Mouth</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.MOUTH})}>-</button>
                                <img className="base" src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <img className="base" src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Mouths/mouth${emojis.mouth}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.MOUTH})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Body</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.BODY})}>-</button>
                                <img className="base" src={require(`../images/Heads/head${emojis.head}${emojis.color}.png`)} />
                                <img src={require(`../images/Bodies/body${emojis.body}${emojis.color}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.BODY})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
