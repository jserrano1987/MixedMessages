let jugador = ['Seba','Gaby','Stupa','Galán','Lebrón','Paquito']
let jugada = ['sacó la bola por 3',
              'sacó la bola por 4',
              'falló estrpetisamente',
              'mandó la bola directamente a la pared',
              'hizo una dejada preciosa',
              'se tropezó y se comió la red']
let reaccionPublico = ['La gente aplaudió el esfuerzo del jugador',
                        'La gente aplaudió entusiasmada',
                        'El público empezó a gritar de la emoción',
                        'Las gradas recriminaron al jugador su gesto, silbándole']

let componerJugada = () =>{
    const randJugador=jugador[Math.floor(Math.random()*jugador.length)];
    const randJugada=jugada[Math.floor(Math.random()*jugada.length)];
    const randReaccionPublico=reaccionPublico[Math.floor(Math.random()*reaccionPublico.length)];
    const randFrase=`${randJugador} ${randJugada}. ${randReaccionPublico}.`
    return randFrase;
}

let retransmiteWPT = (jugadaComentada) =>{
    console.log('Buenos días, bienvenidos a todos a la retransmisión oficial de World Padel Tour');
    console.log('Mi nombre es Lalo Alzueta y hoy...');
    console.log(componerJugada());
}


retransmiteWPT();
//Hola Cris
