function convertToUpperCase() { 
const input = document.getElementById("textInput").value;
const upperCaseText = input.toUpperCase();
console.log(upperCaseText);
return upperCaseText; 


}

document.getElementById("convertBtn").addEventListener("click", convertToUpperCase);