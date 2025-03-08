import { createContext, useContext, useState } from 'react';
import { Parent } from './components/Context';
import Main from './components/Main';

//Prop Drilling

const GreatGrandchild = ({ count }) => {
  return <h2>Счетчик: {count}</h2>
}

const Grandchid = ({ count }) => <GreatGrandchild count={count} />

const Child = ({count}) => <Grandchid count={count} />


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Child count={count} /> */}
      {/* <Parent /> */}
      <Main />
    </div>
  );
}

export default App;
