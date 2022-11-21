
import Card from 'react-bootstrap/Card';

import { Link} from 'react-router-dom';

import MDEditor from '@uiw/react-md-editor';

import "./NotePreviewCard.css"


function ViewNoteOnClick({ file, children }){
    return (
        <Link to={{
            pathname: "/noteview",
            state: {
                file: file
            }
        }}
        className="decoration-none">
            
            {children}
        
        </Link>
    )
}

export default function NotePreviewCard(props){
    const file = props.file;
    let {name, content} = file;

    return (
        <ViewNoteOnClick file={file}>
            <Card className='m-2 bg-secondary text-white fadeCutOff'>
                <Card.Body>
                    <Card.Title className='mb-4'>{name}</Card.Title>
                    
                    <Card.Text>
                        <MDEditor.Markdown source={content} style={{backgroundColor: "inherit", color: "inherit"}}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </ViewNoteOnClick>
    )
}