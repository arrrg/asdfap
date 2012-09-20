'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function FBItem($scope) {
    FB.api('/220439', function(response) {
  		alert('Your name is ' + response.name);
  		$scope.item = response;
	});
  });


 
  //$scope.orderProp = 'age';
}

}