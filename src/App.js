import RightSide from "./components/rightSide";
import LeftSide from "./components/leftSide";
import React,{useState} from 'react'
// import dataStores from './stores.json';
// import _ from 'lodash'



function App() {
  const [currentStore, setCurrentStore] = useState(0);
  return (
    <>
      <LeftSide setCurrentStore={setCurrentStore}/>
      <RightSide currentStore={currentStore}/>
    </>
  );
}

export default App;
