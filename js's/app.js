function botao1() {
    let input = document.getElementById('entrada');
    let textodoinput = input.value;
    let titulo2 = document.getElementsByClassName('conteudo__saida__texto__titulo')[0];
    let textosaida = document.getElementsByClassName('conteudo__saida__texto')[0];
    let imagemsaida = document.getElementsByClassName('conteudo__saida__imagem')[0];
    let espacosaida = document.getElementsByClassName('conteudo__saida')[0];
    let botaosaida = document.getElementById('botaocopiar');

    const regrasdecriptografia = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat', 
    }

    let frasefinal = ''

    for(let i = 0; i < textodoinput.length; i++){
        const leitura = textodoinput[i]

        if(regrasdecriptografia[leitura]){
            frasefinal += regrasdecriptografia[leitura]
        }else{
            frasefinal += leitura
        }

    }

    if(/[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜáéíóúàèìòùâêîôûãõäëïöü]/.test(frasefinal)){ 
        console.log('true')
        espacosaida.style.display = 'flex';
        espacosaida.style.justifyContent = 'flex-start';
        titulo2.innerText = '';
        textosaida.style.fontSize = '24px';
        textosaida.innerText = 'Erro ao criptografar, tente usar apenas letras minúsculas ou escrever sem usar acentos.';
        imagemsaida.remove();
        botaosaida.style.display = 'block'
    }else{
        espacosaida.style.display = 'flex';
        espacosaida.style.justifyContent = 'flex-start';
        titulo2.innerText = '';
        textosaida.style.fontSize = '24px';
        textosaida.innerText = frasefinal;
        imagemsaida.remove();
        botaosaida.style.display = 'block'
    } 

}

function copiandotexto() {
    let textosaida = document.getElementsByClassName('conteudo__saida__texto')[0];
    navigator.clipboard.writeText(textosaida.innerText)
    console.log(1)
}

function botao2(){
    let input = document.getElementById('entrada');
    let textodoinput = input.value;
    let titulo2 = document.getElementsByClassName('conteudo__saida__texto__titulo')[0];
    let textosaida = document.getElementsByClassName('conteudo__saida__texto')[0];
    let imagemsaida = document.getElementsByClassName('conteudo__saida__imagem')[0];
    let espacosaida = document.getElementsByClassName('conteudo__saida')[0];
    let botaosaida = document.getElementById('botaocopiar');

    const regrasdecriptografia = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u', 
    }

    const regex = new RegExp(Object.keys(regrasdecriptografia).join('|'), 'g');

    let frasefinal = textodoinput.replace(regex, match => regrasdecriptografia[match]);


    console.log(frasefinal)
    
    if(/[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜáéíóúàèìòùâêîôûãõäëïöü]/.test(frasefinal)){ 
        console.log('true')
        espacosaida.style.display = 'flex';
        espacosaida.style.justifyContent = 'flex-start';
        titulo2.innerText = '';
        textosaida.style.fontSize = '24px';
        textosaida.innerText = 'Erro ao criptografar, tente usar apenas letras minúsculas ou escrever sem usar acentos.';
        imagemsaida.remove();
        botaosaida.style.display = 'block'
        textodoinput.reset()
    }else{
        espacosaida.style.display = 'flex';
        espacosaida.style.justifyContent = 'flex-start';
        titulo2.innerText = '';
        textosaida.style.fontSize = '24px';
        textosaida.innerText = frasefinal;
        imagemsaida.remove();
        botaosaida.style.display = 'block'
    }

}
