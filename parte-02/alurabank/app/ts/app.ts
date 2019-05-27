const controller = new NegociacaoController();

// Simples comentário para testar se o compilador está removendo os comentários.
$('.form').submit(controller.adiciona.bind(controller));