import React, { useState } from "react";

export const FileSystemContext = React.createContext("");

export const FileSystemContextProvider = ({ children }) => {
  const [workingDir, setWorkingDir] = useState("");
  const [noteFiles, setNoteFiles] = useState([]);

  return (
    <FileSystemContext.Provider value={{workingDir, setWorkingDir, noteFiles, setNoteFiles}}>
      {children}
    </FileSystemContext.Provider>
  );
}