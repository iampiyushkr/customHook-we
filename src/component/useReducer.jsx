import { useReducer } from "react"

const initState = {
    count: 0
}

const constrain = {
    INCREMENT: "INCREMENT",
    DECREMENT:"DECREMENT"
}

const reducer = (state,action) => {
    switch (action.type) {
        case constrain.INCREMENT: {
            return {
                ...state,
                count: state.count + action.payload
            }
        }
            case constrain.DECREMENT: {
            return {
                ...state,
                count:state.count-action.payload
            }
            
        }
        default: {
            return state;
            }
    }
}

export function Count() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleSub = (amount) => {
        dispatch({type:constrain.DECREMENT,payload:amount})
    }
    const handleAdd = (amount) => {
        dispatch({type:constrain.INCREMENT,payload:amount})
    }
    return <div>
        <h1>Counter</h1>
        <h2>{ state.count}</h2>
        <button onClick={()=>{handleSub(1)}}>Decrease</button>
        
        <button onClick={()=>{handleAdd(1)}}>Increase</button>
    </div>
}