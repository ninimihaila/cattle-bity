class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(x = 0, y = 0) {
    this.x += x;
    this.y += y;

    return this;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  setX(x) {
    this.x = x;

    return this;
  }

  setY(y) {
    this.y = y;

    return this;
  }
}

export default Vector;