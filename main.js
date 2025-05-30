const form = document.getElementById("chat-form")
const mensagens = document.getElementById("mensagens")

function adicionaMensagem (texto, isUser = false){
    const mensagem = document.createElement("p")
    mensagem.classList.add("mensagem")
    mensagem.innerText = texto
    mensagem.classList.add(isUser ? "user-msg" : "bot-msg")
    mensagens.appendChild(mensagem)
    mensagens.scrollTop = mensagens.scrollHeight
}


function respondeMensagem(texto){
    const msg = texto.toLowerCase()

    if(msg.includes("oi") || msg.includes("olá")){
        return "Olá! como posso te ajudar?"
    } else if(msg.includes("tudo bem")){
        return "Tudo ótimo de contrigo?"
    } else if(msg.includes("adeus") || msg.includes("tchau")){
        return"Até logo! Foi bom conversar com você"
    } else {
        return "Desculpe, ainda estou aprendendo. Pode perguntar outra coisa?"
    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const texto = form["campo-mensagem"].value.trim()
    if(!texto) return
    
    adicionaMensagem(texto, true)
    const resposta = respondeMensagem(texto)

    setTimeout(() => adicionaMensagem(resposta), 1000)


    form.reset()


})
