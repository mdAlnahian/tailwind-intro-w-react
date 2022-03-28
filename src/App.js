import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl mt-12 capitalize bg-green-500 py-3'>welcome to our website</h1>
      <Pricing></Pricing>

    </div>
  );
}

export default App;
