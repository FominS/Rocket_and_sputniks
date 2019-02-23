class Utils {
  randomize = (max, min) => {
    return (Math.random() * (max - min) + min).toFixed(0);
  };

  getSpeed = element => {
    const second = 1000;
    let speed = 0;
    switch (element) {
      case "sputnik":
        speed = this.randomize(8000, 4000);
        break;
      case "ship":
        speed = this.randomize(3000, 2000); //скорость ракеты ниже спутников, т.к. приеодолеваемое расстояние меньше
        break;
      case "moon":
        speed = this.randomize(22000, 19000);
        break;
    }
    return speed;
  };

  getOffset = () => {
    return this.randomize(55, 45);
  };
}

export default Utils;
