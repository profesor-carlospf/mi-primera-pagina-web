var posicion = prompt('¿En qué posición ha quedado?');

if (posicion == 1) {
    alert('¡Enhorabuena!, has ganado la medalla de oro. ');
    console.log('¡Enhorabuena!, has ganado la medalla de oro. ');    
} else if (posicion == 2) {
    alert('¡Enhorabuena!, has ganado la medalla de plata. ');    
    console.log('¡Enhorabuena!, has ganado la medalla de plata. ');    
} else if (posicion == 3) {
    alert('¡Enhorabuena!, has ganado la medalla de bronce. ');    
    console.log('¡Enhorabuena!, has ganado la medalla de bronce. ');    
} else if (posicion >= 4 && posicion <= 10) {
    alert('¡Enhorabuena!, has ganado un diploma olímpico. ');    
    console.log('¡Enhorabuena!, has ganado un diploma olímpico. ');    
} else {
    alert('Gracias por participar');
    console.log('Gracias por participar');
}