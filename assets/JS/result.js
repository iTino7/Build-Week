//js result
document.getElementById("correctAnswerSpan").innerHTML = "3/10";

document.getElementById("wrongAnswerSpan").innerHTML = "7/10";

const votiPositivi =
const votiNegativi = votiTotali - votiPositivi;

const votiTotali = localStorage.getItem("media");
console.log(votiTotali);

/*
if(voto > 60){
document.getElementById("percBorder").innerHTML = "promosso";
"congratulation! you passed the exam we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)";
}else{
document.getElementById("percBorder").innerHTML = "bocciato";
"Unfortunately, you didn't pass the exam. we'll sent you the certificate in few minutes. Check your email (including promotions/spam folder)";
}
*/
