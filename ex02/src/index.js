const MY_CAR = {
whells: 4,
cylinders: 4,
size: 2.2
};

function main(myCar) {

const { cylinders } = MY_CAR;
const { size } = MY_CAR;

return {cylinders, size};


}

console.log(main(MY_CAR));
module.exports = main;

