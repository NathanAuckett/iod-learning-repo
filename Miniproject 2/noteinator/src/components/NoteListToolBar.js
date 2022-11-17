
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NoteListToolBar(){
    return (
        <Link to="/noteview"><Button style={{width: "max-content"}}>New Note</Button></Link>
    )
}