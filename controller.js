var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService){

$scope.getPosts = function(){
	firebaseService.getPosts().then(function(res){
		$scope.posts = res;
	}, function(err){
		console.log(err);
	})
}
$scope.getPosts();

})