import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import { Home } from './Home';

const useStyles = makeStyles({
  root: {}
});

function App() {
  const classes = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      }, 
      secondary: {
        main: '#3f51b5'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
