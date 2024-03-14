import { DataProps } from "./src/interfaces/CommonProps";

export const items: DataProps[] = [
    {
        title: "sugestão do dia",
        items: [
          {
            nome: "Ravioli", 
            preco: 45.99, 
            features:['vegano','sem glúten'],
            img:'bruschettas.jpg',
            description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
          },
          {
            nome: "Lasanha", 
            preco: 55.99,
            description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'
          },
        ]
    },
    {
        title: "entrada",
        items: [
          { nome: "Salada Caesar", preco: 25.99, features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' },
          { nome: "Bruschetta", preco: 15.99, features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' },
        ]
    },
    {
        title: "bebidas",
        items: [
          { nome: "Coca-Cola", preco: 4.99, features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' },
          { nome: "Suco de Laranja", preco: 6.99, features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' },
        ]
    },
    {
        title: "drinks",
        items: [
          { nome: "Mojito", preco: 12.99, features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' },
          { nome: "Caipirinha", preco: 10.99,features:['vegano','sem glúten'],description: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'},
        ]
    }
]