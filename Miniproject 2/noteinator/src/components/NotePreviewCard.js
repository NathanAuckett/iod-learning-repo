
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export default function NotePreviewCard(props){
    const previewMaxLength = 500;

    const file = props.file;
    let {name, content} = file;
    
    if (content.length > previewMaxLength){
        content = content.substring(0, previewMaxLength - 3) + "...";
    }

    return (
        <Card style={{width: "75%"}}>
            <Card.Header>
                <Link to={{
                    pathname: "/noteview",
                    state: {
                        file: file
                    }
                }}><Button>Edit</Button></Link>
            </Card.Header>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    )
}