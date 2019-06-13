angular.module('CrisApp', [])

    function AppController($scope) {
        $scope.cards = [];
      
      $scope.setCards = function() {
        $scope.cards = [
        {
            Name: "Alfred",
            Position: "Butler",
            BIB: "Batman",
			link: 'http://yogi.run/assets/img/nandiwinner/5k_1_openmen.jpg',
            Color: "red"
        },
        {
            Name: "Jane",
            Occupation: "Queen of Jungle",
            Employer: "Tarzan",
          
			link: 'http://yogi.run/assets/img/nandiwinner/21k_1_openmen.jpg',
        },
        {
            Name: "Aladdin",
            Occupation: "Beggar Prince",
            Employer: "Self-Employed",
          
			link: 'http://yogi.run/assets/img/nandiwinner/21k_2_openmen.jpg',
        },
        {
            Name: "Bill Gates",
            Occupation: "Bajillionaire",
            Employer: "Microsoft",
          
       link: 'http://yogi.run/assets/img/nandiwinner/21k_3_openmen.jpg',
        },
        {
            Name: "Manny",
            Occupation: "Code Monkey",
            Employer: "Jolera",
          
          link: 'https://s-media-cache-ak0.pinimg.com/originals/2d/fb/d3/2dfbd38983291d3d0e5c1cb0667406b5.jpg',
        }]
    }
      $scope.setCards();
      
    }
    
    angular.module('CrisApp')
    .controller('AppController', AppController)