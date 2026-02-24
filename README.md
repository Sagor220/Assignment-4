1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans:
   when i catch an individual section for event or something for our criteria we can use getElementById... if we want to apply section of same class we can use getElementsByClassName and if we want to catch all setion of same class we use querySelectorAll and lastly if we can access the first section of the same classes element we can use querySelector...

2. How do you create and insert a new element into the DOM?
   ans:
   step1:select parent element
   step2:create child
   step3:add child's inner text or element
   step4:append that child to parent element.

3. What is Event Bubbling? And how does it work?
   ans:
   event bubbling is an event when it works, it work first in that event then it goes to parent and then goes to grandparent and then to document..
4. What is Event Delegation in JavaScript? Why is it useful?
   ans:
   event delegation is a process that can handle an event by an event on a parent element. we can catch child by using bubbling here.
5. What is the difference between preventDefault() and stopPropagation() methods?
   ans:
   preventDefault prevents the default browser behavior of an element. on the other hand stopPropagation prevent the event bubbling
