// Literals

// const tv ={
//     brand: 'LG',
//     size: '49"',
//     color: 'black'
// };

// const dog = {
//     sex: 'male',
//     age: 4,
//     breed: 'pomeranian',
//     nickname: 'Финик'
// }




// Literals expand

// const tv ={
//         brand: 'LG',
//         size: '49"',
//         color: 'black'
//     };
// tv[prompt('Add key name')] = prompt('Add value name');
// tv[prompt('Add key name')] = prompt('Add value name');
// console.log(tv);



// Literals copy

// const tv ={
//             brand: 'LG',
//             size: '49"',
//             color: 'black'
//         };
// const obj = {
//     ...tv,
//         };
// obj[prompt('Add key name')] = prompt('Add value name');
// // obj.country = prompt('Add country name');
// console.log(obj);



// HTML tree


// const body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please :']
//                 },
//                 {
//                     tagName: 'br'
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     type: 'text',
//                     id: 'surname'
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName:'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ]
// }
// console.log(body.children[1].children[1].children[0]);
// console.log(body.children[0].children[3].id);




// Parent


// const body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please :']
//                 },
//                 {
//                     tagName: 'br'
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     type: 'text',
//                     id: 'surname'
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName:'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ]
// }
// console.log(body.children[0].parent = body);
// console.log(body.children[0].children[0].parent = body.children[0]);
// console.log(body.children[0].children[1].parent = body.children[0]);
// console.log(body.children[0].children[2].parent = body.children[0]);
// console.log(body.children[0].children[3].parent = body.children[0]);
// console.log(body.children[1].parent = body);
// console.log(body.children[1].children[0].parent = body.children[1]);
// console.log(body.children[1].children[1].parent = body.children[1]);




// Change OK

// const body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please :']
//                 },
//                 {
//                     tagName: 'br'
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     type: 'text',
//                     id: 'surname'
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName:'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ]
// }
// console.log(body.children[1].children[0].attrs.id);
// body.children[1].children[0].attrs.id = prompt('Add new id')
// console.log(body.children[1].children[0].attrs.id);




// Destructure

// const body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please :']
//                 },
//                 {
//                     tagName: 'br'
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     type: 'text',
//                     id: 'surname'
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName:'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ]
// }
// const{tagName:span} = body.children[0].children[0];
// const{tagName:btn} = body.children[1].children[1];
// const{id} = body.children[0].children[3];
// console.log(span,',', btn, ',', id);





// Destruct array

// let arr = [1,2,3,4,5, "a", "b", "c"];
// const[odd1,even1 ,odd2,even2 ,odd3, ...text] = arr;

// console.log(odd1,even1 ,odd2,even2 ,odd3, text);




// Destruct string

// let arr = [1, "abc"];

// const[number, [s1, s2, s3]] = arr;
// console.log(number, s1, s2, s3);




// Destruct 2

// let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]
//         }
// const{children: [{name:name1}, {name:name2}]} = obj;
// console.log(name1, name2);




// Destruct 3

// let arr = [1,2,3,4, 5,6,7,10];

// const[a, b, ...other] = arr;
// const length = other.length;
// console.log(a, b ,length);




// Copy delete

// Я НЕ ПОНИМАЮ ЧТО ОТ МЕНЯ ТРЕБУЕТСЯ

// Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням деструктурiзацiї та rest.