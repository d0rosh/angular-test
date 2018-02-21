app.factory('postServices',function($http){
	var url = 'https://inx.wp-funnel.com/wp-json/wp/v2/';
	var getPosts = function(){
		return $http.get(url + 'posts?per_page=16')
		.then(
			successHandle,
			errorHandle
		)
	}

	var getOnePost = function(id){
		return $http.get(url + 'posts/' + id)
		.then(
			successHandle,
			errorHandle
		)
	}

	var getMediaPhoto = function(id){
	   return $http.get(url + 'media' + '/' + id)
		.then(
			successHandle,
			errorHandle
		)
	}

	function errorHandle(err){
		console.log(err)
	}

	function successHandle(res){
		return res.data;
	}

    return {
		getPosts: getPosts,
		getOnePost: getOnePost,
		getMediaPhoto: getMediaPhoto    	
    }
});

