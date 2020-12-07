import './App.css';
import {ThemeProvider} from 'react-jss';
import MyGrid from './components/grid-layout';

const theme = {
  colorPrimary: 'green'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyGrid/>
    </ThemeProvider>
  );
}

export default App;
