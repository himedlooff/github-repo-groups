function RepoListCtrl($scope, $filter, $http) {
  $scope.setList = [];
  $scope.repoList = [];
  $scope.search = '';
  $scope.bowerData = '';
  
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
      $scope.getBowerJson();
    }).
    error(function(){
      alert('Error');
    });

  $scope.getBowerJson = function() {
    for (var i = 0; i < $scope.repoList.length; i++) {
      if ($scope.repoList[i].name == 'cf-expandables') {
        $http.get($scope.repoList[i].contents_url.replace('{+path}', 'bower.json')).
          success(function(data){
            $scope.bowerData = JSON.parse(atob(data.content));
            // console.log($scope.bowerData.keywords);
          }).
          error(function(){
            alert('Error, no bower.json');
          });
      }
    }
  };
};
