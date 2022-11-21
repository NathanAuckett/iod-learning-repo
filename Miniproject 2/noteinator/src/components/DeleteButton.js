import React from "react";
import { useHistory} from "react-router-dom";

import {Button} from "react-bootstrap";
import {confirm} from 'react-bootstrap-confirmation';

import {FileSystemContext} from "../context/FileSystemContext"
import {getJsonOfAllFilesInDir, remove} from "../fileSystemFunctions"

import deleteIcon from "../icons/delete.svg"

export default function DeleteButton(props){
    const {workingDir, setNoteFiles} = React.useContext(FileSystemContext);
    const history = useHistory();

    const file = props.file;

    async function handleClick(){
        const confirmation = await confirm("Delete this note permanently? This cannot be undone!");

        if (confirmation){
            await remove(workingDir, file.fileName);

            const fileArray = await getJsonOfAllFilesInDir(workingDir);
            setNoteFiles(fileArray);
            history.push("/");
        }
    }
    
    return <Button variant="danger" onClick={handleClick} style={{width: "max-content"}}><img src={deleteIcon} alt="Delete" className="icon"/></Button>
}