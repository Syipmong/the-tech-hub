import './App.css';
import { createTheme, ThemeProvider, makeStyles, Typography} from '@material-ui/core';

import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import ComputerIcon from '@material-ui/icons/Computer'
import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import HttpIcon from '@material-ui/icons/Http'
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
);

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles();
  return (
    <div className="App">
            <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
          Empowering businesses with cutting-edge technology solutions
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Welcome to The Tech Hub, a community of technology enthusiasts, programmers, and networkers! Our page is dedicated to all things tech-related, from the latest programming languages to cutting-edge hardware and software solutions. We provide a platform for professionals to connect, collaborate, and share their knowledge and experiences in the tech industry. Join our community to stay up-to-date on industry news and trends, network with like-minded professionals, and enhance your skills and expertise.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
