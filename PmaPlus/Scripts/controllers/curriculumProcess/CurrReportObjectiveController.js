﻿var app = angular.module('MainApp');

app.controller('CurrReportObjectiveController', ['$scope', '$http', '$location', 'WizardHandler', function ($scope, $http, $location, WizardHandler) {

    var pathArray = $location.$$absUrl.split("/");
    $scope.currId = pathArray[pathArray.length - 1];

    var getTable = function () {

        $http.get('/api/Curriculum/Wizard/Session/ReportObjectiveTable/' + $scope.currId + '/' + $scope.$parent.step.sessionId)
            .success(function (result) {
                $scope.items = result;
            });
    }


    var saveObjectives = function () {
        $http.post('/api/Curriculum/Wizard/Session/ObjectiveTable/' + $scope.currId + '/' + $scope.$parent.step.sessionId, $scope.items)
            .success(function () {

            });

    };

    $scope.$on('saveProgressEvent', function () {
        if (WizardHandler.wizard().currentStepNumber() == $scope.$parent.steps.indexOf($scope.$parent.step) + 1) {

            var completed = true;
            angular.forEach($scope.items, function (item) {
                if (item.outcome === '') {
                    if (item.objective !== '') {
                        completed = false;
                    }
                }
            });

            if (completed) {
                saveObjectives();
                $scope.nav.canNext = true;
            }

        }
    });

    $scope.$on('moveEvent', function () {
        if (WizardHandler.wizard().currentStepNumber() == $scope.$parent.steps.indexOf($scope.$parent.step) + 1) {
            if ($scope.$parent.step.done) {
                $scope.nav.canNext = true;
                $scope.nav.canBack = true;
            } else {
                $scope.nav.canNext = false;
            }

            getTable();
        }
    });

}]);