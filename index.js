function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function (responsibility = "go to the office") {
    return (`This Monday, I will ${responsibility}.`)
}

function wrapAdjective(parameter = "a dedicated programmer") {
    return function(flair = "*") {
      return "You are " + parameter + flair + parameter + "!";
    };
  }