const messages = [
    { title: "Pagamento Confirmado", content: "Prezado(a) {{1}}, Agradecemos pela regularização do pagamento da sua fatura." },
    { title: "Boleto Disponível", content: "Olá {{1}}, Gostaríamos de lembrar que o boleto de vencimento {{2}} já encontra-se disponível para pagamento." },
    { title: "Lembrete de Vencimento", content: "Olá {{1}}, Passando para lembrar que seu boleto vencerá em 2 dias." },
    { title: "Aviso de Vencimento", content: "Prezado(a) {{1}}, MENSAGEM AUTOMÁTICA O vencimento de sua fatura em {{2}} está se aproximando." },
    { title: "Lembrete de Pagamento", content: "Olá {{1}}, Gostaríamos de lembrar que o boleto de vencimento {{2}} já encontra-se disponível para pagamento." },
    { title: "Fatura em Atraso", content: "Prezado(a) cliente, Estamos entrando em contato para lembrá-lo(a) de que a sua fatura encontra-se vencida." },
    { title: "Novo Boleto Disponível", content: "Olá {{1}}, O seu boleto da {{2}} acaba de chegar!" },
    { title: "Faturas em Atraso", content: "Prezado(a) {{1}}, Informamos que existem faturas de sua conexão de internet em atraso." },
    { title: "Aviso de Redução", content: "Prezado(a) {{1}}, Sua internet foi REDUZIDA até a regularização." },
    { title: "Aviso de Vencimento Próximo", content: "Olá {{1}}, sua mensalidade vencerá em 3 dias." },
    { title: "Pendência de Pagamento", content: "Olá! {{1}}, Estou passando para lembrá-lo(a) de uma pendência referente à fatura." },
    { title: "Risco de Bloqueio", content: "Prezado {{1}}, Seu boleto de internet está em atraso e sua internet pode ser bloqueada." },
    { title: "Boleto Não Identificado", content: "Olá, {{1}}, Não identificamos o pagamento do seu boleto da empresa {{2}}." },
    { title: "Vencimento Amanhã", content: "{{1}}, Sua fatura que vence amanhã está disponível." },
    { title: "Último Aviso", content: "Prezado(a) {{1}}, não identificamos o pagamento de sua fatura com vencimento em {{2}}." }
];
const messageList = document.getElementById("messageList");
messages.forEach(msg => {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message-item");
    
    const title = document.createElement("h3");
    title.textContent = msg.title;
    
    const content = document.createElement("p");
    content.textContent = msg.content;
    
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copiar";
    copyButton.classList.add("copy-btn");
    copyButton.onclick = () => {
        navigator.clipboard.writeText(msg.content);
        alert("Mensagem copiada!");
    };
    
    messageItem.appendChild(title);
    messageItem.appendChild(content);
    messageItem.appendChild(copyButton);
    
    messageList.appendChild(messageItem);
});

