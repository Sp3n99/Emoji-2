import React from 'react'
import { useReducer } from 'react';


const INITIAL_FACE = {
    head: 1,
    body: 1,
    hair: 1,
    bracelet: 1,
    eyes: 1,
    background: 1,
    mouth: 1,
    nose: 1,
    color: 1
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
    DECREMENT: 'decrement'
}


const reducer = (state, action) => {
    switch(action.type){
            // INCREMENTING 
            case ACTIONS.INCREMENT:
                switch(action.feature){
                    case FEATURES.HEAD:
                        return { head: state.head + 1}
                    break;
                    case FEATURES.BODY:
                        return { body: state.body + 1}
                    break;
                    case FEATURES.HAIR:
                        return { hair: state.hair + 1}
                    break;
                    case FEATURES.BRACELET:
                        return { bracelet: state.bracelet + 1}
                    break;
                    case FEATURES.EYES:
                        return { eyes: state.eyes + 1}
                    break;
                    case FEATURES.BACKGROUND:
                        return { background: state.background + 1}
                    break;
                    case FEATURES.MOUTH:
                        return { mouth: state.mouth + 1}
                    break;
                    case FEATURES.NOSE:
                        return { nose: state.nose + 1}
                    break;
                    case FEATURES.COLOR:
                        return { color: state.color + 1}
                    break;

                }
            break;

            //DECREMENTING
            case 'decrement': 
                switch(action.feature){
                    case FEATURES.HEAD:
                        return { head: state.head - 1}
                    break;
                    case FEATURES.BODY:
                        return { body: state.body - 1}
                    break;
                    case FEATURES.HAIR:
                        return { hair: state.hair - 1}
                    break;
                    case FEATURES.BRACELET:
                        return { bracelet: state.bracelet - 1}
                    break;
                    case FEATURES.EYES:
                        return { eyes: state.eyes - 1}
                    break;
                    case FEATURES.BACKGROUND:
                        return { background: state.background - 1}
                    break;
                    case FEATURES.MOUTH:
                        return { mouth: state.mouth - 1}
                    break;
                    case FEATURES.NOSE:
                        return { nose: state.nose - 1}
                    break;
                    case FEATURES.COLOR:
                        return { color: state.color - 1}
                    break;

            break;

            default: 
        }
    }
}

const StateTest = () => {

    const [emojis, dispatch] = useReducer(reducer, INITIAL_FACE);

  return (
    <div>
        <div>
            <span>HEAD</span>
            <button onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
            {emojis.head}
            <button onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
        </div>
        <div>
            <span>HEAD</span>
            <button onClick={() => dispatch({type: ACTIONS.DECREMENT, feature: FEATURES.HEAD})}>-</button>
            {emojis.head}
            <button onClick={() => dispatch({type: ACTIONS.INCREMENT, feature: FEATURES.HEAD})}>+</button>
        </div>



    </div>
  )
}

export default StateTest