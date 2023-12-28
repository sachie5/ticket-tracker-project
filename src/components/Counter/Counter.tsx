import { useState } from "react";
import "../Counter/Counter.scss";

type CounterProps = {
    heading: string;
}

const Counter = ({ heading }: CounterProps) => {

    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1 );
        if (count === 0){
            setCount(count)
        }
    }

    return(
        <div className="counter">
            <h2 className="counter__heading">{heading}</h2>
            <p className="counter__number">{count}</p>
            <button className="counter__button counter__button--minus" onClick={handleDecrement}>-</button>
            <button className="counter__button counter__button--plus" onClick={handleIncrement}>+</button>
        </div>
    )

}

export default Counter;