Question 1:
it prints 3 because the list is length 3 and after the loop ends it increments `i` by one more before exiting the loop
Question 2:
it prints 150 because the final discounted price of the final list item is 300 * 0.5 which is 150
Question 3:
It prints 150 because the final state of `finalPrice` is 150 once the loop ends
Question 4:
It will return a list of 3 numbers, all of which are the original number with the applied discount: `[50,100,150]`
Question 5:
errors since `let` changes the scope of `i` and makes it inaccessible outside the loop
Question 6:
`discountPrice` is also out of scope since its inside the for loop so the program errors out
Question 7:
prints 150 since `finalPrice` isn't out of scope
Question 8:
this function will still return the list of discounted prices: `[50,100,150]`
Question 9:
`i` is still out of scope, error
Question 10:
prints 3 since `length` isn't out of scope
Question 11:
returns the discounted prices because a const list is a const reference to a list, not an un-changeable list 
