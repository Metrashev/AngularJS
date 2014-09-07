'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController($scope) {
		
		var artist = {

		id: 1,
		name: "Linkin Park",
		image: "/img/1.jpg",
		created: "01/10/1998",
			additionalInformation: {
				location:"USA",
				bandMembers:["Chester Benington","Mike Shinoda","Felix","Joseph Han","Rob Burton"],
				albums: 12,
				singles: 25
			},

				albums:[{
					
					id: 1,
					name:"Hybrid Theory",
					image:"/img/hybrid-theory.jpg",
					year: 1999,
					songs: 12,
					rating: 0,
					price: 12,
					status: 1 
					},
						
					{
					id: 2, 
					name: "Meteora",
					image: "/img/meteora.jpg",
					year: 2003,
					songs: 10,
					rating: 0,
					price: 11,
					status:2

					}

				]

		}

		$scope.artist = artist;


		$scope.hideInformation = true;
		$scope.btnChange = "+";
		$scope.showInfo = showInfo;



		$scope.showBandInformation = false;
		$scope.btnChangeMembers = "+";
		$scope.showMembers = showMembers;



		$scope.boldFontCss = {

			fontWeight: 'bold',
			textDecoration: 'underline' 
		}


		$scope.blueTextClass = "blue-text";

		$scope.bandRecordsShown = false;
		$scope.bandRecordsShowText = "+";
		$scope.showAndHideRecords = showAndHideRecords;



		$scope.upVoteRating = upVoteRating;
		$scope.downVoteRating = downVoteRating;

		function showInfo(){

			if ($scope.hideInformation == true) {

				$scope.hideInformation = false;
				$scope.btnChange = "-";
			}

			else {

				$scope.hideInformation = true;
				$scope.btnChange = "+";
				
			}
			
		}

		function showMembers(){

			if ($scope.showBandInformation == false) {

				$scope.showBandInformation = true;
				$scope.btnChangeMembers = "-";

			}
			else{

				$scope.showBandInformation = false;
				$scope.btnChangeMembers = "+";

			};
		}

		function showAndHideRecords(){

			if ($scope.bandRecordsShown == false) {

				$scope.bandRecordsShown = true;
				$scope.bandRecordsShowText = "-";

			}
			else{

				$scope.bandRecordsShown = false;
				$scope.bandRecordsShowText = "+";

				};
		}


		function upVoteRating(album){
			album.rating++;
		}


		function downVoteRating(album){
			if (album.rating > 0) {

				album.rating--;
			};

			
		}

	}
);