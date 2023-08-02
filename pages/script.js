document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const items = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            items.push(checkbox.name);
        }
    });

    if (items.length === 0) {
        alert("Selecione pelo menos um item para alugar.");
    } else {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `<h2>Itens escolhidos:</h2><ul>${items.map(item => `<li>${item}</li>`).join("")}</ul><p>Nome: ${nome}</p><p>Telefone (WhatsApp): ${telefone}</p><p>Endereço de entrega: ${endereco}</p>`;

        // Enviar os dados para o servidor via AJAX
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("telefone", telefone);
        formData.append("endereco", endereco);
        formData.append("itens", JSON.stringify(items));

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "enviar_email.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log("Email enviado com sucesso!");
            } else {
                console.error("Erro ao enviar email.");
            }
        };
        xhr.send(formData);
    }
});
