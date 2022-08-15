var chitiet = document.querySelector('.sanpham-chitiet');
var btnIcon = chitiet.querySelector('span');
var divNoidung = document.querySelector('.sanpham-noidung');
var isShow = false;

chitiet.addEventListener('click', function() {

    if (isShow == false) {
        btnIcon.innerHTML = '<i class="fa-solid fa-minus">';
        divNoidung.style.display = 'block' ;
        isShow = !isShow;
    } else {
        btnIcon.innerHTML = '<i class="fa-solid fa-plus">';
        divNoidung.style.display = 'none' ;
        isShow = !isShow;
    }
})

var chitiet1 = document.querySelector('.sanpham-them');
var btnIcon1 = chitiet1.querySelector('span');
var divNoidung1 = document.querySelector('.sanpham-noidung2');
var isShow1 = false;

chitiet1.addEventListener('click', function() {

    if (isShow1 == false) {
        btnIcon1.innerHTML = '<i class="fa-solid fa-minus">';
        divNoidung1.style.display = 'block' ;
        isShow1 = !isShow1;
    } else {
        btnIcon1.innerHTML = '<i class="fa-solid fa-plus">';
        divNoidung1.style.display = 'none' ;
        isShow1 = !isShow1;
    }
})