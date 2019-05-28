

function removeDummy() {
 var elem = document.getElementById('Wouldbedeleted');
 elem.parentNode.removeChild(elem);

 
}







function check() {
if (document.getElementById('name').value == "" || document.getElementById('pass').value == "") {
alert("Fill All Fields !");
} else {
	
var re = /\d+/;

if (  
		re.test(document.getElementById("name").value)
) {
	
	document.getElementById("name").value = reverseString(document.getElementById('name').value);
	
		
} 

else {
	
	
	
	var str = document.getElementById("name").value
	var array = str.split("");

for(var i=0, len=array.length; i < len; i++){
	
	if (isEven(i)) {
		array[i] = array[i].toUpperCase();
	} else {
		array[i] = array[i].toLowerCase();
	}
					
}
document.getElementById("name").value = array.join('');
	
	
}


}
}




function div_show() {
document.getElementById('abc').style.display = "block";
}



function div_hide(){
document.getElementById('abc').style.display = "none";
}


function reverseString(str) {

    var splitString = str.split(""); 

    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 

    return joinArray; 
}


function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}


