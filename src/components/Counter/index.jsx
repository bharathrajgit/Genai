import {useState} from 'react'
import './index.css'

const Counter =() => {
  let count = 0;
  // const [count, setCount] = useState(0)
  const onIncrement = () => {
    //setCount(prevState => prevState + 1);
    count = count + 1;
  }

  const onDecrement = () => {
    count = count - 1;
    //setCount(prevState => prevState - 1);
  }

  console.log("I am rendering");

  let countStyle;
  if(count == 0){
    countStyle = 'count-zero';
  }else if(count > 0){
    countStyle = "count-positive";
  }else{
    countStyle = "count-negative";
  }

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <p className={`count ${countStyle}`}>{count}</p>
      <div>
        <button className="button" type="submit" onClick={onIncrement}>
          Increment
        </button>
        <button className="button" type="submit" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
