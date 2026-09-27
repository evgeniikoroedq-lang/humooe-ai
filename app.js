document.addEventListener("DOMContentLoaded", () => {


const startButton = document.querySelector(".start");

const welcome = document.querySelector(".welcome");

const chat = document.querySelector(".chat");

const sendButton = document.querySelector(".input-box button");

const input = document.querySelector(".input-box input");

const messages = document.querySelector(".messages");



// старт чата

if(startButton){

startButton.addEventListener("click",()=>{

welcome.style.display="none";

chat.classList.remove("hidden");

});

}



// отправка сообщения

if(sendButton){

sendButton.addEventListener("click",()=>{


let text=input.value.trim();


if(!text) return;


addMessage(text,"user");


input.value="";


setTimeout(()=>{


addMessage(

"🤖 Humooe AI подключается...",

"ai"

);


},700);



});

}



// Enter отправка

if(input){

input.addEventListener("keydown",(e)=>{


if(e.key==="Enter"){

sendButton.click();

}


});

}



// сообщения

function addMessage(text,type){


let div=document.createElement("div");


div.className="message "+type;


div.innerHTML=text;



if(type==="ai"){


let btn=document.createElement("button");


btn.className="copy";


btn.innerHTML="📋 Копировать";


btn.onclick=()=>{


navigator.clipboard.writeText(
div.innerText
);


btn.innerHTML="✅ Готово";


};



div.appendChild(btn);


}



messages.appendChild(div);


messages.scrollTop =
messages.scrollHeight;


}



});// Humooe AI v8
// Интерфейсная логика


const startButton = document.querySelector(".start");

const welcome = document.querySelector(".welcome");

const chat = document.querySelector(".chat");

const sendButton = document.querySelector(".input-box button");

const input = document.querySelector(".input-box input");

const messages = document.querySelector(".messages");


// открыть чат

if(startButton){

startButton.onclick = () => {

welcome.classList.add("hidden");

chat.classList.remove("hidden");

};

}




// отправка сообщения


if(sendButton){

sendButton.onclick = () => {


let text = input.value.trim();


if(!text) return;



addMessage(text,"user");


input.value="";



// имитация ответа AI


setTimeout(()=>{


addMessage(

"🤖 Я получил твой запрос.<br><br>Скоро здесь будет настоящий Humooe AI.",

"ai"

);


},800);



};


}




// добавить сообщение


function addMessage(text,type){


let div=document.createElement("div");


div.className="message "+type;


div.innerHTML=text;



if(type==="ai"){


let copy=document.createElement("button");


copy.className="copy";

copy.innerHTML="📋 Копировать";


copy.onclick=()=>{


navigator.clipboard.writeText(
div.innerText
);


copy.innerHTML="✅ Скопировано";


setTimeout(()=>{

copy.innerHTML="📋 Копировать";

},1500);



};


div.appendChild(copy);


}



messages.appendChild(div);


messages.scrollTop =
messages.scrollHeight;


}





// меню


const menuButtons =
document.querySelectorAll(".menu");


menuButtons.forEach(button=>{


button.onclick=()=>{


menuButtons.forEach(b=>{

b.classList.remove("active");

});


button.classList.add("active");


};


});
