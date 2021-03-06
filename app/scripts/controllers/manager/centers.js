'use strict';

/**
 * @ngdoc function
 * @name happytailApp.controller:ManagerCentersCtrl
 * @description
 * # ManagerCentersCtrl
 * Controller of the happytailApp
 */
angular.module('happytailApp')
.controller('ManagerCentersCtrl', ['$scope', 'Fbdata', ManagerCentersCtrl])
.controller('ManagerCentersAddCtrl', ['$scope', 'Fbdata', ManagerCentersAddCtrl])
.controller('ManagerCentersDetailCtrl', ['$scope', '$routeParams', 'Fbdata', ManagerCenterDetailCtrl]);

function ManagerCentersCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.searchText = '';
  $scope.list = Fbdata.center();


}

function ManagerCenterDetailCtrl($scope, $routeParams, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  /*$scope.centerList = Fbdata.center($routeParams.centerId);*/
  $scope.center = Fbdata.centerDetail($routeParams.centerId);

/*

  $scope.test = Fbdata.center().$getRecord(routeParams.centerId);
  $scope.test2 = Fbdata.center();*/

/*  $scope.test = Fbdata.centerDetail().$getRecord(routeParams.centerId);

  console.log('테스트', $scope.test);*/

/*
  var rec = Fbdata.center.$getRecord($routeParams.centerId);

  console.log('렉 : ' + rec );*/
  console.log('왜왜왜왜', Fbdata.centerDetail($routeParams.centerId));

}

function ManagerCentersAddCtrl($scope, Fbdata) {
  $scope.common.navbar = '/templates/navbar.main.html';
  $scope.common.side = '/templates/side.manager.html';
  $scope.common.header = '/templates/header.manager.html';

  $scope.formFields = [
  {
    'className': 'row',
    'fieldGroup': [
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'name',
        'templateOptions': {
          'label': '이름'
        }
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'location',
        'templateOptions': {
          'label': '소재지'
        },
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'phone',
        'templateOptions': {
          'label': '대표번호'
        },
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'donation',
        'templateOptions': {
          'label': '후원금 총액'
        },
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'img',
        'templateOptions': {
          'label': '이미지'
        },
      },
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'regDate',
        'templateOptions': {
          'label': '등록일'
        },
      },



    ]
  },
  /*
  {
    'template': '<hr /><div><strong>Address:</strong></div>'
  },*/

/*
  {
    'className': 'row',
    'fieldGroup': [
      {
        'className': 'col-xs-6',
        'type': 'input',
        'key': 'street',
        'templateOptions': {
          'label': 'Street'
        }
      },
      {
        'className': 'col-xs-3',
        'type': 'input',
        'key': 'cityName',
        'templateOptions': {
          'label': 'City'
        }
      },
      {
        'className': 'col-xs-3',
        'type': 'input',
        'key': 'zip',
        'templateOptions': {
          'type': 'number',
          'label': 'Zip',
          'max': 99999,
          'min': 0,
          'pattern': '\\d{5}'
        }
      }
    ]
  },
  {
    'template': '<hr />'
  },
  {
    'type': 'input',
    'key': 'otherInput',
    'templateOptions': {
      'label': 'Other Input'
    }
  },
  {
    'type': 'checkbox',
    'key': 'otherToo',
    'templateOptions': {
      'label': 'Other Checkbox'
    }
  }
*/


];

  $scope.add = function(item) {
    console.log(item);
    // if( newMessage ) {
    console.log(Fbdata.center);
    Fbdata.center().$add(item);
    // }
  };

}
