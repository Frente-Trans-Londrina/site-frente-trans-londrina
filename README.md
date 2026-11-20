# Site da Frente Trans Londrina

Site com artigos jornalísticos, guias didáticos e registro de eventos da Frente Trans Londrina.

## Estrutura

```
web/      app Next.js (App Router, TypeScript, Tailwind)
studio/   Sanity Studio (CMS), a ser criado
docs/     decisões e documentação
```

## Stack

- Next.js hospedado na Vercel
- Sanity como CMS: editores não técnicos publicam sem mexer no código
- Supabase e ORM ficam fora do MVP e entram só se surgir necessidade de dados dinâmicos

## Desenvolvimento

Requer Node 22+ e pnpm.

```bash
cd web
pnpm install
pnpm dev
```

O site abre em http://localhost:3000.

Segredos (tokens do Sanity etc.) ficam em variáveis de ambiente, nunca no repositório.
