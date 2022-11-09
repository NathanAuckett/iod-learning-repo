
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';


function SampleImage(props){
    return (
        <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt="image"
        />
    )
}


export default function MediaCard(props) {
    const [img, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Card sx={{ width: 345, padding: "1rem"}}>
            {img ? <SampleImage img={img}/> : null}

            <TextField label="Image URL" onChange={(e) => {setImage(e.target.value)}} />
            
            <CardContent>
                <TextField label="Title" onChange={(e) => {setTitle(e.target.value)}} />
                <TextField label="Description" onChange={(e) => {setDescription(e.target.value)}} />
            </CardContent>

            <Button variant="contained" onClick={() => {props.addPost(title, description, img)}}>Add Post</Button>
        </Card>
    );
}