let amigos = [];

function adicionarAmigo() {
  let nomeInput = document.getElementById("amigo");
  let nome = nomeInput.value.trim();

  if (nome !== "" && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    nomeInput.value = "";
  } else {
    alert("Nome inválido ou já adicionado!");
  }
}
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de recriar

  amigos.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultadoLista = document.getElementById("resultado");

    resultadoLista.innerHTML = ""; // Limpa resultado anterior
    let li = document.createElement("li");
    li.textContent = `Amigo Secreto: ${sorteado}`;
    resultadoLista.appendChild(li);
  } else {
    alert("Adicione nomes antes de sortear!");
  }
}