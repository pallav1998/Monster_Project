import { useSelector, useDispatch } from "react-redux"

import { counterActions } from "../store/index";

export function Counter (){
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter)

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    };

    const incrementHandler = () => {
        dispatch(counterActions.increament())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())

    }

    return (
        <div>
            <h2>Counter using Redux</h2>
            {show && <div><h3>{counter}</h3></div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle</button>
        </div>
    )
}