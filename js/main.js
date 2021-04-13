var modal = document.querySelector('#modal');
const btnClosePopup = document.querySelector('#btn-close')

btnClosePopup.addEventListener('click', ()=>{
    modal.classList.remove('show-modal');
})


const footer = document.querySelector('#footer');


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

window.addEventListener("DOMContentLoaded", ()=>{
    var modal = document.querySelector('#modal'); 
    setTimeout(()=>{
        modal.classList.add('show-modal')
    },5000)
})




window.addEventListener('scroll',() =>{
    let footer = document.querySelector('#footer')
    var y = window.scrollY;
    if (y >= 1300) {
        modal.classList.add('show-modal')
    } else {
        modal.classList.remove('show-modal')
    }
})