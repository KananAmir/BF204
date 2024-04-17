class Product {
  static id = 1;
  static profit = 0;
  constructor(name, imgSrc, costPrice, salePrice, discountPercentage) {
    this.id = Product.id++;
    this.name = name;
    this.imgSrc = imgSrc;
    this.costPrice = costPrice;
    if (costPrice > salePrice)
      throw new Error("cost price cannot be less than sale price");
    else this.salePrice = salePrice;
    if (discountPercentage >= 0 && discountPercentage <= 100)
      this.discountPercentage = discountPercentage;
    else throw new Error("discount percentage should be between 0-100");
  }
  //profit
  calcProfit() {
    return (
      this.salePrice -
      this.costPrice -
      (this.salePrice * this.discountPercentage) / 100
    );
  }
  calcGeneralProfit() {
    profit += this.calcProfit();
  }
  hasDiscount() {
    if (this.discountPercentage > 0) {
      return true;
    } else {
      return false;
    }
  }
  calcDiscountedPrice() {
    return Number(this.salePrice - (this.salePrice * this.discountPercentage) / 100).toFixed(2);
  }
}

export class User{
  // static id = 1;
  constructor(username, email, password){
    this.id = new Date().getMilliseconds();
    this.username = username;
    this.email = email;
    this.password = password;
    this.isLogged = false;
  }
}

export default Product;
