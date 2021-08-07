import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { deepPurple, orange } from "@material-ui/core/colors";
import Routes from "./routes";
import TopBar from "./components/layout/TopBar";

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    primary: {
      main: deepPurple[400],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopBar />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
