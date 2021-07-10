import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Home } from './Home';

const useStyles = makeStyles({
  root: {}
});

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      }, 
      secondary: {
        main: '#3f51b5'
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#232323' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
