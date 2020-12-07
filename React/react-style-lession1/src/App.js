import './App.css';
import style from './App.module.css';
import Inline from './components/inline';
import StyleSheet from './components/style-sheet';

function App() {
  return (
    <div className="App">
      <StyleSheet primary={true}/>
      <Inline/>
      <h1 className="error">Error</h1>
      <h1 className={style.sucess}>Sucess</h1>
    </div>
  );
}

export default App;
