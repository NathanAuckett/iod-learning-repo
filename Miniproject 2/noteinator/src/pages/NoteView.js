import React, { useState } from 'react';
import { useLocation, useHistory} from "react-router-dom";

import { Row , Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import {FileSystemContext} from "../context/FileSystemContext"

export default function NoteView(){
    const {workingDir, save, saveAs, noteFiles, setNoteFiles, getJsonOfAllFilesInDir} = React.useContext(FileSystemContext);
    
    const location = useLocation();
    const history = useHistory();
    
    const file = location.state?.file || null;

    const name = file?.name || "Note title";
    const passedContent = file?.content || "";
    
    const [title, setTitle] = useState(name);
    const [content, setContent] = useState(passedContent);


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
                if (note.fileName == `note${count}.json`){
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
        
        console.log(fileArray);

        setNoteFiles(fileArray);
        history.push("/");
    }


    return (
        <>
            <Row>
                <Link style={{width: "max-content"}} to="/"><Button>Back</Button></Link>
                <Button style={{width: "max-content"}} onClick={handleSave}>Save</Button>
            </Row>
            
            <Row>
                <input type="text" style={{width: "100%"}} onChange={(e) => {setTitle(e.target.value)}} value={title}/>
            </Row>

            <Row>
                <textarea style={{width: "100%", height: "500px"}} onChange={(e) => {setContent(e.target.value)}} value={content}/>
            </Row>
        </>
    )
}