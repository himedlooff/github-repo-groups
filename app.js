function RepoListCtrl($scope, $filter, $http) {
  $scope.setList = [];
  $scope.repoList = [];
  $scope.search = '';
  
  $http.get('repos.json').
    success(function(data){
      $scope.setList = data.sets;
    }).
    error(function(){
      alert('Error');
    });

  $http.get('https://api.github.com/orgs/cfpb/repos?per_page=100').
    success(function(data){
      $scope.repoList = data;
    }).
    error(function(){
      alert('Error');
    });
}
