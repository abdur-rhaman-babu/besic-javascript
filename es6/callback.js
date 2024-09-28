function greetings(callback, name){
    callback(name)
}

function goodNight(name){
    console.log('good night', name )
}

function goodEvening(name){
    console.log('good evening', name)
}

greetings(goodNight, 'salman')
greetings(goodEvening, 'Mushfique')