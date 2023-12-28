const form = document.getElementById('form-contatos');

const limpar = document.getElementById('reset');

const contatos = [];

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

limpar.addEventListener('click', function() {
    if (contatos.length >= 1){
        window.location.reload();
    }
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputTelefone = document.getElementById('telefone').value;

    if (contatos.includes(inputTelefone)){
        alert(`Esse telefone ${inputTelefone} já foi inserido na agenda`);
    } 
    else {
        contatos.push(inputTelefone)

        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputTelefone}</td>`;
        linha += `</tr>`;
        linhas += linha;

    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}