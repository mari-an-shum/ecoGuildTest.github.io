const searchForm = document.querySelector(".header-search__form-input"),
searchEnable = document.querySelector(".header-search"),
buttonShow = document.getElementById("guys-button__show"),
buttonHide = document.getElementById("guys-button__hide"),
guysImgs = document.querySelector(".guys-imgs");

searchEnable.addEventListener('click', function(){
    searchForm.classList.add('show')
});

buttonShow.addEventListener('click', function(){
    guysImgs.classList.add('list-open');
    buttonShow.classList.add('invisible');
    buttonHide.classList.remove('invisible');
})

buttonHide.addEventListener('click', function(){
    guysImgs.classList.remove('list-open');
    buttonHide.classList.add('invisible');
    buttonShow.classList.remove('invisible');
})