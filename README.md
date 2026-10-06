# LP Lançamento

Landing page desenvolvida em HTML, CSS e JavaScript e hospedada na HostGator.

## Produção

O site em produção está hospedado na **HostGator**.

Domínio:

`joaovitorsd.com`

O GitHub Pages não é utilizado para hospedagem. O GitHub é utilizado para versionamento do código e para realizar o deploy automático na HostGator.

---

## Tecnologias

O projeto utiliza:

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions
- FTP para deploy na HostGator

Não é necessário instalar Node.js, npm ou outras dependências para executar o projeto.

---

## Estrutura do projeto

```text
LP-Lan-amento/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── fotos/
├── inicio/ (Versão secundária do site - Não está sendo utilizada no momento)
├── index.html
├── style.css
├── jv.js
└── README.md
```

### Principais arquivos

**index.html**  
Página principal do site.

**style.css**  
Estilos e responsividade.

**jv.js**  
JavaScript utilizado no site.

**fotos/**  
Imagens utilizadas pelo projeto.

**inicio/**  
Versão secundária do site.

**.github/workflows/deploy.yml**  
Configuração responsável pelo deploy automático para a HostGator.

---

# Desenvolvimento

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd LP-Lan-amento
```

Abra o projeto no VS Code:

```bash
code .
```

Como é um site estático, ele pode ser executado localmente abrindo o `index.html` no navegador ou utilizando uma extensão como Live Server.

---

# Branch de produção

A branch oficial do projeto é:

```text
main
```

A versão presente na `main` deve ser considerada a versão de produção.

Evite realizar alterações diretamente na hospedagem pelo Gerenciador de Arquivos do cPanel.

O código do GitHub deve ser mantido como fonte principal do projeto.

---

# Como publicar alterações

Depois de realizar e testar uma alteração:

```bash
git status
git add .
git commit -m "Descrição da alteração"
git push origin main
```

Ao executar:

```bash
git push origin main
```

o GitHub Actions inicia automaticamente o processo de publicação.

O fluxo é:

```text
Computador
    ↓
Git
    ↓
GitHub (main)
    ↓
GitHub Actions
    ↓
FTP
    ↓
HostGator
    ↓
public_html
    ↓
Site em produção
```

Não é necessário enviar os arquivos manualmente pelo cPanel.

---

# Deploy automático

O workflow está localizado em:

```text
.github/workflows/deploy.yml
```

Ele é executado automaticamente sempre que ocorre um `push` na branch `main`.

É possível acompanhar os deploys em:

**GitHub → Actions → Deploy HostGator**

Um deploy concluído com sucesso aparecerá com o status verde.

Se o workflow apresentar erro, abra a execução no GitHub Actions e consulte os logs da etapa de deploy.

---

# Credenciais do deploy

As credenciais FTP **não estão armazenadas no código**.

Elas estão configuradas através dos **GitHub Actions Secrets**.

Localização:

**Repository → Settings → Secrets and variables → Actions**

Secrets utilizados:

```text
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
```

Nunca coloque os valores dessas credenciais diretamente no código ou neste README.

---

# Hospedagem

Hospedagem:

**HostGator**

Diretório de produção:

```text
/public_html
```

O deploy automático possui acesso somente ao diretório necessário para publicação do site.

---

# GitHub Pages

O GitHub Pages está desativado.

O site não deve ser publicado através do GitHub Pages enquanto a infraestrutura atual estiver sendo utilizada.

A hospedagem oficial é a HostGator.

---

# Recomendações para manutenção

Antes de publicar alterações:

1. Confirme que está na branch `main`.
2. Teste as alterações localmente.
3. Faça o commit.
4. Execute o `git push`.
5. Verifique o resultado em GitHub Actions.
6. Confira o site em produção.

Para verificar a branch atual:

```bash
git branch
```

O resultado esperado é:

```text
* main
```

Para verificar alterações pendentes:

```bash
git status
```

---

# Segurança

Nunca adicione ao repositório:

- Senhas da HostGator
- Senhas de FTP
- Tokens
- Chaves privadas
- Credenciais de serviços externos

Credenciais utilizadas pelo deploy devem permanecer nos **GitHub Actions Secrets**.

---

## Responsável pela manutenção

Este repositório contém o código-fonte e a configuração de deploy necessários para manutenção e publicação do site.

Novas alterações devem ser versionadas pelo Git e publicadas através da branch `main`.

