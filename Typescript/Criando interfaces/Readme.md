# Criando Interfaces

1. Crie a estrutura inicial do projeto:
    
    ```bash
    mkdir exercicio-criando-interfaces && cd exercicio-criando-interfaces
    mkdir src public
    touch src/index.ts public/index.html
    npm init -y
    npm install typescript --save-dev
    ```
    
2. Atualize o arquivo package.json:
    
    ```json
    "scripts": {
      "tsc-watch": "tsc"
    },
    ```
    
3. Crie o arquivo tsconfig.json e insira o conteúdo abaixo:
    
    ```json
    {
      "compilerOptions": {
    		"target": "ES2015",
        "outDir": "public/dist",
        "watch": true
      }
    }
    ```
    
4. A partir daqui já podemos deixar o projeto rodando:
    
    ```bash
    npm run tsc-watch
    ```
    
5. Adicione o conteúdo do arquivo index.html:
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exercício 3 - Criando Interfaces</title>
    </head>
    <body>
    
      <script src="dist/index.js"></script>
    
    </body>
    </html>
    ```
    
6. Vamos começar criando as interfaces que vamos utilizar nas funções:
    
    Obs.: Repare que temos a propriedade "message" como opcional, pois ela só estará presente se o usuário passado não seja encontrado, e nesse caso já poderemos validar a resposta.
    
    ```tsx
    interface GithubUserResponse {
      id: number
      login: string
      name: string
      bio: string
      public_repos: number
      repos_url: string
      message?: "Not Found"
    }
    
    interface GithubRepoResponse {
      name: string
      description: string
      fork: boolean
      stargazers_count: number
    }
    ```
    
7. Agora vamos criar nossas funções, começando pela requisição do usuário:
    
    Obs.: Criamos também a variável users globalmente para que ela fique disponível em todas as funções e no navegador
    
    Obs².: Os alerts servem apenas para termos um retorno visual do funcionamento e perceber as vantagens do *autocomplete*, normalmente poderíamos fazer a função retornar os resultados
    
    Obs.: Repare como a interface que criamos nos ajuda a manipular com mais facilidade a resposta da requisição. Normalmente o VS Code não teria nenhuma informação sobre a resposta retornada.
    
    ```tsx
    const users: GithubUserResponse[] = []
    
    async function fetchUser(username: string) {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const user: GithubUserResponse = await response.json()
    
      if (user.message) {
        alert('Usuário não encontrado!');
      } else {
        users.push(user)
    
    		alert(
          `O usuário ${user.login} foi salvo.\n` +
          `\nid: ${user.id}` +
          `\nlogin: ${user.login}` +
          `\nNome: ${user.name}` +
          `\nBio: ${user.bio}` +
          `\nRepositórios públicos: ${user.public_repos}`
        )
      }
    }
    ```
    
8. Agora a função de detalhar um usuário específico:
    
    ```tsx
    async function showUser(username: string) {
      const user = users.find(user => user.login === username)
    
      if (typeof user === 'undefined') {
        alert('Usuário não encontrado!');
      } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()
    
        let message = `id: ${user.id}\n` +
          `\nlogin: ${user.login}` +
          `\nNome: ${user.name}` +
          `\nBio: ${user.bio}` +
          `\nRepositórios públicos: ${user.public_repos}`
    
        repos.forEach(repo => {
          message += `\nNome: ${repo.name}` +
            `\nDescrição: ${repo.description}` +
            `\nEstrelas: ${repo.stargazers_count}` +
            `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
        })
    
        alert(message)
      } 
    }
    ```
    
9. A função de mostrar todos os usuários salvos:
    
    ```tsx
    function showAllUsers() {
      let message = 'Usuários:\n'
    
      users.forEach(user => {
        message += `\n- ${user.login}`
      })
    
      alert(message)
    }
    ```
    
10. A função de somar o número de repositórios públicos:
    
    ```tsx
    function showReposTotal() {
      const reposTotal = users.reduce((accumulator, user) => ( accumulator + user.public_repos), 0)
    
      alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`)
    }
    ```
    
11. E, por fim, a função de mostrar o top 5:
    
    ```tsx
    function showTopFive() {
      const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
    
      let message = 'Top 5 usuários com mais repositórios públicos:\n'
    
      topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
      })
    
      alert(message)
    }
    ```
    
12. Opcionalmente podemos declarar uma função para executar todas as outras para testar:
    
    ```tsx
    async function main() {
      await fetchUser('isaacpontes')
      await fetchUser('julianaconde')
      await fetchUser('pcaldass')
      await fetchUser('lucasqueirogaa')
      await fetchUser('frans203')
      await fetchUser('LeDragoX')
    
      await showUser('isaacpontes')
      await showUser('julianaconde')
    
      showAllUsers()
      showReposTotal()
      showTopFive()
    }
    
    main()
    ```
    
