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
    selections = ["Body - 1 - Green", "Head - 1 - Green", "Eyes - 1", "Mouth - 1", "Nose - 1"]
    images.push(require(`../images/Bodies/${selections[0]}.png`))
    images.push(require(`../images/Heads/${selections[1]}.png`))
    images.push(require(`../images/Eyes/${selections[2]}.png`))
    images.push(require(`../images/Mouths/${selections[3]}.png`))
    images.push(require(`../images/Noses/${selections[4]}.png`))
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
                        return {...state, head: state.head + 1}
                    break;

                    case FEATURES.BODY:
                        return {...state, body: state.body + 1}
                    break;

                    case FEATURES.HAIR:
                        if(state.hair == 3){
                            mergeImages([base, require(`../images/hair/hair1.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, hair: 1}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair + 1}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, hair: state.hair + 1}
                        }

                    break;
                    case FEATURES.BRACELET:
                        return {...state, bracelet: state.bracelet + 1}
                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 3){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes1.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, eyes: 1}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes + 1}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, eyes: state.eyes + 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        return {...state, background: state.background + 1}
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 3){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth1.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, mouth: 1}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth + 1}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, mouth: state.mouth + 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 2){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose1.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, nose: 1}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose + 1}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
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
                        return {...state, head: state.head - 1}
                    break;

                    case FEATURES.BODY:
                        return {...state, body: state.body - 1}
                    break;

                    case FEATURES.HAIR:
                        if(state.hair == 1){
                            mergeImages([base, require(`../images/hair/hair3.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, hair: 3}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair - 1}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, hair: state.hair - 1}
                        }
                    break;

                    case FEATURES.BRACELET:
                        return {...state, bracelet: state.bracelet - 1}
                    break;

                    case FEATURES.EYES:
                        if(state.eyes == 1){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes3.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, eyes: 3}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes - 1}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, eyes: state.eyes - 1}
                        }
                    break;

                    case FEATURES.BACKGROUND:
                        return {...state, background: state.background - 1}
                    break;

                    case FEATURES.MOUTH:
                        if(state.mouth == 1){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth3.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, mouth: 3}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose}.png`), require(`../images/mouth/mouth${state.mouth - 1}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, mouth: state.mouth - 1}
                        }
                    break;

                    case FEATURES.NOSE:
                        if(state.nose == 1){
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose2.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
                              return {...state, nose: 2}
                        }else{
                            mergeImages([base, require(`../images/hair/hair${state.hair}.png`), require(`../images/eyes/eyes${state.eyes}.png`), require(`../images/nose/nose${state.nose - 1}.png`), require(`../images/mouth/mouth${state.mouth}.png`)])
                              .then((src) => {
                                state.src = src;
                              })
                              .catch((err) => console.log(err));
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

  useEffect(() => {

    mergeImages([base])
      .then((src) => dispatch({type: ACTIONS.SETSRC, payload: src}))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="home">
        <Topbar />
        <div className = "wrapper">
            <div className="image-container">
                <img src={emojis.src} alt="emoji preview" />
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Hair</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HAIR})}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/hair/hair${emojis.hair}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HAIR})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.EYES})}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/eyes/eyes${emojis.eyes}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.EYES})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Nose</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.NOSE})}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/nose/nose${emojis.nose}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.NOSE})}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Mouth</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.MOUTH})}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/mouth/mouth${emojis.mouth}.png`)} />
                                <button className="right-button" onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.MOUTH})}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
