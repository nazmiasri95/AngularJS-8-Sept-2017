app
	.controller("HomeController", function($scope, perkataan, $rootScope) {
		console.log("This is Home Controller.");

		// $scope.first_name = "Abu";
		// $scope.second_name = "Bakar";

		// $scope.full_name = $scope.first_name + " " + $scope.second_name;

		// This is a list / array
		$scope.names = ["Bryan", "Firdaus", "Sani", "Fikah", "Alya"];

		// This is an object
		$scope.user_detail = {	
			name: "Bryan",
			address: "No 123, HPC3",
			age: 4
		};

		// Now its a list of object / array of object
		$scope.list_user_details = [
			{	
				name: "Bryan",
				address: "No 123, HPC3",
				age: 4
			},
			{	
				name: "Alya",
				address: "No 935, HPC3",
				age: 41
			},
			{	
				name: "Daus",
				address: "No 124, HPC3",
				age: 42
			}
		];

		console.log(perkataan.panjang("Firdaus !"));
		console.log(perkataan.tambah("Hello", "World"));

		$scope.tambah_perkataan = perkataan.tambah("AAAAA", "BBBBBB");
	})