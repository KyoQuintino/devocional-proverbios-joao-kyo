# devocional Provérbios João kyo

Landing page responsiva, em português, para o e-book **Devocional Diário em Provérbios**, com o widget oficial de checkout da Hotmart.

## Conteúdo do repositório

- Aplicação React + Vite + TypeScript e seus arquivos de configuração.
- Integração do widget oficial Hotmart com o checkout `V107767990Y`.
- Artes originais geradas para capa, hero da página e divulgação.
- Versões JPEG otimizadas usadas como mídia promocional.
- Copy de título e descrição preparada para a página do produto na Hotmart.

As imagens ficam em `assets/marketing/`. Os arquivos em `originals/` preservam as artes originais; `web-optimized/` reúne versões menores para uso web. A página WebDev em que este projeto foi criado usa os caminhos de mídia administrados por essa hospedagem (`/manus-storage/...`); ao migrar a aplicação para outro host, publique as imagens em um armazenamento compatível e atualize os caminhos em `client/src/pages/Home.tsx`.

## Desenvolvimento

Requer Node.js 22 e pnpm.

```bash
pnpm install
pnpm dev
```

Para verificar os tipos e gerar o build:

```bash
pnpm check
pnpm build
```

## Widget Hotmart

O site carrega estes recursos oficiais no cliente:

- `https://static.hotmart.com/checkout/widget.min.js`
- `https://static.hotmart.com/css/hotmart-fb.min.css`
- Imagem oficial do botão verde de compra

O botão do widget aponta para `https://pay.hotmart.com/V107767990Y?checkoutMode=2`. Confirme o produto, preço, país e idioma no painel da Hotmart antes de divulgar a página. Não incluí credenciais ou informações de pagamento neste repositório.
