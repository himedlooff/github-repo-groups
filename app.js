function RepoListCtrl($scope, $filter, $http) {
  $scope.repoList = [];
  $http.get('/repos.json').
    success(function(data){
      $scope.repoList = data.repos;
    }).
    error(function(){
      alert('Error');
    });
}
