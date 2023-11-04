/**

    switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break
    case value2:
        // Code to execute if expression matches value2
        break
        // Additional cases can be added as needed
    default:
        // Code to execute if no case matches the expression
    }

**/

const day = 'Tuesday'

switch (day) {
  case 'Monday':
    console.log("It's the start of the workweek.")
    break
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log("It's a workday.")
    break
  case 'Friday':
    console.log("It's almost the weekend.")
    break
  case 'Saturday':
  case 'Sunday':
    console.log("It's the weekend!")
    break
  default:
    console.log('Invalid day.')
}
