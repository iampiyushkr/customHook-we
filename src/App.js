//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './component/useFetch';
import { Count } from './component/useReducer';
import {useTimeout} from "./component/useTimeout"
import { UseTimeout2 } from './component/useTimeout2';

function App() {
  const [start, setStart] = useState(10)
  //const[start1,setStart1]=useState(0)
  const [page, setPage] = useState(1)

 
    const timmer = UseTimeout2(1000, start)
    
 
    
  
  
  
  const isready = useTimeout(2000)
  console.log(isready)
  const { isLoading, data, isError } = useFetch(`https://json-server-mocker-masai.herokuapp.com/users?_page=${page}&_limit=3`)
  if (isLoading) {
    return<div>Loading...</div>
  }
  if (isError) {
    return<h1>Something  Went wrong</h1>
  }
  return (
    <div className="App">
      <h1>List of user</h1>
      <ul>
        {data.map(e =>
          <li key={e.id}>{ e.name}</li>
          )}
      </ul>
      <button disabled={page===1} onClick={() => { setPage(page - 1) }}>Prev</button>
      <button>{page}</button>
      <button onClick={() => { setPage(page + 1) }}>Next</button>
      <Count/>
      
     <div>
      <h1>Timmer</h1>
        <input type="number" onChange={(e) => { setStart(e.target.value) }} />
        <h1>{ timmer}</h1>
          {/* <button onClick={()=>{handleTimmer()}}>Start</button>   */}
      </div>

      <h1>{ isready}</h1>
    </div>
  );
}

export default App;
