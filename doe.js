function enviardoacao() {
    // Pega os elementos do formulário
    const nome = document.getElementById('innome').value.trim();
    const valor = document.getElementById('invalor').value.trim();
    const pagamento = document.getElementById('inpagamento').value.trim();
    const res = document.getElementById('outres');

    // Limpa mensagem anterior
    res.innerHTML = "";

    // Validação dos campos
    if (nome === "" || valor === "" || pagamento === "") {
        res.style.color = "red";
        res.textContent = "⚠ Por favor, preencha todos os campos!";
        return;
    }

    // Validação do valor da doação
    const valorDoacao = parseFloat(valor);
    if (isNaN(valorDoacao) || valorDoacao <= 0) {
        res.style.color = "red";
        res.textContent = "⚠ Digite um valor de doação válido!";
        return;
    }

    // Mensagem de sucesso
    res.style.color = "green";
    res.textContent = `✅ Obrigado, ${nome}! Sua doação de R$${valorDoacao.toFixed(2)} via ${pagamento} foi registrada com sucesso.`;

    // Limpa os campos
    document.getElementById('innome').value = "";
    document.getElementById('invalor').value = "";
    document.getElementById('inpagamento').value = "";

    // Foco automático no nome
    document.getElementById('innome').focus();
}

// Evento para o botão
document.getElementById('doe').addEventListener("click", enviardoacao);
