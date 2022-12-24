export default class Car {
  constructor(brand, model, price) {
    this._brand = brand;
    this._model = model;
    this._price = price;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }

  get price() {
    return this._price;
  }

  cloneCar() {
    return new this.constructor();
  }
}
