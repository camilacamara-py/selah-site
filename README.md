# Site do Selah: Enigmas da Bíblia

Site institucional estático (Astro) com as páginas que a App Store e o Google Play pedem.

| Página | Português | Inglês |
|---|---|---|
| Início | `/` | `/en` |
| Política de Privacidade | `/privacidade` | `/en/privacy` |
| Termos de Uso | `/termos` | `/en/terms` |
| Suporte e perguntas | `/suporte` | `/en/support` |
| Excluir conta e dados | `/excluir-conta` | `/en/delete-account` |

Dados comuns (nome, responsável, e-mail, datas) ficam em `src/i18n.ts`.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Publicação

Vercel, importando este repositório (framework Astro detectado sozinho; saída `dist`).
`vercel.json` liga `cleanUrls`, para as páginas abrirem sem `.html` e sem barra no fim.
Se o endereço final mudar (domínio próprio), atualize `site` em `astro.config.mjs`.
