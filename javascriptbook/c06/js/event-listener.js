//my original idea was to use ASCII values for the char-checks, but I was curious, so I checked how other classmates did this assignment
//idea & code for checks char arrays "borrowed" from Wyatt Towne

function checkUsername() {
  var checks = [['A', 'C'], ['D', 'H'], ['I', 'M'], ['N', 'P'], ['Q', 'Z']];

  var userNum = this.id.substr(this.id.length - 1);
  var userId = document.getElementById('feedback' + userNum);
  var makeBig = this.value[0].toUpperCase();
  var muhsh33nTalk = makeBig.charCodeAt(0);
  
  if (muhsh33nTalk >= checks[Number(userNum) - 1][0].charCodeAt(0) && 
		muhsh33nTalk <= checks[Number(userNum) - 1][1].charCodeAt(0)) 
	{           
		userId.textContent = 'Hooray! You followed directions!';
	}
	
  else {
    userId.textContent = 'Try again... this username cannot begin with a ' + makeBig;;          
	}
}

var user1 = document.getElementById('username1');
var user2 = document.getElementById('username2');
var user3 = document.getElementById('username3');
var user4 = document.getElementById('username4');
var user5 = document.getElementById('username5');

user1.addEventListener('blur', checkUsername, false);
user2.addEventListener('blur', checkUsername, false);
user3.addEventListener('blur', checkUsername, false);
user4.addEventListener('blur', checkUsername, false);
user5.addEventListener('blur', checkUsername, false);