import './App.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

import MediaCard from "./components/MediaCard"
import {useState } from 'react';

import NewPost from './components/NewPost'
import {JSON} from './backend.js'

function App() {
  const [posts, setPosts] = useState(JSON);
  const [adding, setAdding] = useState(false);

  function addPost(title, description, img){
    const post = {
      title: title,
      img: img,
      description: description
    };

    console.log(img);

    JSON.push(post);
    setPosts(JSON);
    setAdding(false);
  }

  return (
    <div className="App">
      <h1>Posts!</h1>
      <Grid container justifyContent={"center"} spacing={2} style={{marginBottom: "1rem", marginTop: "1rem"}}>
        {posts.map((e) => {
          return (
            <Grid item>
              <MediaCard title={e.title} description={e.description} img={e.img}/>
            </Grid>
          )
        })}

        <Grid item xs={12}/>

        <Grid item>
          {adding ? 
            <NewPost addPost={addPost}/> :
            <Button variant="contained" onClick = {() => setAdding(true)}>New Post</Button>
          }
        </Grid>

      </Grid>
      
    </div>
  );
}

export default App;
