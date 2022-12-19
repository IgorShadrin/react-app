
import { useState  } from "react";
import LifeComponent from "./Life";

const TestArrow = (props) => {
  
  console.log('TestArrow');


  const [count, setCount] = useState(0); 


  return (
    <div>Privet {props.firstName} {props.lastName} count {count} 
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <LifeComponent setCount={setCount } count={count}/>
    </div>
  );
}

TestArrow.defaultProps = {
  firstName: 'xxxxx',
  lastName: 'yyyyy',
}

export default TestArrow; 
