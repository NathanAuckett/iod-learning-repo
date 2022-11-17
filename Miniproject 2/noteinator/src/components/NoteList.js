import React from 'react';
import {FileSystemContext} from "../context/FileSystemContext"

import NotePreviewCard from "./NotePreviewCard";

import {Row} from 'react-bootstrap';

export default function NoteList(){
    const {noteFiles} = React.useContext(FileSystemContext);

    return (
        <div>
            {noteFiles.length === 0 ? null : noteFiles.map((file) => {
                return (
                    <Row className='justify-content-center'>
                        <NotePreviewCard file={file}/>
                    </Row>
                )
            })}
        </div>
    )
}