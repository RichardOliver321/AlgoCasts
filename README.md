# AlgoCasts

Companion repo to a course on Udemy.com


#run time

constant time: 1 -> no matter what input. will always take the same amount of time

logorythmic time: log(n) -> doubling inputs doesn't double time (sorts usually log(n))

Linear time: n -> iterate through k amount of inputs

Quasilinear time: n * log(n) -> increases time by doubling the amount of inputs you are iterating over doesn't double time.                                     e.g. iterating over a sort

Quadratic time: n^2 -> Every time you ad an element the amount of work increases a lot. e.g. handshake problem
                        people in room. introduce a person has to shake every other person in the room. interact with every element

Exponential time: 2^n -> adding a single element doubles the amount of processing power

#Big O

O(n) -> linear
O(1) -> Constant
O(n^2) -> Quadratic

#Identifying Complexity

iterating a simle for loop through a single collection -> Probably O(n)
iterating through half a collection -> Still O(n)
iterating through two different collections -> O(n + m)
Two nested for loops iterating over the same ollection -> O(n^2)
Two nested for loogs iterating over different collections -> O(n*m)
Sorting? ->  O(n*log(n))
Searching a sorted array? -> O(log(n))


#Space Complexity
How much memory is required
O(n) -> revesed string
