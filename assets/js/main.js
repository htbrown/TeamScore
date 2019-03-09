var product = 'Socks';
var date = new Date();
var team1Count = 0;
var team2Count = 0;

var team1 = new Vue({
    el: '#team1',
    data: {
        number: team1Count
    }
});

var team2 = new Vue({
    el: '#team2',
    data: {
        number: team2Count
    }
})