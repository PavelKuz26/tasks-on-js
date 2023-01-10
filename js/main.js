// Числа фибоначи 

function fibonachi(count) {
    let fib = []
    for( let i = 0; i < count; i++){
        if(i == 0) fib[i] = 1
        else if(i == 1) fib[i] = 2
        else fib[i] = fib[i-2] + fib[i - 1] 
    }
    return fib
}
let f = fibonachi(10)
console.log(f)


// Факториал числа

function factorial(n) {
    let fact = 1
    if(n == 0) return fact
    for(let i = 1; i <= n; i++ ){
        fact *= i
    }
    return fact
}

let a = factorial(0)
console.log(a)

let b = factorial(1)
console.log(b)

let c = factorial(5)
console.log(c)

let d = factorial(8)
console.log(d)



// Вывод суммы и произведение чисел многозначного числа

let addAndMult = function(num) {
    num += ''
    let add = 0, mul = 1
    for( let i = 0; i < num.length; i++){
        add += +num[i]
        mul *= num[i]
    }
    return {
        'сумма': add,
        'произведение': mul
    }
}
console.log(addAndMult(795))



// Инвертировать многозначное число

function reverse(number) {
    number += ''
    let reverseNumber = ''
    for( i = number.length -1; i >= 0; i-- ) {
        reverseNumber += number[i]
    }
    return +reverseNumber
}
console.log(reverse(3468))




// Посчитать кол-во четных и нечетных чисел


function numbers(numbers) {
    numbers += ''
    let chet = 0 , nechet = 0
    for(let i = 0; i < numbers.length; i++ ){
        if( numbers[i] % 2 == 0 ) chet++
        else nechet++
    }
    return {
        'Четных': chet,
        'Нечетных': nechet 
    }
}
console.log(numbers(325169294))



// Угадать рандомдомное число

function randomNumber() {
    let randNum = Math.floor(Math.random() * 100)
    for( let counter = 1; counter <= 10 ; counter++) {
        let result =  +prompt(`Попытка № ${counter}, Введите число: ` )
        if(result == randNum) {
            return alert(`Вы угадали число! Поыток: ${counter}, Число: ${randNum}`)
        } else if (result < randNum) {
            alert(`Ваше число ${result}, меньше загаданного!`)
        } else if (result > randNum) {
            alert(`Ваше число ${result}, больше загаданного!`)
        } 
    }
    return alert(`Вы не угадали число! Число: ${randNum}`)
}
randomNumber()