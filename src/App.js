import Conversor from './components/Conversor'
import './App.css';

function App() {
  return (
    <div className="App">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
