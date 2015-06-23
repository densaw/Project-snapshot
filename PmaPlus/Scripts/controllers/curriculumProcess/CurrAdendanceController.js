﻿var app = angular.module('MainApp');



app.controller('AtendanceController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    // get att step 2
    var confDetail = angular.element('#confDetail');
    
    var confAtend = angular.element('#confAtend');

    $scope.date = new Date();
    

    var pathArray = $location.$$absUrl.split("/");
    $scope.currId = pathArray[pathArray.length - 1];

    $http.get('/api/Curriculum/Wizard/Session/AttendanceTable/' + $scope.currId + '/' + $scope.$parent.step.sessionId)
        .success(function (result) {
            $scope.items = result;

        });
   
    $scope.ssesionDetail = function () {
        $scope.modalTitle = "Details";
        //confDetail.modal('show');
        $('#confDetail').appendTo("body").modal('show');
    };
    
   

    $scope.confAtend = function () {
        $scope.modalTitle = "Details";
        //confAtend.modal('show');
        $('#confAtend').appendTo("body").modal('show');
    };

    $scope.addDetails = function ()
    { confDetail.modal('hide'); }
    $scope.closeDetails = function ()
    { confDetail.modal('hide'); }

    $scope.attendense = [
       { id: 0, name: 'Attended' },
       { id: 1, name: 'NotAttended' },
       { id: 2, name: 'Holidays' },
       { id: 3, name: 'Injured' },
       { id: 4, name: 'School' },
       { id: 5, name: 'Sick ' },
       { id: 6, name: 'OtherTraining ' },
       { id: -1, name: '' }
       
    ];
    $scope.attendenseVisible = $scope.attendense[0];

    $scope.okAtt = function () {

        angular.forEach($scope.items, function (item) {
            item.attendance = 0;
        });
        confAtend.modal('hide');
    };

    $scope.cancelAtt = function () {
        confAtend.modal('hide');
    };
}]);