angular.module('railsnews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.posts = [
		{title: 'post 1', votes: 5},
		{title: 'post 2', votes: 7},
		{title: 'post 3', votes: 2},
		{title: 'post 4', votes: 4},
		{title: 'post 5', votes: 3}
		];

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
