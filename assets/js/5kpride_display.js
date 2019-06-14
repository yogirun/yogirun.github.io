angular.module('CrisApp', [])

    function AppController($scope) {
        $scope.cards = [];
		
		/*
		
				
		
		

*/
      
      $scope.setCards = function() {
        $scope.cards = [
        {
            Name: "Chandan kumar",
            Position: "1st",
            BIB: "5028",
			link: 'http://yogi.run/assets/img/nandiwinner/5k_1_openmen.jpg',
            Category: "5 KM Open Men"
        },
        {
             Name: "Lroutha  ",
            Position: "2nd",
            BIB: "5005",
			link: 'http://yogi.run/assets/img/nandiwinner/5005_1.jpg',
            Category: " 5 KM Open Men"
        },
        {
            Name: "Gajanan",
            Position: "3rd",
            BIB: "5003",
			link: 'http://yogi.run/assets/img/nandiwinner/5003_2.jpg',
            Category: " 5 KM Open Men"
        },
				
		
	///////////////////
	
	/*
	




	*/
		
      {
            Name: "Amisha ",
            Position: "1st",
            BIB: "5025",
			link: 'http://yogi.run/assets/img/nandiwinner/5025.jpg',
            Category: "5 KM Open   Women"
        },
        {
             Name: "Chandana",
            Position: "2nd",
            BIB: "5051",
			link: 'http://yogi.run/assets/img/nandiwinner/5051.jpg',
            Category: "5 KM Open Women"
        },
        {
            Name: "Seema ",
            Position: "3rd",
            BIB: "5069",
			link: 'http://yogi.run/assets/img/nandiwinner/5069.jpg',
            Category: "5 KM Open Women"
        },
		
		/////////////// 
		{
            Name: "DR VEERESH K",
            Position: "1st",
            BIB: "5056",
			link: 'http://yogi.run/assets/img/nandiwinner/5056_1.jpg',
            Category: "5 KM Masters Men"
        },
        {
             Name: "VISHY NARAYANA",
            Position: "2nd",
            BIB: "5033",
			link: 'http://yogi.run/assets/img/nandiwinner/5033_1.jpg',
            Category: "5 KM Masters Men"
        },
        {
            Name: "VIKAS",
            Position: "3rd",
            BIB: "5009",
			link: 'http://yogi.run/assets/img/nandiwinner/5009_1.jpg',
            Category: "5 KM Masters Men"
        }, 
		
      {
            Name: "SAVITA SHASTRI",
            Position: "1st",
            BIB: "5055",
			link: 'http://yogi.run/assets/img/nandiwinner/5055_1.jpg',
            Category: "5 KM Masters Women"
        },
        {
            Name: "MALA",
            Position: "2nd",
            BIB: "5029",
			link: 'http://yogi.run/assets/img/nandiwinner/5029_1.jpg',
            Category: "5 KM Masters Women"
        },
        {
            Name: "BIDISHA",
            Position: "3rd",
            BIB: "5030	",
			link: 'http://yogi.run/assets/img/nandiwinner/5030_2.jpg',
            Category: "5 KM Masters Women "
        }
	 	///
		//
		
		,
        {
            Name: "PANDURANGAN",
            Position: "1st",
            BIB: "5032	",
			link: 'http://yogi.run/assets/img/nandiwinner/5032_2.jpg',
            Category: "5 KM Seniors Men"
        }
		]
    }
      $scope.setCards();
      
    }
    
    angular.module('CrisApp')
    .controller('AppController', AppController)