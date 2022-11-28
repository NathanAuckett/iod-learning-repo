import React from 'react';
import {FileSystemContext} from "../context/FileSystemContext"

import NotePreviewCard from "./NotePreviewCard/NotePreviewCard";

import {Row} from 'react-bootstrap';

export default function NoteList(){
    const {noteFiles} = React.useContext(FileSystemContext);

    return (
        <div>
            {noteFiles.length === 0 ? null : noteFiles.map((file, index) => {
                return (
                    <Row className='justify-content-center' key={index}>
                        <NotePreviewCard file={file}/>
                    </Row>
                )
            })}
        </div>
    )
}