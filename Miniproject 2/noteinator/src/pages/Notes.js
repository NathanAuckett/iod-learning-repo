
import React from 'react';
import {FileSystemContext} from "../context/FileSystemContext"

import Button from 'react-bootstrap/Button';
import { Container, Row} from 'react-bootstrap';

import NoteList from "../components/NoteList"
import NoteListToolBar from '../components/NoteListToolBar';

export default function Notes() {
    const {getJsonOfAllFilesInDir, workingDir, setWorkingDir, setNoteFiles} = React.useContext(FileSystemContext);

    async function setDirectory(){
        const dir = await window.showDirectoryPicker();

        const fileArray = await getJsonOfAllFilesInDir(dir);
        
        console.log(fileArray);

        setWorkingDir(dir);
        setNoteFiles(fileArray);
    }
    
    return (
        <>
            <Row className='justify-content-center text-center' style={{marginBottom: "1rem"}}>
                {workingDir === "" ? <Button onClick={setDirectory} style={{width: "max-content"}}>Set working directory</Button> :
                    <NoteListToolBar/>
                }
            </Row>
            
            <Row className='justify-content-center'>
                <NoteList/>
            </Row>
        </>
    )
}