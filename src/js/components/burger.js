const hamb = document.querySelector('#hamb')


hamb.addEventListener('click', hambHandler)

function hambHandler(e){
    e.preventDefault()
    hamb.classList.toggle('active')
}
