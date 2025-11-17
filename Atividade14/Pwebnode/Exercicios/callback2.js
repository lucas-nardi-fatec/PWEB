function exibeMensagemNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}

exibeMensagemNaOrdem('Essa é a primeira mensagem na ordem', function() {console.log('Essa é a segunda mensagem na ordem')});