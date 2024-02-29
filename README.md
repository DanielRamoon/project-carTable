This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Tabela de Carros
A tabela de carros é uma parte essencial da nossa aplicação, fornecendo uma visão geral dos diferentes carros disponíveis, suas informações e ações que podem ser realizadas.

Conteúdo da Tabela
Imagem do Carro: Cada carro é representado por uma imagem que o identifica visualmente, ajudando os usuários a reconhecerem o modelo.

Nome do Carro: O nome do carro é exibido para que os usuários possam identificar rapidamente qual modelo estão visualizando.

Próxima Reserva: Esta coluna mostra a data da próxima reserva para cada carro. Isso permite que os usuários vejam quando um carro está programado para ser reservado novamente.

Status: O status de cada carro indica se ele está disponível para reserva ou se já está reservado. Os status disponíveis incluem "Disponível" e "Reservado".

Avaliação: Os usuários podem avaliar os carros atribuindo uma classificação de 1 a 5 estrelas. Isso fornece feedback sobre a qualidade e satisfação geral com cada carro.

Ações: As ações disponíveis para cada carro incluem opções para editar o status e editar informações detalhadas sobre o carro.




Dependências

next (v14.1.0): Framework React para renderização do lado do servidor e do lado do cliente.
react (v^18): Biblioteca principal do React para construir interfaces de usuário.
react-dom (v^18): Responsável por renderizar componentes do React no navegador.
@heroicons/react (v^2.1.1): Conjunto de ícones React da Heroicons.
react-icons (v^5.0.1): Biblioteca para incluir ícones em componentes React.

Dependências de Desenvolvimento

typescript (v^5): Superset de JavaScript que adiciona tipagem estática ao código.
@types/node (v^20): Tipos de definição para o ambiente Node.js.
@types/react (v^18): Tipos de definição para o React.
@types/react-dom (v^18): Tipos de definição para o ReactDOM.
eslint (v^8): Ferramenta de linting para JavaScript e TypeScript.
eslint-config-next (v14.1.0): Configuração de linting para projetos Next.js.
postcss (v^8.4.35): Ferramenta para processamento de CSS.
autoprefixer (v^10.4.17): Plugin PostCSS para adicionar prefixos de vários navegadores automaticamente.
tailwindcss (v^3.4.1): Estrutura CSS de baixo nível para construir designs personalizados rapidamente.
