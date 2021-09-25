//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
const name ='Brad'
const App=() => {
  return (
    <div className="App">
      <h1>Hello 1 {name}</h1>
      <br/>
      <Header title='aaaa'/>
    </div>
  );
}

export default App;
