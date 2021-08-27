//1

function t1_eventAttribute(){
    alert('Hello');
}

//2
function t2_eventAttribute(target) {
    target.innerHTML = "Button";
}

//3
function t3_eventAttributeActive(){
    let input = document.getElementById('t3_input');
    input.removeAttribute('disabled');

}
function t3_eventAttributeInactive() {
    let input = document.getElementById('t3_input');
    input.setAttribute('disabled', true);
}

//4
let mousePosition;
let offset = [0,0];
let div;
let isDown = false;
let output = document.getElementById('t4_output');

div = document.createElement("div");
div.style.position = "absolute";
div.style.left = "0px";
div.style.top = "0px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "blue";

document.body.appendChild(div);

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';

        output.innerHTML = `${div.style.left}:${div.style.top}`;

    }
}, true);

//5

function t5_oninput(target) {
    let inputValue = '';
    for (let char of target.value) {
        if (Number.isInteger(Number(char))) {
            inputValue += char;
        }
    }
    target.value = inputValue;
}
//6

let t6_div = document.getElementsByClassName('t6_div')[0];

t6_div.addEventListener('dblclick', function (e) {
    t6_div.style.backgroundImage = 'url("https://cdn-0.emojis.wiki/emoji-pics/google/open-file-folder-google.png")';
});

//7

let wrapper = document.getElementsByClassName('wrapper')[0];

for(let x = 0; x <= 300; x++){
    let createElement = document.createElement('div');
    createElement.textContent = x;
    createElement.addEventListener('mouseover', function (event) {
        createElement.style.borderRadius = '50%';
        createElement.style.transition = '1s'
    });
    wrapper.appendChild(createElement);
}