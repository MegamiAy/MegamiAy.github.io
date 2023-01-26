function changesize() {
    if (window.innerWidth >= 768) {
        iten.style.display = 'block'
    } else {
        iten.style.display = 'none'
    }
}

function clickmenu() {
    if (iten.style.display == 'block'){
        iten.style.display = 'none'
} else { 
    iten.style.display = 'block'
}
}