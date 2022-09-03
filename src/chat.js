const token = "N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=";
const url = "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages"; 
const url_post = "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/append";


async function show_message(url, data){
   const my_respons= await fetch(url,{
      method: `POST`,
      body : JSON.stringify(data), 
      headers: {
         Authorization:`Bearer ${token}`
         
      },
   })
   /*.then(my_respons => {    /* IF statement checks server response: .catch() does not do this! 
           if (my_respons.ok) { console.log("HTTP request successful") }
           else { console.log("HTTP request unsuccessful") }
           return my_respons;
         })*/
   .then((my_respons) => my_respons.json())
   .then((json) => console.log(json))
   .catch(error => console.log(error)) // error handling
   
}

const post_data = JSON.stringify({
   limit: 30
})
//function to send message
const resp =  show_message(url, post_data)
const send_showMess =resp['messages']; 
incommingMess(send_showMess);

function incommingMess(messages){
   for(let m of messages.reverse()){
      var par = document.createElement("p");
      var user = m['user']
      
      if(user === 'Bogdana'){
         par.classList.add("message-outgoing")
         
      }
      else 
      par.classList.add("message-incomming")
      
      var text = document.createTextNode(user + ": " + m.message)
      par.append(text);
      var my_console = document.getElementById("messageList");
      my_console.append(par);
   }
}




/*async function send_message(){
   await fetch(url_post, {
    method: "POST", // or "PUT" with the url changed to, e.g "https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages/append";
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Bogdana"}
    )
});
}
*/
//message to send messages
async function sendMessage(){
   let messToSend = document.getElementById("message").value;
   const post_body = JSON.stringify({ 
     user: 'Bogdana', 
     message: messToSend

   })
   const result =  show_message(url, post_data)
 
   if (result['success']) {
     console.log('Sent');
   }
   else {
     console.log("Fel");
   }
   window.location.reload();
 }
 















/*
var my_chat_Request = new XMLHttpRequest();
my_chat_Request.open("GET", chat_connection);
my_chat_Request.setRequestHeader("Accept", "application/json");
my_chat_Request.setRequestHeader("Authorization", "Bearer{N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=}");

my_chat_Request.onreadystatechange = function () {
    if (my_chat_Request.readyState === 4) {
       console.log(my_chat_Request.status);
       console.log(my_chat_Request.responseText);
    }};

    my_chat_Request.open('GET', '/data.json', true);
    my_chat_Request.send();
    
 */