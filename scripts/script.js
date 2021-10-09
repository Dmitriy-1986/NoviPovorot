//строки, которые захватывают ссылки на элементы <header> и <section> и сохраняют их в переменных
const header = document.querySelector('header');

//данные JSON 
var requestURL = 'https://dmitriy-1986.github.io/novipovorot-landing/json/tours.json';

//Получение JSON
var request = new XMLHttpRequest();

//открыть новый запрос, используя метод open()
request.open('GET', requestURL);

//сервер будет возвращать JSON и должно быть преобразовано за кулисами в объект JavaScript
request.responseType = 'json';

//отправляем запрос методом send()
request.send();

//ожидание ответа на возврат с сервера, а затем работы с ним.
request.onload = function() {

    //сохраняем ответ на наш запрос (доступный в свойстве response) в переменной link
    //эта переменная теперь будет содержать объект JavaScript, основанный на JSON
    var link = request.response;

    //передаём этот объект вызовам функций
    populateHeader(link);
}

//извлекли данные JSON и превратили его в объект JavaScript
//jsonObj этот объект JavaScript возник из JSON
function populateHeader(jsonObj) {

    //сначала создаём элемент <h1>  с createElement()
   var myH1 = document.createElement('h1');

   //устанавливаем его textContent равным свойству squadName объекта
    myH1.textContent = jsonObj['tourTitle'];

    //а затем добавляем его в заголовок с помощью appendChild()
    header.appendChild(myH1); 
}

