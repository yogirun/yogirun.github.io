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
			link: 'http://yogi.run/assets/img/nandiwinner/21059_1.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "Adinew Mekonnen Tolesa",
            Position: "3rd",
            BIB: "21060",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_3_openmen.jpg',
            Category: "21KM Open Men"
        },
				
		
	///////////////////
		
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
			link: 'http://yogi.run/assets/img/nandiwinner/21082_2.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "SURABHI MAHATA",
            Position: "3rd",
            BIB: "21007	",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_3_openwomen.jpg',
            Category: "21KM Open Men"
        },
		
		///////////////
		
		{
            Name: "SURESH CHAND",
            Position: "1st",
            BIB: "21052",
			link: 'http://yogi.run/assets/img/nandiwinner/21052_1.jpg',
            Category: "21KM Open Men"
        },
        {
             Name: "NANJUNDA K",
            Position: "2nd",
            BIB: "21068",
			link: 'http://yogi.run/assets/img/nandiwinner/21068_1.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "TAKATERU WATANABE",
            Position: "3rd",
            BIB: "21058",
			link: 'http://yogi.run/assets/img/nandiwinner/21058.JPG',
            Category: "21KM Open Men"
        },
				
		
	 
	
		
      {
            Name: "RAMASAMY ",
            Position: "1st",
            BIB: "21062",
			link: 'http://yogi.run/assets/img/nandiwinner/21062_1.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "MANMOHAN K R",
            Position: "2nd",
            BIB: "21041",
			link: 'http://yogi.run/assets/img/nandiwinner/21k_2_seniormen.jpg',
            Category: "21KM Open Men"
        },
        {
            Name: "ASHWIN PADUKONE",
            Position: "3rd",
            BIB: "21084	",
			link: 'http://yogi.run/assets/img/nandiwinner/21084.JPG',
            Category: "21KM Open Men"
        }
	 	
		
		
		]
    }
      $scope.setCards();
      
    }
    
    angular.module('CrisApp')
    .controller('AppController', AppController)