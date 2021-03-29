import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
      <SignIn/>
    </div>
    </ThemeProvider>
  );
}

export default App;
