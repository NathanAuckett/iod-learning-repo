
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import newIcon from "../icons/new.svg"

export default function NoteListToolBar(){
    return (
        <Link to="/noteview" style={{width: "max-content"}}><Button variant="light"><img src={newIcon} alt="New Note" className='icon'/></Button></Link>
    )
}