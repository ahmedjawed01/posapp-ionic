'use strict';

/**
 * @ngdoc function
 * @name IonicGulp.controller:HomeController
 * @description
 * # HomeController
 */
 module.exports = [
 '$scope',
 'StorageService','$timeout','$ionicPopup','$filter','SalesOrderService','$ionicLoading',
 function($scope,StorageService,$timeout,$ionicPopup,$filter,SalesOrderService,$ionicLoading){

  var vm = this;
  vm.showDelete = false;
  vm.myorder = StorageService.get('myorder');
  vm.submitLabel = 'Submit Order';

  vm.salesOrder = {
    totalGross: null,
    tableNo: null,
    orders: []
  };

  vm.submit = function(){
    if(vm.submitLabel == 'Submit Order'){
      vm.showConfirm();
    }else{
      vm.requestBill();
    }
  }

  vm.submitOrder = function(){
    $ionicLoading.show();
    angular.forEach(vm.myorder.orders,function(order){
      vm.salesOrder.orders.push({"menuId":order.menu.id,"qty":order.qty,"subtotal":order.menu.price*order.qty});
    });
    vm.salesOrder.tableNo = vm.myorder.tableNo;
    vm.salesOrder.totalGross = vm.myorder.totalGross;
    SalesOrderService.save(vm.salesOrder).then(function successCalback(response){
     $ionicLoading.hide();
     console.log(response);
     vm.submitLabel = 'Request for Bill';
   },function errorCallback(response){
    $ionicLoading.hide();
    alert(response.data);
  });
  };

  vm.requestBill = function(){
    var data = {table: vm.salesOrder.tableNo};
    SalesOrderService.requestBill(data).then(function successCalback(response){
      console.log(response);
      $ionicPopup.confirm({title: 'Please Wait',template: 'Your Request has been Processed'});
    },function errorCallback(response){
      console.log(response);
    });
  }

  vm.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Once order is submit, order cannot be cancelled',
     template: composeConfirmation(),
     buttons: [{ text: 'Cancel' },{type: 'button-primary',text:'Submit'}]
   });

   confirmPopup.then(function(res) {
     if(!res) {
       vm.submitOrder();
     } else {
       console.log('You are not sure');
     }
   });
 };

 function composeConfirmation(){
  var content = '';
  content += '<table>';
  angular.forEach(vm.myorder.orders,function(order){
    content += '<tr><td style="padding:5px">'+order.menu.menuName+'@'+$filter('currency')(order.menu.price,'')+'</td>';
    content += '<td style="padding:5px">'+order.qty+'</td>';
    content += '<td style="padding:5px">'+$filter('currency')(order.menu.price*order.qty,'')+'</td>';
    content += '</tr>';
  });
  console.log(content);
  content += '</table>';
  return content;
 }
  

  vm.deleteOrder = function(index){
    vm.myorder.totalGross -= vm.myorder.orders[index].price;
    vm.myorder.orders.splice(index,1);
  };
}];
