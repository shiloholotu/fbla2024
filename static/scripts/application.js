// convert information to hex to be parsed in python
function convertToHex(str){

    let ret = "";
    for(let char of str){
        ret += char.charCodeAt(0).toString(16);
    }

    return ret;
}