# If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.

# initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

# The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.

# If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

<!-- function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
} -->

# Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.

# React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

# a => a + 1 will receive 42 as the pending state and return 43 as the next state.

# a => a + 1 will receive 43 as the pending state and return 44 as the next state.

# a => a + 1 will receive 44 as the pending state and return 45 as the next state.

# There are no other queued updates, so React will store 45 as the current state in the end.

# By convention, it’s common to name the pending state argument for the first letter of the state variable name, like a for age. However, you may also call it like prevAge or something else that you find clearer.

<!-- ? function handleClick() {
  ?setAge(age + 1); // setAge(42 + 1)
  ?setAge(age + 1); // setAge(42 + 1)
  ?setAge(age + 1); // setAge(42 + 1)
}  -->

# Suppose the age is 42. This handler calls setAge(age + 1) three times:

## However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).


