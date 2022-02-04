// var socket = io.connect('http://localhost:8080');
//         socket.on('message', function (data) {
//                 document.getElementById("output_window").value += "Message:     " + data.text + "\n";
//             });

document.getElementById("output_window").value = "";
document.getElementById("input_window").value = "";

function clear(){

    document.getElementById("output_window").value = "";
}

function send(){
    let text = document.getElementById("input_window").value;
            
            // socket.emit('my other event', { text: text }, function(data){
            //     //console.log(data);
            //     document.getElementById("output_window").value += "My_message:  " + data.text + "\n";
            // });

    //console.log(text)

    document.getElementById("input_window").value = "";
    document.getElementById("output_window").value += "My_message:  " + text + "\n"
}