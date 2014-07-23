function RepoListCtrl($scope, $filter, $http) {
  $scope.setList = [];
  $scope.search = '';
  $http.get('repos.json').
    success(function(data){
      $scope.setList = data.sets;
    }).
    error(function(){
      alert('Error');
    });
}
