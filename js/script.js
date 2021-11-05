var cor = 'vermelho'
var espaco1 = ''
var espaco2 = ''
var espaco3 = ''
var espaco4 = ''
var espaco5 = ''
var espaco6 = ''
var espaco7 = ''
var espaco8 = ''
var espaco9 = ''

function marcarEspaco (id) {
    if (cor === 'vermelho') {
        document.getElementById(id).classList.add('marcar-vermelho')
        document.getElementById('vermelho').classList.remove('jogador-vez')
        document.getElementById('azul').classList.add('jogador-vez')
        cor = 'azul'
        return 'vermelho'
    } else if (cor === 'azul') {
        document.getElementById(id).classList.add('marcar-azul')
        document.getElementById('azul').classList.remove('jogador-vez')
        document.getElementById('vermelho').classList.add('jogador-vez')
        cor = 'vermelho'
        return 'azul'
    }
}
function fim() {
    espaco1 = 'fim'
    espaco2 = 'fim'
    espaco3 = 'fim'
    espaco4 = 'fim'
    espaco5 = 'fim'
    espaco6 = 'fim'
    espaco7 = 'fim'
    espaco8 = 'fim'
    espaco9 = 'fim'
}
function velha() {
    if (espaco1 !== '' &&
        espaco2 !== '' &&
        espaco3 !== '' &&
        espaco4 !== '' &&
        espaco5 !== '' &&
        espaco6 !== '' &&
        espaco7 !== '' &&
        espaco8 !== '' &&
        espaco9 !== '' &&
        espaco1 !== 'fim' ) {
            return true
    }
}
function statusJogo() {
    if ((espaco5 === espaco1 && espaco1 === espaco9 && espaco5 !== '') ||
        (espaco5 === espaco2 && espaco2 === espaco8 && espaco5 !== '') ||
        (espaco5 === espaco3 && espaco3 === espaco7 && espaco5 !== '') ||
        (espaco5 === espaco4 && espaco4 === espaco6 && espaco5 !== '')) 
    {
        document.getElementById('azul').classList.remove('jogador-vez')
        document.getElementById('vermelho').classList.remove('jogador-vez')
        document.getElementById(espaco5).classList.add('ganhou')
        document.querySelector(`p.${espaco5}`).innerHTML += ' <span>Ganhou</span>'
        fim()
    } else if ((espaco1 === espaco2 && espaco2 === espaco3 && espaco1 !== '') ||
               (espaco1 === espaco4 && espaco4 === espaco7 && espaco1 !== '')) 
    {
        document.getElementById('azul').classList.remove('jogador-vez')
        document.getElementById('vermelho').classList.remove('jogador-vez')
        document.getElementById(espaco1).classList.add('ganhou')
        document.querySelector(`p.${espaco1}`).innerHTML += ' <span>Ganhou</span>'
        fim()
    } else if ((espaco9 === espaco6 && espaco6 === espaco3 && espaco9 !== '') ||
               (espaco9 === espaco8 && espaco8 === espaco7 && espaco9 !== '')) 
    {
        document.getElementById('azul').classList.remove('jogador-vez')
        document.getElementById('vermelho').classList.remove('jogador-vez')
        document.getElementById(espaco9).classList.add('ganhou')
        document.querySelector(`p.${espaco9}`).innerHTML += ' <span>Ganhou</span>'
        fim()
    } else if (velha()) {
        document.getElementById('azul').classList.remove('jogador-vez')
        document.getElementById('vermelho').classList.remove('jogador-vez')
        document.querySelector('p.vermelho').innerHTML += ' <span>Empatou</span>'
        document.querySelector('p.azul').innerHTML += ' <span>Empatou</span>'
    }
}

document.getElementById('espaco-1').addEventListener('click', () => {
    let id = 'espaco-1'
    if (espaco1 === '') {
        espaco1 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-2').addEventListener('click', () => {
    let id = 'espaco-2'
    if (espaco2 === '') {
        espaco2 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-3').addEventListener('click', () => {
    let id = 'espaco-3'
    if (espaco3 === '') {
        espaco3 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-4').addEventListener('click', () => {
    let id = 'espaco-4'
    if (espaco4 === '') {
        espaco4 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-5').addEventListener('click', () => {
    let id = 'espaco-5'
    if (espaco5 === '') {
        espaco5 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-6').addEventListener('click', () => {
    let id = 'espaco-6'
    if (espaco6 === '') {
        espaco6 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-7').addEventListener('click', () => {
    let id = 'espaco-7'
    if (espaco7 === '') {
        espaco7 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-8').addEventListener('click', () => {
    let id = 'espaco-8'
    if (espaco8 === '') {
        espaco8 = marcarEspaco(id)
        statusJogo()
    }
})
document.getElementById('espaco-9').addEventListener('click', () => {
    let id = 'espaco-9'
    if (espaco9 === '') {
        espaco9 = marcarEspaco(id)
        statusJogo()
    }
})