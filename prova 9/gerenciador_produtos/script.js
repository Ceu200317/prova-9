class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }

    mostrarDetalhes() {
      console.log(` ${this.nome} - R$${this.preco} (${this.categoria})`);
    }
  }

  let produtos = [];
  
  function adicionarProduto() {
    let nome = prompt("Nome do produto:");
    let preco = parseFloat(prompt("Preço do produto:"));
    let categoria = prompt("Categoria do produto:");
  
    let novoProduto = new Produto(nome, preco, categoria);
    produtos.push(novoProduto);
    console.log(" Produto adicionado com sucesso!");
  }

  function listarProdutos() {
    if (produtos.length === 0) {
      console.log(" Nenhum produto cadastrado.");
      return;
    }
  
    console.log(" Lista de Produtos:");
    produtos.forEach(function (produto) {
      produto.mostrarDetalhes();
    });
  }

  function buscarProduto() {
    let nomeBusca = prompt("Digite o nome do produto que deseja buscar:");
  
    let resultado = produtos.find(function (produto) {
      return produto.nome.toLowerCase() === nomeBusca.toLowerCase();
    });
  
    if (resultado) {
      console.log(" Produto encontrado:");
      resultado.mostrarDetalhes();
    } else {
      console.log(" Produto não encontrado.");
    }
  }

  function filtrarPorCategoria() {
    let categoriaFiltro = prompt("Digite a categoria a filtrar:");
    let filtrados = produtos.filter(function (produto) {
      return produto.categoria.toLowerCase() === categoriaFiltro.toLowerCase();
    });
  
    if (filtrados.length > 0) {
      console.log(" Produtos na categoria:", categoriaFiltro);
      filtrados.forEach(function (p) {
        p.mostrarDetalhes();
      });
    } else {
      console.log(" Nenhum produto encontrado nessa categoria.");
    }
  }

  function calcularTotal() {
    if (produtos.length === 0) {
      console.log(" Nenhum produto para somar.");
      return;
    }
  
    let total = produtos.reduce(function (soma, p) {
      return soma + p.preco;
    }, 0);
  
    console.log(" Valor total de todos os produtos: R$" + total.toFixed(2));
  }

  function menuProdutos() {
    let opcao;
  
    while (opcao !== "0") {
      opcao = prompt(
        "GERENCIADOR DE PRODUTOS\n" +
        "1 - Adicionar Produto\n" +
        "2 - Listar Produtos\n" +
        "3 - Buscar Produto\n" +
        "4 - Filtrar por Categoria\n" +
        "5 - Ver Total de Preços\n" +
        "0 - Sair"
      );
  
      if (opcao == "1") {
        adicionarProduto();
      } else if (opcao == "2") {
        listarProdutos();
      } else if (opcao == "3") {
        buscarProduto();
      } else if (opcao == "4") {
        filtrarPorCategoria();
      } else if (opcao == "5") {
        calcularTotal();
      } else if (opcao == "0") {
        console.log("Encerrando sistema.");
      } else {
        console.log(" Opção inválida.");
      }
    }
  }
  
  menuProdutos();
  