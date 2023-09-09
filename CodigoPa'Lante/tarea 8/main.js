// function cuentaRegresiva(num=document.getElementById("num").value) {
//     for(let id = num ; id > -1; id--){
//       console.log(id);
//             if(id == 0){
//                 console.log("¡Despegamos!");
//             }
//     }
// }

function cuentaRegresiva(num=document.getElementById("num").value) {
    for(let id = num ; id > -1; id--){
      document.write(id);
      document.write("\n\r");
            if(id == 0){
                document.write("¡Despegamos!");
            }
    }
}