var ele = document.querySelector('#typed')
var qualLink = document.querySelector('#qual_link')
var infoContainer = document.querySelector('.info_container')
var qualContainer = document.querySelector('.qualification_container')

var name = ele.textContent;

var start = "";

var end = "Ananth Kini"



var idx = 1;
var pointer = 0;

var unsucb = '';

unsucb = setInterval(() => {
    if( pointer == 11 || pointer == -1){
        idx = idx * -1; 
    }
    start = end.substring(0,pointer);
    console.log(start)
    ele.textContent = start;
    pointer += idx;
}, 200);

qualLink.addEventListener( 'click' , function() {
    infoContainer.style.display = 'none';
    qualContainer.style.display = 'block';
})

// console.log('a')
// console.log('b')
// setTimeout(function(){
//     console.log('c')
// },10)
// console.log('d')
// setTimeout(function(){
//     console.log('e')
// },10)
// console.log('f')