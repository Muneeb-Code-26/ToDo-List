
let arr = JSON.parse(localStorage.getItem('todos')) || [];  // becuz we dont need to declare our setItem for the LS thing we can just use getItem as to make it also [] the real thing its just like doing (2(1)+0) + (2(1)+0) = 4 Got it !!!
todoList();
function todoList(){
    const targetInput = document.querySelector('.js-1'); // this Enter your todo
    let fetchIn = targetInput.value; // the thing user typed
    const dueDate = document.querySelector('.js-3');
const fetchTheDueDate = dueDate.value;

    if(fetchIn !== ''){
     arr.push({task:fetchIn, date:fetchTheDueDate}); // ['the thing user typed'] it will add up to whenever he will type
    }
    localStorage.setItem('todos', JSON.stringify(arr));
     // const addToArr = arr.push(fetchIn); TEST IT!! 
    // console.log(arr);
    targetInput.value = '';
let store = '' ;

for(let i = 0; i < arr.length; i++){
    const checkValue =  arr[i];
    // console.log(checkValue);
    const  theHTML = `<p>Task: ${checkValue.task}  Date: ${checkValue.date} <button onclick="
        arr.splice(${i},1);
        todoList();
    ">Delete</button></p> `;
    //store = theHTML; paragraph element erased, atv here it exists! // solved it by making theHTml to store as i was doing 
     store += theHTML
    // store += store;
// console.log(store);
}
 const fetchTheTodo = document.querySelector('.js-2').innerHTML = store; // placed it outside as for long arrays of arr the page has to load many timse placing dom thing outside makes it run 1 time while if in a scope of loop ur computer and browser have to give their best to run it!!

}