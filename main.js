let user = prompt('Ingrese su usuario: ');
let password = prompt('Ingrese su contraseña: ');

validateUser(user, password);

function validateUser(user, password) {
    if (user !== password){
        alert('El usuario y contraseña no coinciden');
    } else {
        for (let i=0; i<user.length; i++ ) {
            if(isNaN(user[i])) {
                alert(user[i] +' no es un número. Solo puede ingresar números.');
                break;
            }
        }
    }
}

console.log('usuario: ' + user);
console.log('password: ' + password);

function tag(code, desc, name) {
    this.code = code;
    this.desc = desc;
    this.name = name;
}

function task(code, title, desc,tag,beginDate,endDate) {
    this.code = code;
    this.title = title;
    this.desc = desc;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.tag = tag;
}

const concert = new tag(1,'Evento de música o concierto','Concierto');
const trip = new tag(2,'Evento de viaje','Viaje');
const job = new tag(3,'Evento del trabajo','Trabajo');

let date = new Date();

//console.log(new Date().toLocaleDateString());

const tarea1 = new task(1,'Festival latino','Festival de música, pop, rock, urbano',1,date, addDaysToDate(date,2) );

console.log('tagConcert ' + JSON.stringify(concert));
console.log('tarea1 ' + JSON.stringify(tarea1));


function addDaysToDate(date, days) {
    var dt = new Date(date);
    dt.setDate(dt.getDate() + days);
    return dt;
}


//Posible función para la búsqueda de la etiqueta por tarea
/*
let searchTag = prompt('Ingrese la etiqueta a filtrar: ');
if (!(searchTag in concert)) {
    alert('La etiqueta no existe');//code
}*/