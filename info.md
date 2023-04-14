# foi utilizado: 
- `npm create vite@latest` para criar o pojeto;
- Opção selecionada `react com types-cript`;
- eslint;
- sytlint [como instalar](https://stylelint.io/user-guide/get-started);
- taiwind;
- vite (versão utilizada deve ser maior que 3.x e a versão do @vitejs/plugin-react deve ser 1.3.2 se não não funciona o storybook);
- typescript;
- react;
- postcss;
- PostCSS Language Suport (para o vscode);
- Tailwind CSS IntelliSense (para o vscode);
- Storybook (para criar adicionar utilizei `npx sb init --builder @storybook/builder-vite --use-npm`. aqui eu instalo o sb 'storybook' em seguida falo para utilizar o vite como builder para compilar o código ao invés do webpack que é o padrão e depois digo que estou utilizando o npm);
- clsx (utilizado para construir className condicional)
- phosphor-react (lib de icones para o react)

# Quem é Vite:
- Substitui o babel e converte para o javascript que os navegadores entendão
- Descarta a utilidade do webpack e utilizada o esmodules (nova feture suportada pelos browsers)

# como inicializar:
- `npm run dev`