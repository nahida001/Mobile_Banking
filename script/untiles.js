function getInputvalueById(id){
    const value = document.getElementById(id).value;
    const convertvalue = parseFloat(value);
    return convertvalue;
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertvalue = parseFloat(value);
    return convertvalue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id,status){
    document.getElementById(id).style.display=status;
}