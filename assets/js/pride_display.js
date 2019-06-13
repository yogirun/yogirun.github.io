angular.module('CrisApp', [])

    function AppController($scope) {
        $scope.cards = [];
      
      $scope.setCards = function() {
        $scope.cards = [
        {
            Name: "Mikiyas Yemata Lemlemu",
            Position: "1st",
            BIB: "21061",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_1_openmen.jpg',
            Category: "21KM Open Men"
        },
        {
             Name: "ISSAC KEMBOI ",
            Position: "2nd",
            BIB: "21059",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_2_openmen.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "Adinew Mekonnen Tolesa",
            Position: "3rd",
            BIB: "21060",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_3_openmen.jpg',
            Category: "21KM Open Men"
        },
				
		
	
		
      {
            Name: "Upasana Koul",
            Position: "1st",
            BIB: "21086",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_1_openwomen.jpg',
            Category: "21KM Open Men"
        },
        {
             Name: "DEEPIKA PRAKASH",
            Position: "2nd",
            BIB: "21082",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_2_openwomen.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "SURABHI MAHATA",
            Position: "3rd",
            BIB: "21007	",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_3_openwomen.jpg',
            Category: "21KM Open Men"
        }]
    }
      $scope.setCards();
      
    }
    
    angular.module('CrisApp')
    .controller('AppController', AppController)