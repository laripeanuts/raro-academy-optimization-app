# Otimização

## 🎯 Objetivos Chat

Analisar o desempenho do color reponsive e corrigir possíveis quedas de perfomance.

- [X] Implementado um debouce para um delay na hora de chamar a função alteraCor
- 
## 🎯 Objetivos Chat

Analisar o desempenho de uma aplicação de chat utilizando e buscar pelo menos três soluções efetivas que a torne mais eficiente e eficaz.

- [X] Método do array *MAP* não possui keys.
  - Implementar uma key no *ChatMessageList*
- [X] Cada nova mensagem gerada, re-renderiza várias vezes
  - memo no *myChatMessage* e *chatMessage*
- [ ] Cada mensagem é renderizada duas vezes
  - Componente *MensagemChat* 
- [ ] Busca mensagem está renderizando tudo a cada mudança
  - Possível solução: debounce no *setBuscaMensagem*
- [ ] No alto número de mensagens o aplicativo fica muito pesado
  - Possível solução: Páginação
- [ ] Alto número de renderizações na manipulação do scroll
  - Controlar *useScroll*

## 📚 Para executar localmente em modo desenvolvedor:

No diretório raiz do projeto execute:

- Para instalar as dependências `npm install`
- Para iniciar o projeto `npm start`


<p align="left">Copyright ☕ 2022 <a href="https://github.com/laripeanuts">laripeanuts</a></p>