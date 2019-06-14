angular.module('CrisApp', [])

    function AppController($scope) {
        $scope.cards = [];
      
      $scope.setCards = function() {
        $scope.cards = [
        {
            Name: "AMANUEL ABDU ALIYU ",
            Position: "1st",
            BIB: "10096",
			link: 'http://yogi.run/assets/img/nandiwinner/10096.jpg',
            Category: "12kM Open Men"
        },
        {
             Name: "RAHUL SHUKLA ",
            Position: "2nd",
            BIB: "10103",
			link: 'http://yogi.run/assets/img/nandiwinner/10103_1.jpg',
            Category: "12kM Open Men"
        },
        {
            Name: "LONGSHITHUNG",
            Position: "3rd",
            BIB: "10038",
			link: 'http://yogi.run/assets/img/nandiwinner/10038_2.jpg',
            Category: "12kM Open Men"
        },
				
		
	///////////////////
		
      {
            Name: "ZINASHWORK YENEW AMBI  ",
            Position: "1st",
            BIB: "10097",
			link: 'http://yogi.run/assets/img/nandiwinner/10097_1.jpg',
            Category: "12kM Open Women "
        },
        {
             Name: "MEGHNA K ",
            Position: "2nd",
            BIB: "21082",
			link: 'http://yogi.run/assets/img/nandiwinner/21082_1.jpg',
            Category: "12kM Open WoMen"
        },
        {
            Name: "DEEPTI NAYANI ",
            Position: "3rd",
            BIB: "21007	",
			link: 'http://yogi.run/assets/img/nandiwinner/21007_2.jpg',
            Category: "12kM Open WoMen"
        },
		
		///////////////
		
		{
            Name: "MRINAL ",
            Position: "1st",
            BIB: "10118",
			link: 'http://yogi.run/assets/img/nandiwinner/10118_2.jpg',
            Category: "12kM Masters (40-55) Men "
        },
        {
             Name: "SRIVATHS RAVI ",
            Position: "2nd",
            BIB: "10119",
			link: 'http://yogi.run/assets/img/nandiwinner/10119_2.jpg',
            Category: "12kM Masters (40-55) Men "
        },
        {
            Name: "SURESH D",
            Position: "3rd",
            BIB: "10099",
			link: 'http://yogi.run/assets/img/nandiwinner/10099.JPG',
            Category: "12kM Masters (40-55) Men "
        },
				
		
	 
	
		
      {
            Name: "SHUBAMANGALA ML ",
            Position: "1st",
            BIB: "10056",
			link: 'http://yogi.run/assets/img/nandiwinner/10056.jpg',
            Category: "12kM Masters (40-55) Women  "
        },
        {
            Name: "POONAM JOSHY ",
            Position: "2nd",
            BIB: "10077",
			link: 'http://yogi.run/assets/img/nandiwinner/10077_2.jpg',
            Category: "12kM Masters (40-55) Women  "
        },
        {
            Name: "PRADNYA ANJAL",
            Position: "3rd",
            BIB: "10079	",
			link: 'http://yogi.run/assets/img/nandiwinner/10079.jpg',
            Category: "12kM Masters (40-55) Women  "
        },
		
		
      {
            Name: "A BABA   ",
            Position: "1st",
            BIB: "10105",
			link: 'http://yogi.run/assets/img/nandiwinner/10105_1.jpg',
            Category: "12KM Seniors Men"
        },
        {
            Name: "RAJESH JOSHY   ",
            Position: "2nd",
            BIB: "10078",
			link: 'http://yogi.run/assets/img/nandiwinner/10078.jpg',
            Category: "12KM Seniors Men"
        }
	 	
		
		
		]
    }
      $scope.setCards();
      
    }
    
    angular.module('CrisApp')
    .controller('AppController', AppController)