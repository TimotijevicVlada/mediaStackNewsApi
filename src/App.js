import {useState, useEffect} from 'react';
import './styles/App.css';
import News from './components/News';

function App() {

  const API_KEY = '2a5eb2140068f4c3c6e869bcb7961cc9';

  const [dataApi, setDataApi] = useState([]);
  const [language, setLanguage] = useState('en');


  const fetchData = async () => {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&sources=sports&languages=${language}`);
    const data = await response.json();
    console.log(data);
    setDataApi(data.data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Hello media stack</h1>
      </div>
      <News dataApi={dataApi}/>
    </div>
  );
}

export default App;
