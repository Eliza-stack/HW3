import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "../redux/ColorSlice"


const Main = () => {

    const color = useSelector(state => state.colorReducer.color)
    const dispatch = useDispatch()


    return (
        <div>
            <h1 style={{color: color}}>Hello Geeks!</h1>
            <button onClick={() => dispatch(changeColor())}>change color</button>
        </div>
    )
}


export default Main;
