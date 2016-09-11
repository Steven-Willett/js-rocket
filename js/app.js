var car = {
    make: 'VW',
    model: 'Polo',
    colour: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],
    tunrOn: function() {
        this.isTurnedOn = true;
    },
    fly: function() {
        alert('fly');
    },
    switchCar: function(isOn) {
        console.log('turn car ' + isOn);
        if(isOn == true) {
          this.isTurnedOn = true;  
        } else {
            this.isTurnedOn = false;
        };
    }
};


var doCoolStuff = function() {
    document.getElementById('cool').classNAme = 'cool red';
} 