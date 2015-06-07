angular.module('railsnews', ['ui.router'])
.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
	$scope.posts = posts.posts;

	$scope.addPost = function(){
			$scope.posts.push({
				title: $scope.title, 
				link: $scope.link,
				votes: 1})
			$scope.title ='';
			$scope.link ='';
		};

	$scope.removePost = function(){
			$scope.posts.pop($scope.posts);
		};

	$scope.incrementUpvotes = function(post) {
		post.votes += 1;
	}

	}]);
