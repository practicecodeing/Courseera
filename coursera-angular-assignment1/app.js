//ImmediaterlyInvokedFunction
(function (){
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myController', function($scope){
      $scope.items = "";
      $scope.totalitemcount = 0;
$scope.report = "";

$scope.checkIfHealthy = function(){
  var count = getItemsCount($scope.items);
  $scope.totalitemcount = count;
  var reportdata = "";
    if (count== 0) {
      reportdata = "Please enter data first";
    }else if(count>0 && count<=3) {
reportdata = "Enjoy!";
}else if(count>3) {
reportdata = "Too much!";
    }
    $scope.report = reportdata;
};

function  getItemsCount(itemList){
var count = 0;
if (itemList.length>0)
  count = itemList.split(',').length;

return count;
}
  });
})(); /// iife end
