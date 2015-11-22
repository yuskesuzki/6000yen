(function () {
  'use strict';

  angular.module('demoApp')
    .controller('CloningCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      /**
       * スケジュール欄に配置したアイコンの合計金額を戻す
       */
      $scope.getAmount = function() {
        var result = 0;
        for(var i=0; i < $scope.tree2.length; i++) {
          result += $scope.tree2[i].price;
        }
        return result;

      };

      $scope.tree1 = [{
        'id': 1,
        'title': '航空チケット',
        'nodes': [],
        'imgsrc': 'images/air.jpg',
        'price': 6000
      }, {
        'id': 2,
        'title': '六花亭 札幌本店',
        'nodes': [],
        'imgsrc': 'images/food.jpg',
        'price': 2000
      }, {
        'id': 3,
        'title': '札幌オータムフェスト',
        'nodes': [],
        'imgsrc': 'images/free.jpg',
        'price': 1500
      }, {
        'id': 4,
        'title': 'ノボテル札幌',
        'nodes': [],
        'imgsrc': 'images/hotel.jpg',
        'price': 1500
      }];
      $scope.tree2 = [
      ];
    }]);

}());
