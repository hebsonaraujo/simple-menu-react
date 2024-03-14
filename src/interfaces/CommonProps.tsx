export interface CommonProps {
    titles: string[];
}
export interface Item {
    nome: string,
    preco: number,
    features?: string[],
    img?: string,
    description?: string
}
export interface ListItems {
    items: Item[]
}
export interface DataProps {
    title: string,
    items: Item[]
}
export interface MainProps {
    data: DataProps[];
}