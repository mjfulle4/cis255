var app5 = angular.module('app5', []);

app5.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Leonard",
    lName: "Nemoy",
    phone: "(123)456-7890",
    email: "spock@enterprise.com",
    city: "Shi'Kahr",
	state: "Vulcan",
	zip: "12345"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, phone: userInfo.phone, email: userInfo.email, city: userInfo.city, state: userInfo.state, zip: userInfo.zip
      });;
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }
  $scope.getLocation = function (userInfo){
	zipcodes = [{"zip": "48710", "city": "University Center", "state": "MI"},
	 {"zip": "48706", "city": "Bay City", "state": "MI"}, 
	 {"zip": "48609", "city": "Saginaw", "state": "MI"},
	 {"zip": "48502", "city": "Flint", "state": "MI"},
	 {"zip": "49503", "city": "Grand Rapids", "state": "MI"}]
	 
	num = userInfo.zip;
	console.log(num);
	city = document.getElementsByName("city");
	state = document.getElementsByName("state");
	console.log(city.num);
	console.log(state.num);	
	if(num == "48710") {
		userInfo.city = zipcodes[0].city;
		userInfo.state = zipcodes[0].state;		
	} else if(num == "48706"){
		userInfo.city = zipcodes[1].city;
		userInfo.state = zipcodes[1].state;
	} else if(num == "48609") {
		userInfo.city = zipcodes[2].city;
		userInfo.state = zipcodes[2].state;
	}else if(num == "48502"){
		userInfo.city = zipcodes[3].city;
		userInfo.state = zipcodes[3].state;
	}else if(num == "49503"){
		userInfo.city = zipcodes[4].city;
		userInfo.state = zipcodes[4].state;
	}
	else {
		userInfo.city = "Invalid Zipcode";
		userInfo.state = "Invalid Zipcode";
	}
 }

});