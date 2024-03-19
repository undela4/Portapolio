
/*window.localStorage.length;

for(var i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i));
}
var v=1;
*/

function create(){

    var x=document.getElementById('ul').value;
    var y=document.getElementById('pl').value;
    var z=document.getElementById('lp').value;
    if(z==y){
    localStorage.setItem('user',x);
    localStorage.setItem('pass',y);
    return;

    }
    else{
        alert("Password does not match\nTry again");
    }


}
