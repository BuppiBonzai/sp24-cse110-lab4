- Q1:
it prints 3 because the list is length 3 and after the loop ends it increments `i` by one more before exiting the loop
- Q2:
it prints 150 because the final discounted price of the final list item is 300 * 0.5 which is 150
- Q3:
It prints 150 because the final state of `finalPrice` is 150 once the loop ends
- Q4:
It will return a list of 3 numbers, all of which are the original number with the applied discount: `[50,100,150]`
- Q5:
errors since `let` changes the scope of `i` and makes it inaccessible outside the loop
- Q6:
`discountPrice` is also out of scope since its inside the for loop so the program errors out
- Q7:
prints 150 since `finalPrice` isn't out of scope
- Q8:
this function will still return the list of discounted prices: `[50,100,150]`
- Q9:
`i` is still out of scope, error
- Q10:
prints 3 since `length` isn't out of scope
- Q11:
returns the discounted prices because a const list is a const reference to a list, not an un-changeable list 
- Q12:
    - `student.name`
    - `student["Grad Year"]`
    - `student.greeting()`
    - `student["Favorite Teacher"].name`
    - `student.courseLoad[0]`
- Q13:
    - 32: I guess it converts `2` into a string and then concatenates it with 3
    - 1: I guess it converts `3` to a int and then subtracts 2 from it
    - 3: `null` is technically 0 I guess, so 3+0 = 3
    - 3null: cocatenates `null` and `3`
    - 4: `true` is 1, so 1+3 = 4
    - 0: 0+0 = 0
    - 3undefined: cocatenates them
    - NaN: `NaN` is undefined so i guess the program decides 3-undecided = undecided
- Q14:
    - true: might be ascii related, or it could be converting one value to another type
    - false: only thing I can think of is its comparing the ascii of the first char
    - true: probably converting the string to an int
    - false: triple equals does not convert types so its strictly comparing the given values
    - false: true = 1, 1 is not equal to 2
    - true: probably truncating 2 to 1 using the `Boolean` function
- Q15: Already explained but `===` does not convert types before comparing while `==` does
- Q17: returns `[2,4,6]`. The for loop iterates through the array and pushes the result of the callback function into the new array, and the callback function just multiplies the number by 2
- Q19: 1,4,3,2

