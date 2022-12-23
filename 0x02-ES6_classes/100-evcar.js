import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, model, price, range) {
    super(brand, model, price);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car();
  }
}
