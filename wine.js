
//이미지 슬라이드
var files = ["img/img29.jpg","img/img24.jpg","img/img08.jpg","img/img27.jpg"];
var imgs = new Array();
for(var i=0; i<files.length; i++){
    imgs[i] = new Image();
    imgs[i].src = files[i];
}
var next = 1;
function change(img){
    img.src = imgs[next].src;
    next++;
    next %= imgs.length;
}

//가격 계산
var sum=0;
function calc(cBox) {
    if(cBox.checked)
    sum += parseInt(cBox.value);
    else
    sum -= parseInt(cBox.value);
    document.getElementById("sumtext").value = sum;
}


//모드체인지(야간모드)
function modeChN(color){
    document.body.style.background=color;
    $('#text').css('color', 'white');
    $('#which').css('color', 'white');
}

function modeChD(color){
    document.body.style.background=color;
    $('#text').css('color', 'black');
    $('#which').css('color', 'black');
}

//알람
function mainAlert(){
    alert("이제부터 좋아해 보세요!");
}

//랜덤으로 페이지 열기
function load(){

    var loc = Math.random()*3;
    var location = Math.floor(loc)+1;

    switch(location){
        case 1:
            window.open('page1.html');
            break;
        case 2:
            window.open('page2.html');
            break;
        case 3:
            window.open('page3.html');
            break;
        default:
            window.open('page1.html');
    }
}


//마우스로 그림 그리기
var canvas, context;
function init() {
canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
context.lineWidth = 2; // 선 굵기 2
context.strokeStyle = "pink";
canvas.addEventListener("mousemove", function (e) { move(e) }, false);
canvas.addEventListener("mousedown", function (e) { down(e) }, false);
canvas.addEventListener("mouseup", function (e) { up(e) }, false);
canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}
var startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표
var dragging=false;
function draw(curX, curY) {
context.beginPath();
context.moveTo(startX, startY);
context.lineTo(curX, curY);
context.stroke();
}

function down(e) {
    startX = e.offsetX; startY = e.offsetY; dragging = true;
    }
    function up(e) { dragging = false; }
    function move(e) {
    if(!dragging) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
    }
    function out(e) { dragging = false; }


  
