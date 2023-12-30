const Adicionar= document.querySelector('form')
const atividade = document.querySelector('#atividade')
const nota = document.querySelector('#nota')
let cont = 1
let media = 0
let padrao = prompt("Digite a nota mínima: ")
Adicionar.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const aprovado = "<img style='width:32px' src='images/aprovado.png'> </img>"
    const reprovado = "<img style='width:32px' src='images/reprovado.png'> </img>"
    const condicao = nota.value >= padrao ? aprovado : reprovado
    const linha = `<tr> <td>${atividade.value}</td> <td>${nota.value}</td> <td>${condicao}</td> </tr>`

    media +=  parseFloat(nota.value)
    let mediaFinal = media/cont >= padrao ? `<td><span class='aprovado'>Aprovado</span></td>` : `<td><span class='reprovado'>Reprovado</span></td>`
    let linha_media = `<tr> <td>Média</td> <td>${parseFloat(media / cont).toFixed(2)}</td> ${mediaFinal}</tr>`
    
    document.querySelector('tbody').innerHTML += linha
    document.querySelector('tfoot').innerHTML = linha_media

    atividade.value = ''
    nota.value = ''

    cont += 1
})