https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/

- Will take an example of Linear Search and analyze it using asymptotic analysis

- We can have 3 cases to analyze an algorithm

1. Worst Case
2. Average Case
3. Best Case

- Example of linear search
```
#include <stdio.h> 
  
// Linearly search x in arr[].  If x is present then return the index, 
// otherwise return -1 
int search(int arr[], int n, int x) 
{ 
    int i; 
    for (i=0; i<n; i++) 
    { 
       if (arr[i] == x) 
         return i; 
    } 
    return -1; 
} 
  
/* Driver program to test above functions*/
int main() 
{ 
    int arr[] = {1, 10, 30, 15}; 
    int x = 30; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    printf("%d is present at index %d", x, search(arr, n, x)); 
  
    getchar(); 
    return 0; 
} 
```

###### Worst Case Analysis (Usually Done)

- In worst case analysis, we calculate the upper bound on the running time of an algorithm
- `We must know the case that causes maximum number of operations to be executed`
- For Linear Search, the worst case happens when the element to be searched (x in the above code) is not present in the array
- When x is not present, the `search()` function compares it will all the elements of `arr[]` one by one
- Therefore, we worst case time complexity of the linear search is O(n)

###### Average Case Analysis (Sometimes done)

- In average case analysis, we take all possible inputs and calculate computing time for all of the inputs
- Sum all the calculated values and divide the sum by total number of inputs
- We must know (or predict) distribution of cases
- For the linear search problem, let us assume that all cases are uniformly distributed (including the cas)