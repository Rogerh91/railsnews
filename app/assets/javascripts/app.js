//= require angular-resource
angular.module('railsnews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})

	.state('posts', {
		url: '/posts.{id}',
		templateUrl: '/posts.html',
		controller: 'PostsCtrl'
	});

	$urlRouterProvider.otherwise('home');
}])

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
				votes: 1,
				comments: [
				{author: 'Roger', body: 'Yay!', votes:1},
				{author: 'Bob', body: 'I am a plumber!',votes:1}
				]
			})

			$scope.title ='';
			$scope.link ='';
	};

	$scope.removePost = function(){
			$scope.posts.pop($scope.posts);
		};

	$scope.incrementUpvotes = function(post) {
		post.votes += 1;
	}

	}])

.controller('PostsCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	function($scope,$stateParams,posts){
			$scope.post = posts.posts[$stateParams.id];
}]);


