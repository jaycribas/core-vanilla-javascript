schedule = {};

function isEmpty(schedule){
  if ("8:30" in schedule){
    return false;
  } else {
    return true;
  }
}

console.log(isEmpty(schedule));

schedule["8:30"] = "Get up."

console.log(isEmpty(schedule));
