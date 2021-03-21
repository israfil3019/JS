var sentence = prompt("yazınız....")
function reverse(sentence) {
    var newStr = "";
    for(var i = sentence.length-1; i >= 0; --i){
        newStr += sentence[i];
    }
    return newStr;
}
alert(`the reverse of your sentence is "${reverse(sentence)}"`);
