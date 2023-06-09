## Lecture 4

## TABLE OF CONTENTS
 1. Array
 2. Array methods()
 3. Destructuring, spread and rest.
 
### Array methods()

* **push()**
* **shift()**
* **pop()**
* **unshift()**
* **reverse()**
* **concat()**
* **indexOf()**
* **includes()**
* **splice()**
* **slice()**
* **toString()**
* **join()**
* **map()**
* **filter()**
* **find()**
* **reduce()**
* **forEach()**
* **sort()**


### JavaScript Array push() method
The JavaScript array **push()** method adds one or more elements to the end of the given array. This method changes the length of the original array.

#### _**Syntax**_
The **push()** method is represented by the following syntax:

**array.push(element1,element2....element n);**

_**element1,element2....elementn**_ - The elements to be added. 


![The San Juan Mountains are beautiful!](/img/push.png)


### JavaScript Array unshift() method
The JavaScript array **unshift()** method adds one or more elements in the beginning of the given array and returns the updated array. This method changes the length of the original array.

#### _**Syntax**_
The **unshift()** method is represented by the following syntax:

**array.unshift(element1,element2....element n);**

_**element1,element2....elementn**_ - The elements to be added. 

![The San Juan Mountains are beautiful!](/img/unshift.png)

### JavaScript Array pop() method
The JavaScript array **pop()** method removes the last element from the given array and return that element. This method changes the length of the original array.

#### _**Syntax**_
The **pop()** method is represented by the following syntax:

**array.pop();**

![The San Juan Mountains are beautiful!](/img/pop.png)


### JavaScript Array shift() method
The JavaScript array **shift()** method removes the first element of the given array and returns that element. This method changes the length of the original array.

#### _**Syntax**_
The **shift()** method is represented by the following syntax:

**array.shift();**

![The San Juan Mountains are beautiful!](/img/shift.png)


### JavaScript Array reverse() method
The JavaScript array **reverse()** method changes the sequence of elements of the given array and returns the reverse sequence. In other words, the arrays last element becomes first and the first element becomes the last. This method also made the changes in the original array.

#### _**Syntax**_
The **reverse()** method is represented by the following syntax:

**array.reverse();**

![The San Juan Mountains are beautiful!](/img/reverse.png)


### JavaScript Array concat() method
The JavaScript array **concat()** method combines two or more arrays and returns a new string. This method doesn't make any change in the original array.

#### _**Syntax**_
The **concat()** method is represented by the following syntax:

**array.concat(arr1,arr2...arrn);**

_**arr1,arr2,....,arrn**_ - It represent the arrays to be combined.

![The San Juan Mountains are beautiful!](/img/concat.png)


### JavaScript Array indexOf() method
The JavaScript array **indexOf()** method is used to search the position of a particular element in a given array. This method is case-sensitive.

The index position of first element in an array is always start with zero. If an element is not present in an array, it returns -1.

#### _**Syntax**_
The **indexOf()** method is represented by the following syntax:

**array.indexOf(element,index);**

_**element**_ - It represent the element to be searched.

![The San Juan Mountains are beautiful!](/img/indexOf.png)

### JavaScript Array includes() method
The JavaScript array **includes()** method checks whether the given array contains the specified element. It returns true if an array contains the element, otherwise false.

#### _**Syntax**_
The **includes()** method is represented by the following syntax:

**array.includes(element,start);**

_**element**_ - The value to be searched.

_**start**_ - It is optional. It represents the index from where the method starts search.

![The San Juan Mountains are beautiful!](/img/includes.png)



### JavaScript Array splice() method
The JavaScript array **splice()** method is used to add/remove the elements to/from the existing array. It returns the removed elements from an array. The splice() method also modifies the original array.

#### _**Syntax**_
The **splice()** method is represented by the following syntax:

**array.splice(start,delete,element1,element2,..,elementn);**

_**start**_ - It represents the index from where the method start to extract the elements.

_**delete**_ - It is optional. It represents the number of elements to be removed.

_**element1,element2,...,elementn**_ - It is optional. It represent the elements to be inserted.



![The San Juan Mountains are beautiful!](/img/splice.png)


### JavaScript Array slice() method
The JavaScript array **slice()** method extracts the part of the given array and returns it. This method doesn't change the original array.

#### _**Syntax**_
The **slice()** method is represented by the following syntax:

**array.slice(start,end);**

_**start**_ - It is optional. It represents the index from where the method starts to extract the elements.

_**end**_ - It is optional. It represents the index at where the method stops extracting elements.


![The San Juan Mountains are beautiful!](/img/slice.png)