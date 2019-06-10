
//-------------------------------------------
// Создайте пустой массив letters
// Создайте строку из нескольких слов, например "Backend As A Service"
// Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова
// Выведите результат в консоль
// Объедините все элементы массива letters в одну строку и выведите ее в консоль
//-------------------------------------------


var 
myString = "Backend As A Service",
mySeparator = " ",
myConvertSrting = ""

function arrayFromString(myStr, separ = " "){
	var 
	i = 0, 
	letters = [],
	tempArray = myStr.split(separ),
	returnString = "";
	while (i <= tempArray.length - 1){
		letters.push(tempArray[i].substr(0,1))	
		i++
	}
	console.dir(letters)
	
	i = 0
	while (i <= letters.length - 1){
		returnString = returnString + letters[i];
		i++
	}
	console.log(returnString)
	return returnString
}

myConvertSrting = arrayFromString(myString)

//-------------------------------------------
// Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:
// если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
// в противном случае возвращает строку "Неверный тип данных"
// Вызовите функцию

function getMyDateTime(myInput){
	var tempDate = new Date
	if (isNaN(myInput)) {return "Неверный тип данных"}  
	return (String(tempDate.getDate()).length == 1 ? "0"+ tempDate.getDate() : tempDate.getDate()) +
	"."+ (String(tempDate.getMonth()).length == 1 ? "0"+ tempDate.getMonth() : tempDate.getMonth()) +
	"."+tempDate.getFullYear()+", "+tempDate.getHours()+":"+tempDate.getMinutes()+":"+tempDate.getSeconds()
}
