# List & Keys :-

## List:- 

#### 1. List in React are same as the list in javascript/HTML.
#### 2. we can use lists to show multiple items in structured manner.
#### 3. We can use lists for displaying menu and navigation bar etc.
#### 4. To traverse a list , we can use map method of an array.

    // Basic HTML/JS list
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>


    // React List // Without key
    const items = [1,2,3,4,5]
    const listItems = items.map((item)=>{<li>{item}</li>}) return <ul>{listItems}</ul>

============================================================================

    If we are not using key in list then it will throw an error in react.
    It will show in the browser 
    Warning  :- When we run this React list code , we will be given a warning that 'Each child in a list should have a  unique 'Key' prop.

    Without a key, if the list changes (add, delete, update), React cannot optimize and may re-render all items unnecessarily. That's why key is needed in real-world apps.

<br/><br/><br/>

## Key :- 

#### 1.  A 'Key' is  a special string attribute you need to include when creating lists of elements.
#### 2.  Keys help React identify which items have changed , added  or deleted .
#### 3. keys should be a String .
#### 4. If you choose not to assign an explicit key to list items then React will default to using indexes as keys. You will get a warning in this case. 
#### 5. A "key" is the only thing React uses to identify DOM elements.
#### 6. Using indexes of items as key may create some issues and return wrong data.
#### 7. It is not recommended to use indexes for keys if the order of items may change.

## why keys:- 
    For example if we add new item at the @ending@ of our array , it will work well , if we will add the item in the ending without the key that time no problem in the list without rendering it can work.

     <ul>                    <ul>                    React will match the first two elements of 
     <li>item 1</li>         <li>item 1</li>         both the trees and it will 
     <li>item 2</li>         <li>item 2</li> 
     </ul>                   <li>item 2</li> 
                             </ul>



### -> If we are adding the element in the begining :->if we will add the item in the begining without the key that time problem will come in the list means list will re-render entire list will re render overcome this issue we are going for keys concept , it is not an efficient way so you need to use the keys with the list. Key ko react use kr rha hai jo ki list ko efficient way m render kara sake or ham key ko as a props pass nhi kara skte hai.

#### Before using the key in the List

    <ul>                   <ul>             React will mutate every child in this case
    <li>item 1</li>      <li>item 3</li>               
    <li>item 2</li>      <li>item 1</li> 
    </ul>                <li>item 2</li> 
                         </ul> 
                                          
#### After using the key in the List
    <ul>               <ul>                 React will mutate every child in this case
    <li>item 1</li>      <li>item 3</li>               
    <li>item 2</li>      <li>item 1</li> 
    </ul>                <li>item 2</li> 
                       </ul> 


<br/><br/><br/><br/>



# If we are adding the element and key is index like start from 0,1,2,3,4,5

##### ✅ key={index}
##### ✅ Just number (like 0, 1, 2)
##### ✅ If items are added/removed at beginning, indexes shift, causing wrong re-rendering.
##### ✅ Bad when list changes from start
##### ✅ No warnings usually, but React advises not to use index if list changes dynamically.

    Why is index key sometimes bad?

    Index | Value
    0	  |   1
    1     |   2
    2	  |   3

    Now if you add new item at beginning,
    New list:

    Index | Value
    0     | 7
    1     | 1
    2     | 2
    3     | 3

    Now indexes shifted!
    React gets confused, thinks 1 is new instead of 7.
    ❌ Wrong re-render!

<br/><br/><br/>



# If we are adding the element and key is unique string key like item-1 , item-2 etc.

✅ key={item-${item}}
✅ A string (like item-1, item-2)
✅ No issue. React knows exactly which item is which
✅ Good. React optimizes updates.
✅ No warnings ✅ and recommended way.


## Scenario with Unique String Key Initial items list:

    Index | Value | Key
    0     | 1     | item-1
    1     | 2     | item-2
    2     | 3     | item-3

    When you add a new item 7 at beginning, new list becomes:

    Index | Value | Key
    0     | 7     | item-7
    1     | 1     | item-1
    2     | 2     | item-2
    3     | 3     | item-3

    ✅ Now each item has a unique key like:

    item-7
    item-1
    item-2   
    item-3

<br/><br/><br/>



# Why React is happy now?
    React can easily identify which item is which.

    ✅Even though the index shifted,

    ✅Keys didn't shift because they are based on item value (item-1,  item-2, etc.)

    ✅React checks keys and sees:

    ✅item-1 is still item-1 (even though index changed).

    ✅item-2 is still item-2.

    ✅React only renders the NEW item (item-7) 

    ✅No re-rendering of old items. 

    ✅UI becomes fast and stable. 
                          

                        