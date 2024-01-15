// Code with example
/**
    Example Condition 1 -->

        if (condition) {
            // Code to execute if the condition is true
        }

    Example Condition 2 -->

        if (condition) {
            // Code to execute if the condition is true
        } else {
            // Code to execute if the condition is false
        }

    Example Condition 3 -->

        if (condition1) {
            // Code to execute if condition1 is true
        } else if (condition2) {
            // Code to execute if condition2 is true
        } else {
            // Code to execute if no conditions are true
        }

**/

// Example Condition 1 -->

const age1 = 25

if (age1 >= 18) {
  console.log('You are an adult.')
}

// Example Condition 2 -->

const age2 = 15

if (age2 >= 18) {
  console.log('You are an adult.')
} else {
  console.log('You are not an adult.')
}

// Example Condition 3 -->

const score = 75

if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else {
  console.log('D')
}
