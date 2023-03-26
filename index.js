const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

function adicionarNomes(...nomes) {
  const novosNomes = nomes.filter(nome => typeof nome === 'string');
  
  const nomesDuplicados = novosNomes.filter(nome => lista.includes(nome));
  if (nomesDuplicados.length > 0) {
    console.error(`Erro: o nome ${nomesDuplicados.join(', ')} já existe na lista.`);
    return;
  }
  
  lista.push(...novosNomes);
  console.log(`Nova lista de nomes: ${lista.join(', ')}.`);

  if(nome => typeof nome !== 'string'){
    console.error(`Erro: não é string.`);
    return;
  }
}

adicionarNomes(1234);
adicionarNomes('Vitoria'); 
adicionarNomes('Ana', 'Bruna');