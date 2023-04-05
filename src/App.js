import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import CustomBtn from './components/CustomBtn';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#2e1667",

      },
      secondary: {
        main: "#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        "roboto",
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: "2rem",
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      }
    }
  }
)

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <CustomBtn txt = "Hello"/>
        </ThemeProvider>
    </div>
  );
}

export default App;
