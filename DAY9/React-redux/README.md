## First we will install the redux from the official website

    Isme hamri javascript application ka all states Redux store m store hoga or redux store m hamri states ko application direct update nhi kr skti ,, to react ki application m kuch actions hote hai wo actions emit hote hai wo actions jate hai Reducer ke pass or wo Reducer states ko update karta hai (Redux_store) ki or fir wo redux store updated states ko React Application ko return kr deta hui. 

    REACT REDUX SETUP :- 

          -------------- ->JavaScript/React Application-----------------------------------
          |               /                                                               |
          |             /                                                                 |
          |          /   ❎ (Direct changes not possible)                                 |   
      Redux Store  /                                                                    Action
          ^                                                                               |
          |                                                                               |
          ----------------------------Reducer<---------------------------------------------    

======================================================

# Action in Redux  :- 
1. Actions are JavaScript object that contains information. 
2. Actions are the only source of information for the store, It only tells us what has happened. 
3. Actions have a type property and it should be defined in string constraint. 
4. It is compulsory to include the type property in the object. 
   
Syntax: 
const Actionn = | {
   type: 'buyBook'
}

======================================================

# Reducers in React 
1. Reducers decides how the state of application changes depending upon the action sent to the store. 
2. Reducers are the function that accepts state and action as parameter and returns the next state of the application. 
   
(previousState, action) => newState


======================================================


# Redux Store 
1. Entire Application contains Single Store. 
2. It is responsible for holding application state. 
3. getState() method gives access to state it holds. 
4. dispatch(action) method allow state to be updated. 
5. It has subscribe(listener) method as well by which we can register listeners. 
   
   This method accept function (listener) as a parameter which execute anytime when the state in redux store changes. 

=============================================================

# React Redux + Hooks 
React Redux offers set of hooks to subscribe to redux store and dispatch actions.

useSelector Hook- iski help se ham hamre state ko easily access kr pa rhe the.
-------------------
useSelector is a hook react-redux library provides to get hold of any state that is maintained in the redux store.

Syntax :- 
const xyz = meselector(selector: Function, equalityên?: Function) 
  Selector functn accepts the redux state as its argument and return a value

=============================================================

