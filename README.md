# Simulador de Aeroporto

Simulador 3D de aeroporto executado no navegador com Three.js. Inclui aeroporto com duas pistas, aeronave controlada pelo jogador e trafego aereo autonomo que reutiliza o modelo OBJ/MTL presente no projeto.

## Requisitos

- Navegador moderno (Chrome, Edge ou Firefox atualizado).
- Python 3, Node.js ou outro servidor HTTP local.

## Executar localmente

Os modelos OBJ, MTL e suas texturas sao carregados por requisicoes HTTP. Por isso, nao abra `index.html` ou `simulador.html` diretamente pelo Explorador (`file://`). Inicie um servidor na raiz do repositorio e acesse o endereco indicado.

### Opcao 1: Python

```powershell
python -m http.server 8080
```

Abra [http://localhost:8080](http://localhost:8080) no navegador e selecione **Iniciar Simulacao**.

### Opcao 2: Node.js

```powershell
npx serve . -l 8080
```

Abra [http://localhost:8080](http://localhost:8080).

Para encerrar o servidor, use `Ctrl+C` no terminal.

## Estrutura relevante

- `index.html`: pagina inicial.
- `simulador.html`: cena, controles e trafego aereo.
- `airplane_v2_L2.123c71795678-4b63-46c4-b2c6-549c45f4c806/`: modelo detalhado do aviao, materiais e texturas usados na simulacao.

## Publicacao estatica

O projeto nao exige etapa de build. Pode ser servido por GitHub Pages, Netlify, Vercel ou qualquer servidor HTTP estatico, preservando a estrutura de diretorios dos modelos.
