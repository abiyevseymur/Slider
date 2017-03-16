
var n = 0;
var left = document.getElementsByClassName('head')
document.getElementsByClassName('button')[1].addEventListener('click', function (event) {
    if (n == (document.getElementsByClassName('pic').length - 4) * 320) {
        n=0;
        left[0].style.right = n + "px"
    }
    else {
        n = n + 320;
        left[0].style.right = n + "px";
    }
})

document.getElementsByClassName('button')[0].addEventListener('click', function () {
    if (n > 0) {
        n = n - 320;
        left[0].style.right = n + "px"
    }
})


