app.controller("redditControl", function($scope, redditService){
  $scope.postArray = redditService;

  $scope.score = 0;
  



  $scope.addToArray = function(){
    //push whatever is in the input to the array
    $scope.postArray.push({postText: $scope.postInput, score: $scope.score});
    $scope.postInput = '';
    };
  $scope.removeItem = function($index){
    $scope.postArray.splice($index, 1);
    };
  $scope.increaseScore = function($index){
    $scope.postArray[$index].score++;
    };
});