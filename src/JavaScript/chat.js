var chat_connection = 'https://ha-slutuppgift-chat-do.westling.workers.dev/api/messages';
var my_chat_Request = new XMLHttpRequest();
my_chat_Request.open("GET", chat_connection);
my_chat_Request.setRequestHeader("Accept", "application/json");
my_chat_Request.setRequestHeader("Authorization", "Bearer{N31fRWVMZCtwU0JeZnBQdVBjTmlOImRzcTAxfl08cz1xR2lyWGFJfmo5JC5RNSc=}");

my_chat_Request.onreadystatechange = function () {
    if (my_chat_Request.readyState === 4) {
       console.log(my_chat_Request.status);
       console.log(my_chat_Request.responseText);
    }};

    my_chat_Request.send();
    alert(my_chat_Request.onreadystatechange());
 