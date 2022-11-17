
//Pass in directory handle produced by window.showDirectoryPicker
async function getJsonOfAllFilesInDir(dirHandle){
    const files = [];

    for await (const entry of dirHandle.values()) {
        if (entry.kind === "file"){
            const file = await entry.getFile();
            if (file.type === "application/json"){
                let json = await file.text();
                json = JSON.parse(json);

                const obj = {
                    fileHandle: entry,
                    fileName: file.name,
                    name: json.title,
                    content: json.content
                };

                files.push(obj);
            }
        }
    }

    console.log(files);

    return files;
}

async function save(fileHandle, jsonString){
    const stream = await fileHandle.createWritable();
    await stream.write(jsonString);
    await stream.close();
}

async function saveAs(dirHandle, fileName, jsonString){
    const fileHandle = await dirHandle.getFileHandle(fileName, {create: true});
    await save(fileHandle, jsonString);
}

export {
    getJsonOfAllFilesInDir,
    save,
    saveAs
}