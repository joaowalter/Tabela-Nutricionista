var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //obtem informações do form
    var paciente = obtemDadosForm(form);

    //cria os Tr e Td

    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacientetabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacientetabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemDadosForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var tdNome = montaTd(paciente.nome, "info-nome");
    var tdPeso = montaTd(paciente.peso, "info-peso");
    var tdAltura = montaTd(paciente.altura, "info-altura");
    var tdGordura = montaTd(paciente.gordura, "info-gordura");
    var tdImc = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);
    pacienteTr.appendChild(tdImc);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O Nome deve ser preenchido!")
    if(paciente.gordura == 0) erros.push("O % de Gordura deverá ser preenchido!")
    if(paciente.peso == 0 ) erros.push("O peso deverá ser preenchido!")
    if(paciente.altura == 0 ) erros.push("A altura deverá ser preenchida!")
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!"); 
    if(!validaAltura(paciente.altura)) erros.push("Altura inválido!");
    
    return erros;
}

