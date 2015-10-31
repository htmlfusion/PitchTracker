var Myo = require('myo'),
    MyoListeners = {},
    myoData = {};
//Start talking with Myo Connect

MyoListeners.connect = Myo.connect('com.stolksdorf.myAwesomeApp');
//Myo.setLockingPolicy('none');
Myo.on('connected', function() {
   console.log('connected');
});

MyoListeners.on = Myo.on('fist', function(){
    console.log('Hello Myo!');
    this.vibrate();
    this.streamEMG(true);
});

Myo.on('fingers_spread', function() {
    this.streamEMG(false);
});

Myo.on('gyroscope', function(data){
    myoData.gyroscope = data;
});

Myo.on('orientation', function(data) {
    myoData.rotation = data;
});

Myo.on('accelerometer', function(data){
    myoData.accelerometer = data;
});

MyoListeners.emg = Myo.on('emg', function(data){
    myoData.emg = data;
    console.log(myoData);
});

Myo.on('locked', function(){
    console.log('you need to unlock myo :D')
});

Myo.on('unlocked', function(){
    console.log('myo unlocked')
});

module.exports = MyoListeners;