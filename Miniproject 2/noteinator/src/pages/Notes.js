
import React from 'react';
import {FileSystemContext} from "../context/FileSystemContext";

import Button from 'react-bootstrap/Button';
import {Row} from 'react-bootstrap';

import NoteList from "../components/NoteList";
import NoteListToolBar from '../components/NoteListToolBar';

import {getJsonOfAllFilesInDir} from "../fileSystemFunctions";

export default function Notes() {
    const {workingDir, setWorkingDir, setNoteFiles} = React.useContext(FileSystemContext);

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
                {workingDir === "" ? <Button variant="light" onClick={setDirectory} style={{width: "max-content"}}>Set working directory</Button> :
                    <NoteListToolBar/>
                }
            </Row>
            
            <Row>
                <NoteList/>
            </Row>
        </>
    )
}