function palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "");
    var newWord = "";
    for (var i = str.length-1; i >= 0; i--){
        newWord += str[i];
    }
    if(newWord.toLowerCase() === str.toLowerCase()){
        console.log("Palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}

palindrome("eye");
palindrome("_eye");
palindrome("e,ye");