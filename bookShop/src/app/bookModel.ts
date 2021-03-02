export const enum Categories {
    Detective,
    Sciencefiction,
    Novel,
    Fiction
}

export interface BookModel {
    name: string;
    description: string;
    price: number;
    category: Categories;
    createDate: number;
    isAvailable: boolean;
  }