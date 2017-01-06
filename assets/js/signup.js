var app = angular.module("Signup", ['ui.router', "ngAnimate"]);

app.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/index/signup');
  $stateProvider
  .state('index', {
    url: '/index',
    templateUrl: 'index.html',
    controller: 'FormCtrl'
  })
  .state('index.signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'FormCtrl'
  })
  .state('index.otp', {
    url: '/otp',
    templateUrl: 'views/otp.html',
    controller: 'FormCtrl'
  })
  .state('index.password', {
    url: '/password',
    templateUrl: 'views/password.html',
    controller: 'FormCtrl'
  })
  .state('index.identity', {
    url: '/identity',
    templateUrl: 'views/identity.html',
    controller: 'FormCtrl'
  })
  .state('index.done', {
    url: '/done',
    templateUrl: 'views/done.html',
    controller: 'FormCtrl'
  });
});

app.controller("FormCtrl", ["$scope", "$location", "$window", "dataService", function($scope, $location, $window, dataService) {
    console.log(dataService.newuser);
    $scope.newuser = dataService.newuser;
    if(document.getElementById('showPswd')) {
      document.getElementById('showPswd').addEventListener("click", function() {
          var pwd = document.getElementById("newPassword");
          if (pwd.getAttribute("type") === "password") {
              pwd.setAttribute("type", "text");
          } else {
              pwd.setAttribute("type", "password");
          }
      });
    }
    if(document.getElementById('last')) {
      console.log(dataService.newuser);
          setTimeout(function() {
            $window.open('http://www.ayushdevelops.com/');
          }, 10000);
    }

    $scope.go = function(path) {
      $location.path(path);
    };
}]);

app.factory('dataService', function() {
  return {
    newuser: {
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      password: '',
      aadhar: '',
      pan: ''
    }
  };
});
