//Завдання 1

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j + 1]){
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    console.log(arr)
}

const array = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]
bubbleSort(array)

//Завдавння 2 

function myFunction(){
    let arr1 = [1, 3, 5, 1]
    let act = 0
    for (let i = 0; i < arr1. length; i++){
        for (let j = 0; j < arr1.length; i++){
            acr--
            if (arr1[j] < arr1[j + 1]){
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp

            }
        }
    }
    console.log(arr1)
}

myFunction()



// Завдання 3
function hoisting() {
    console.log("hosting - механізм за допомогою якого  певні об'єкти в js виходять при компіляції вище своєї області видимості, іде перед компіляцією. Також, прибирає function  , коли він знаходиться нижче деколарації та перекидає його наверх");
}
hoisting()


// Завдання 4
function scope() {
    console.log("scope = область видимості визначає, де змінні доступні для використання, є такі два основні типи: глобальна область видимості ( змінні доступні в усьому коді) і локальна облаасть видимості (змінні доступні лише в межах функції або блоку  , де вони були оголошені).");
}
scope()


// Завдання 5
function exVar() {
    console.log(" var  поганий тим, що він доступний раніше , ніж він має бути та в консолі виводить undefined , може викликати помилки і плутанину. До того ж, hosting  погано працює із var");
}
exVar()