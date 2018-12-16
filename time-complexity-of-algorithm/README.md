https://www.daniweb.com/programming/computer-science/threads/13488/time-complexity-of-algorithm

- Most common metric for calculating time complexit is Big O notaiton
- This removes all constant factors so that the running time can be estimated in relation to N as N approaches infinity
- In general you can think of it like this

```
1. statement;
```

- This is constant
- The running time of the statement will not change in relation to any N value

```
for ( i = 0; i < N; i++ )
  statement;
```

- This is linear
- The running time of the loop is directly proportional to N
- When N doubles, so does the running time

```
for ( i = 0; i < N; i++ ) {
  for ( j = 0; j < N; j++ )
    statement;
}
```

- This is quadratic
- The running time of the two loops is proportional to the square of N
- When N doubles, the running time increases by N * N

```
while ( low <= high ) {
  mid = ( low + high ) / 2;
  if ( target < list[mid] )
    high = mid - 1;
  else if ( target > list[mid] )
    low = mid + 1;
  else break;
}
```

- This is logarithmic
- The running time of the algorithm is proportional to the number of times N can be divided by 2
- This is because the algorithm divides the working area in half with each iteration

```
void quicksort ( int list[], int left, int right )
{
  int pivot = partition ( list, left, right );
  quicksort ( list, left, pivot - 1 );
  quicksort ( list, pivot + 1, right );
}
```

- This is N*log(N)
- The running time consists of N loops (iterative or recursive) that are logarithmic, thus the algorithm is a combination of linear and logarithmic

- In general, doing something with every item in one dimension is linear
- Doing something with every item in two dimensions is quadratic
- Dividing the working area in half is logarithmic
- There are other Big O measures such as cubic, exponential, and square root, but they are not as common
- The Big O notaiton is described as O(<type>) where <type> is the measure
- The QuickSort algorithm would be descibed as O(N*log(N))

