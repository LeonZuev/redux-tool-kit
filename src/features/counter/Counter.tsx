import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store";
import { minus, plus } from "./actionCreators";

export default function Counter(): JSX.Element {
const dispatch = useDispatch();
const value = useSelector((globalState: RootState) => globalState.counter.value)

const save = () => {
    
}

    return (
        <div>
            <button 
            type="button" 
            onClick={() => dispatch(minus(1))}>
                -1
            </button>{' '}
            {value}{' '}
            <button
            type="button" 
            onClick={() => dispatch(plus(1))}>
                +1
            </button>
        </div>
    )
}