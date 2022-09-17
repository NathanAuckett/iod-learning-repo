
function inputButtonPress(element){
    document.getElementById("input").value += element.innerHTML;
}

function clearInput(){
    console.log("yeet");
    document.getElementById("input").value = "";
}