// // arithmatic operators Learning

// var result = 10 + 20;
// console.log(result);

// result = result - 5;
// console.log(result);

// result = result * 2;
// console.log(result);

// result = result / 5;
// console.log(result);

// result = result % 3;
// console.log(result);

// ++result;
// console.log(result);

// --result;
// console.log(result);

// result++;
// console.log(result);

// result--;
// console.log(result);


// var otherVar = ++result + 5;
// console.log(otherVar);

// var lang = "JavaScript";
// console.log("Hello, " + lang + " !");




// Relational Operaters
//     >,< , >= , <= ,== ,!= , === ,!==

// conditional operaters
// syntax
// variableName = booleanExpress ? trueValue : falseValue;

// 02/02/2021 when i start my JavaScript learning


// let person = {
//     name:'sajin'
// };
// console.log(person.name
  
// );
// let age = 18;

// if (age==18){
//     console.log('age is 18');
// }else if (age<18){
//     console.log('age is less than 18');
// }
// else {
//     console.log('you are not allowed');
// }


// let arr = [20,25,'Sajin','Joe',{Name:'Sajin',age:20}]
// console.log(arr[4].age);


// let obj = {
//     name:'Joe',
//     age:24,
//     ismale:true,
//     Chest:[20,30,40,{name:'hai'}],
//     physical:{height:168 ,unit:'cm' }
// }
// console.log(obj.physical.unit);
// console.log(obj.Chest[3].name);


// function add (val1,val2) {
//     console.log(val1 + val2);
// }

// add(20,30)
// add(10,20)

// add with default value 


// function add (val1=20,val2=30) {
//     console.log(val1 + val2);
// }

// add(5,5)
// add(6,6)


// function sub (val1,val2){
//     console.log(val1-val2);
// }

// sub(10,5)

// function sayhai (name) {
//     console.log('Hai '+ name);

// }

// sayhai('Joe')

// let age = 16

// function bar (age){
//     if (age<18){
//         console.log("you are not allowed ");

//     }
//     else if (age==18){
//         console.log('you just got luck');
    // }
    
//     else {
//         console.log("you are allowed");
//     }
// }

// bar(age)

// old method of accesing DOM elements

// let h1 = document.getElementsByTagName('h1')
// console.log(h1);

// let h1 =document.getElementById('head')
// console.log(h1);
// let p =document.getElementsByClassName('para')
// console.log(p);


// let h1 =document.querySelectorAll('.para')
// console.log(h1);

// let h1 =document.querySelector('#head')
// console.log(h1);


// h1.style.color="red"
// h1.style.backgroundColor='blue'

// let p =document.querySelector('.para')

// p.style.color='#eeeeee'

// h1.addEventListener('mouseover',function (){
//     console.log('clicked');
//     h1.style.color="green"
// })

// p.addEventListener('click',function(){
//     console.log(p.classList);
//     p.classList.toggle("newClaass")
// })

let shop = {
    sunday:{
firstPerson:{
        things:['potato','tomato','apple','orange','dogfood','dairymilk'],
        rate:[10,14,60,40,100,20]
},
secondPerson:{
    things:['potato','tomato','apple','orange','dogfood','dairymilk'],
    rate:[10,14,60,40,100,20]
}
    }
}

console.log
   (shop.sunday.firstPerson.things[1],
    shop.sunday.firstPerson.rate[1],
    shop.sunday.secondPerson.things[4],
    shop.sunday.secondPerson.rate[4]);