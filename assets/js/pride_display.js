angular.module('CrisApp', [])

    function AppController($scope) {
        $scope.cards = [];
      
      $scope.setCards = function() {
        $scope.cards = [
        {
            Name: "Alfred",
            Position: "Butler",
            BIB: "Batman",
			link: 'http://yogi.run/assets/img/gallery/img-1.jpg',
            Color: "red"
        },
        {
            Name: "Jane",
            Occupation: "Queen of Jungle",
            Employer: "Tarzan",
          
          link: 'http://yogi.run/assets/img/gallery/img-2.jpg',
        },
        {
            Name: "Aladdin",
            Occupation: "Beggar Prince",
            Employer: "Self-Employed",
          
          link: 'http://yogi.run/assets/img/gallery/img-3.jpg',
        },
        {
            Name: "Bill Gates",
            Occupation: "Bajillionaire",
            Employer: "Microsoft",
          
          link: 'https://s-media-cache-ak0.pinimg.com/originals/2d/fb/d3/2dfbd38983291d3d0e5c1cb0667406b5.jpg',
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