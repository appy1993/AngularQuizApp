myapp.controller('quizCtrl',['$scope','quizFactory',function($scope,quizFactory){
$scope.show_Login=true;
$scope.quizOver=false;
$scope.score = 0;
$scope.incorrect=0;

$scope.getQuestion = function() {
	var q = quizFactory.getQuestion($scope.id);
	if(q) {
		$scope.question = q.question;
		$scope.options = q.options;
		$scope.answer = q.answer;
	} else {
		  $scope.quizOver = true;         
          $scope.labels = ["correct", "Incorrect"];
          $scope.data = [$scope.score, $scope.incorrect];
          $scope.colors = ['#46BFBD','#f9003f'];   
     //     console.log(JSON.stringify($scope.result));  
	}
};

 $scope.startQuiz=function(){
    $scope.show_Login=false;
     $scope.id = 0;
     $scope.quizOver = false;
	 $scope.inProgress = true;
    
	 $scope.getQuestion();   
};

	$scope.reset = function() {      
         $scope.show_Login=true;   
         $scope.quizOver=false;
         $scope.inProgress = false;
         $scope.score = 0;
         $scope.incorrect=0;	
	};

    $scope.nextQuestion = function() {
	    $scope.id++;
	    $scope.getQuestion();
	}

    $scope.result=[];
	$scope.checkAnswer = function() {
		if(!$('input[name=answer]:checked').length){
            alert("Please select an answer.");
            return;
        }
        else
        {		  
             var ans=$('input[name=answer]:checked').val();
				if(ans == $scope.options[$scope.answer]) {
					$scope.score++;		
				}else{
                    $scope.incorrect++;
                }  

            var temp={}
            temp.question=$scope.question;
            temp.answer=$scope.answer;
            temp.userAnswer=ans;
            $scope.result.push(temp);

            $scope.nextQuestion();
            }
		};
}]);