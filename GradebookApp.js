function getAverage(scores) {
    let sumScores = 0;
    for (const element of scores){
      sumScores += element;
    }
    return sumScores / scores.length;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  function getGrade(score) {
    let grade = "";
    if (score === 100){
      grade = "A++";
    } else if (90 <= score && score <= 99){
      grade = "A";
    } else if(80 <= score && score <= 89){
      grade = "B";
    } else if(70 <= score && score <= 79){
      grade = "C";
    } else if(60 <= score && score <= 69){
      grade = "D";
    } else {
      grade = "F";
    }
    return grade
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

  
function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade != "F"){
      return true
    } else {
      return false
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));