app.controller("postCtrl",function($http,postServices,$routeParams,$location){
  var vm = this;

  vm.post = {};


  postServices.getOnePost($routeParams.id).then(
    res=>{
        vm.post = res;
    },
    err=>console.log(err)
  )


  vm.backLocation = function(){
    $location.path('/');
  }

});


