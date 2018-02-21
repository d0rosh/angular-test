app.controller("mainCtrl",function($http,postServices, $location,$scope){
  var vm = this;
  vm.posts = [];
  vm.mediaImg = [];

  vm.visiblePosts = 9;
  vm.activePage = 1;

  vm.countPages = Math.ceil(vm.posts.length/vm.visiblePosts);



  postServices.getPosts().then(
    res=>{
        vm.posts = res;
        vm.countPages = Math.ceil(vm.posts.length/vm.visiblePosts);
        vm.buildPages(vm.countPage);
        angular.forEach(vm.posts,function(value,key){
            postServices.getMediaPhoto(value.featured_media).then(
                res=>{
                    vm.mediaImg[key] = res.source_url;
                },
                err=>console.log(err)
            )
        });
    },
    err=>console.log(err)
  )

  vm.showPost = function(id){
    $location.url('/post/' + id);
  }

  vm.buildPages = function(){
    var count = [];
    var length = vm.countPages;

    for (var i = 0; i < length; i++) {
        count[i] = i+1;
    }

    return count;
  }


  vm.changePage = function(index,$event){
    $event.preventDefault();
    if (vm.activePage > 1 && index == -1) {
        vm.activePage -=1;
        return;
    }

    if (vm.activePage < vm.countPages && index == 0) {
        vm.activePage += 1;
        return;
    }

    if (index > 0) {
        vm.activePage = index;
    }

  }
   
  


  
});

