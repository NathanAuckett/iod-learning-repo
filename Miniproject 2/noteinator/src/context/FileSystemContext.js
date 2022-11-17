import React, { useState } from "react";

import {getJsonOfAllFilesInDir, save, saveAs} from "../fileSystemFunctions"


export const FileSystemContext = React.createContext("");

export const FileSystemContextProvider = ({ children }) => {
  const [workingDir, setWorkingDir] = useState("");
  const [noteFiles, setNoteFiles] = useState([]);

  return (
    <FileSystemContext.Provider value={{getJsonOfAllFilesInDir, save, saveAs, workingDir, setWorkingDir, noteFiles, setNoteFiles}}>
      {children}
    </FileSystemContext.Provider>
  );
}