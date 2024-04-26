export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string | null,
    public price: string,
  ) {}
}
