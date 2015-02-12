var app = angular.module('reddit');

app.service('firebaseService', function($q, $http){

this.getPosts = function(){

	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'https://devmtn.firebaseio.com/posts.json'
	}).then(function(res){
		deferred.resolve(res.data)
		console.log(res);
	}, function(err){
		deferred.reject(err);
		console.log(err)
	})
	return deferred.promise;

}

})