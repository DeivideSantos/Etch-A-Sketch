const quadrado = document.querySelector('.quadrado')
const div = document.createElement('div')
const div2 = document.createElement('div')
const reiniciar = document.querySelector('.resetar')

//div.classList.add('cubo')
//quadrado.appendChild(div)


function gradeHorizontal() {
const grade = 437
for (i = 0; i < grade; i++) {
    if (i < grade) { 
const div = document.createElement('div');
div.classList.add('cubo')
quadrado.appendChild(div)

div.addEventListener('mousedown', function(e) {
    div.style.background = ('black');

reiniciar.addEventListener('click', function(e){
    div.style.background = ('white');
})

div.addEventListener('dblclick', function(e){
    div.style.background = ('white')
})
  })


}}


}
gradeHorizontal()

function reset() {
    reiniciar.addEventListener('click', function(e){
        div.style.background = ('white')
    })
}
