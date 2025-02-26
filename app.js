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

