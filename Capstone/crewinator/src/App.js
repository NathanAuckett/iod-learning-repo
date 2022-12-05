import './App.css';

import { Route, Routes} from 'react-router-dom';

import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import {LoginSignup} from "./pages/LoginSignup";
import {Dashboard} from "./pages/Dashboard";
import {EventsView} from "./pages/EventsView";
import {GameLibrary} from "./pages/GameLibrary";
import {FriendList} from "./pages/FriendList";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      <Grid container direction="column" wrap="nowrap">
        <Grid display="flex" justifyContent="center">
          <h1>Crewinator</h1>
        </Grid>
        
        <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="" element={<EventsView/>}/>
            <Route path="games" element={<GameLibrary/>}/>
            <Route path="friends" element={<FriendList/>}/>
          </Route>
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;