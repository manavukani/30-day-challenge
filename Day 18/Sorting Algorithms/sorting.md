### Now let's see some examples of when to use which algorithm:

1. Sort 10 schools around your house by distance. : Use Insertion sort a s array length is short.
2. Sort some product list based on price: Use Quick sort
3. Massive database (can’t fit all into memory) need to sort through past years user data: Use “Merge Sort” as it guarantees a time complexity of `O(n log n)`.
4. Almost sorted Udemy review data needs to be updated and add 2 new reviews: Use “Insertion Sort” as the data is almost sorted it might be `O(n)`
5. Large user name database needs to be sorted. Data is very random: Use “Merge Sort”, but if you worry about space and don’t worry about the worst case use “Quick Sort” select good pivot
6. Want to teach sorting for the first time: “Bubble sort”

### Why Quick Sort is preferred over MergeSort for sorting Arrays ?

Quick Sort in its general form is an in-place sort (i.e. it doesn’t require any extra storage) whereas merge sort requires `O(N)` extra storage, N denoting the array size which may be quite expensive.
Allocating and de-allocating the extra space used for merge sort increases the running time of the algorithm. Comparing average complexity we find that both type of sorts have `O(NlogN)` average complexity but the constants differ. For arrays, merge sort loses due to the use of extra `O(N)` storage space.
Most practical implementations of Quick Sort use randomized version. The randomized version has expected time complexity of `O(nLogn)`. The worst case is possible in randomized version also, but worst case doesn’t occur for a particular pattern (like sorted array) and randomized Quick Sort works well in practice.
Quick Sort is also a cache friendly sorting algorithm as it has good locality of reference when used for arrays.
Quick Sort is also tail recursive, therefore tail call optimizations is done.

### Why MergeSort is preferred over QuickSort for Linked Lists ? 

In case of linked lists the case is different mainly due to difference in memory allocation of arrays and linked lists. Unlike arrays, linked list nodes may not be adjacent in memory. Unlike array, in linked list, we can insert items in the middle in O(1) extra space and O(1) time. Therefore merge operation of merge sort can be implemented without extra space for linked lists.

In arrays, we can do random access as elements are continuous in memory. Let us say we have an integer (4-byte) array A and let the address of A[0] be x then to access A[i], we can directly access the memory at `(x + i*4)`. Unlike arrays, we can not do random access in linked list. Quick Sort requires a lot of this kind of access. In linked list to access i’th index, we have to travel each and every node from the head to i’th node as we don’t have continuous block of memory. Therefore, the overhead increases for quick sort. Merge sort accesses data sequentially and the need of random access is low. 

### Merge Sort is useful for sorting linked lists in O(nLogn) time.

In the case of linked lists, the case is different mainly due to the difference in memory allocation of arrays and linked lists. Unlike
arrays, linked list nodes my not be adjacent in memory. Unlike an array, in the linked list, we can insert items in the middle in `O(1)`
extra space and `O(1)` time. Therefore, the merge operation of merge sort can be implemented without extra space for linked lists.
In arrays, we can do random access as elements are contiguous in memory. Let us say we have an integer (4-byte) array A and let the
address of A[0] be x then to access A[i], we can directly access the memory at `(x + i*4)`. Unlike arrays, we can not do random access in
the linked list. Quick Sort requires a lot of this kind of access. In a linked list to access i’th index, we have to travel each and
every node from the head to i’th node as we don’t have a continuous block of memory. Therefore, the overhead increases for quicksort.
Merge sort accesses data sequentially and the need of random access is low.

### Merge Sort Disadvantages
- Slower for small task
- Merge sort algorithm requires an additional memory space of 0(n) for the temporary array.
- It goes through the whole process even if the array is sorted.