/**
 * Commando to create a new componente: node generate-component.js MeuComponente
 */

const fs = require('fs');
const path = require('path');

function generateComponent(componentName) {
  const componentPath = path.join(__dirname, 'src', 'components', componentName);

  if (fs.existsSync(componentPath)) {
    console.error(`O componente ${componentName} já existe.`);
    return;
  } else {
    console.log('Componente criado com sucesso!')
  }

  fs.mkdirSync(componentPath);

  const componentFilePath = path.join(componentPath, `${componentName}.tsx`);
  fs.writeFileSync(componentFilePath, 
    `import React from 'react';
    const ${componentName}: React.FC = () => {
        return (
            <div>
            {/* Conteúdo do componente */}
            </div>
        );
    };
    export default ${componentName};`);
  const componentCssFilePath = path.join(componentPath, `${componentName}.css`);
  fs.writeFileSync(componentCssFilePath, `/* Estilos do componente */`);
}
// nome do componente do argumento da linha de comando
const componentName = process.argv[2];
// Verifica se o nome do componente foi fornecido
if (!componentName) {
    console.error('É necessário fornecer o nome do componente.');
} else {
    generateComponent(componentName);
}