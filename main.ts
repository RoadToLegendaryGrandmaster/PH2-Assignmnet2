function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
  
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const newBooks: { title: string; rating: number }[] = [];
    items.forEach((item: { title: string; rating: number }) => {
      if (item.rating >= 4) {
        newBooks.push(item);
      }
    });
  
    return newBooks;
  }
  
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArr: T[] = [];
    arrays.forEach((arr: T[]) => {
      newArr.push(...arr);
    });
  
    return newArr;
  }
  
  class Vehicle {
    private make;
    private year;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    private model;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    public getModel() {
      console.log(`Model: ${this.model}`);
    }
  }
  
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return 2 * value;
    }
  }
  
  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length == 0) return null;
    const mostExpensiveProduct: Product = products.sort(function (a, b) {
      return b.price - a.price;
    })[0];
  
    return mostExpensiveProduct;
  }
  
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  
  async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      if (n < 0) {
        return reject("Negative number not allowed");
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }
  