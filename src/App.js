import {useState, useEffect} from 'react';
import Load from './components/Loader/Load';
import Main from './components/Main/Main';
import './App.css';


function App() {

  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      //Have a try and catch block
        const URL = 'https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json';
        const response = await fetch(URL);
        const text = await response.text(); //response.json() throws an error
        setData(text);
        setLoad(true);
    }
    fetchData()
  }, [])

  if(data){
    console.log(data.length);
    console.log(data[0]);
  }

  return (

    <div className="App">
      {load ? <Main data={data} /> : <Load />}
    </div>
    
  );
}

export default App;
