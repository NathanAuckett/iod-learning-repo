import "./NoteView.css"

import React, { useState } from 'react';
import { useLocation} from "react-router-dom";

import { Row , Button, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import {getJsonOfAllFilesInDir, save, saveAs} from "../../fileSystemFunctions"
import {FileSystemContext} from "../../context/FileSystemContext"
import DeleteButton from "../../components/DeleteButton"

import backIcon from "../../icons/back.svg"
import saveIcon from "../../icons/save.svg"
import editIcon from "../../icons/edit.svg"

import MDEditor from '@uiw/react-md-editor';

export default function NoteView(){
    const {workingDir, noteFiles, setNoteFiles} = React.useContext(FileSystemContext);

    const location = useLocation();
    
    const file = location.state?.file || null;
    const name = file?.name || "";
    const passedContent = file?.content || "";
    
    const [editing, setEditing] = useState(file === null);
    const [title, setTitle] = useState(name);
    const [content, setContent] = useState(passedContent);


    function toggleEdit(){
        setEditing(!editing);
    }

    async function handleSave(){
        let json = {
            title: title,
            content: content
        }
        
        json = JSON.stringify(json);
        
        if (file){
            await save(file.fileHandle, json);
            console.log("Saved");
        }
        else{
            // Find a free name in the array of files
            let count = 0;
            for (let note of noteFiles){
                if (note.fileName === `note${count}.json`){
                    count ++;
                }
                else{
                    break;
                }
            }

            await saveAs(workingDir, `note${count}.json`, json);
            console.log("Saved as!");
        }

        const fileArray = await getJsonOfAllFilesInDir(workingDir);
        setNoteFiles(fileArray);
        setEditing(false);
    }


    return (
        <Row className="justify-content-center align-content-start h-100">
            <Row className='mb-4 mt-4'>
                <Col className='align-middle'>
                    <Link to="/"><Button variant="light"><img src={backIcon} alt="Back" className='icon'/></Button></Link>
                </Col>
                
                <Col className='text-end'>
                    {editing ? 
                        <>
                            {file? <DeleteButton file={file}/> : null}
                            <Button variant="light"onClick={handleSave}><img src={saveIcon} alt="Save" className='icon'/></Button>
                        </>
                        :
                        <Button variant="light"onClick={toggleEdit}><img src={editIcon} alt="Edit" className='icon'/></Button>
                    }
                    
                </Col>
            </Row>
            
            <Row className='mb-1'>
                <Col>
                    {editing ? 
                        <input type="text" className='title text-light' onChange={(e) => {setTitle(e.target.value)}} value={title} placeholder={"Note Title"}/>
                        :
                        <h2 className='text-light'>{title}</h2>
                    }
                </Col>
            </Row>

            <Row className='text-white' style={{minHeight: "calc(100vh - 200px)"}}>
                <Col>
                    {editing ? 
                        <MDEditor value={content} onChange={setContent} autoFocus height={"100%"} visibleDragbar={false}/>
                        :
                        /* using a transparent darker shade as the background color just differentiates the text area from the rest of the screen */
                        <MDEditor.Markdown source={content} style={{backgroundColor: 'rgba(0,0,0,0.4)', padding: '1em', color: "inherit"}}/>
                    }
                </Col>
            </Row>
        </Row>
    )
}