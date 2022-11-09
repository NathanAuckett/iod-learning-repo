import './App.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

import MediaCard from "./components/MediaCard"

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>

      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item>
          <MediaCard/>
        </Grid>
        <Grid item>
          <MediaCard/>
        </Grid>
        <Grid item>
          <MediaCard/>
        </Grid>
        <Grid item>
          <MediaCard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
