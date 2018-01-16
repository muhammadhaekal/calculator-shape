var pi = Math.PI;

function calculateSquareArea(w,l){
  return w*l;
}

function calculateSquarePerimeter(w,l){
  return 2*w + 2*l;
}

function calculateCircleArea(r){
  return pi*r*r;
}

function calculateCircleCircumference(r){
  return 2*pi*r;
}

function calculateCubeArea(a){
  return 6*a*a;
}

function calculateCubeVolume(a){
  return a*a*a;
}

function calculateTubeArea(r,h){
  return (2*(2*pi*r)) + ((2*pi*r)*h)
}

function calculateTubeVolume(r,h){
  return pi*r*r*2*h;
}
function add(varA,varB){
  return varA+varB;
}
function calculateTubeVolumeWithCircle(circleArea,h){
  return circleArea*h;
}

console.log("---------level 1 --------------------");

var squareArea = calculateSquareArea(2,4);
var squarePerimeter = calculateSquarePerimeter(2,4);
var circleArea = calculateCircleArea(2);
var circleCircumference = calculateCircleCircumference(2);
var cubeArea = calculateCubeArea(4);
var cubaVolume = calculateCubeVolume(4);
var tubeArea = calculateTubeArea(3,2);
var tubeVolume = calculateTubeVolume(2,8);

console.log(`square area = ${squareArea}`);
console.log(`square perimeter = ${squarePerimeter}`);
console.log(`circle area = ${circleArea}`);
console.log(`circle circumference = ${circleCircumference}`);
console.log(`cube area = ${cubeArea}`);
console.log(`cube volume = ${cubaVolume}`);
console.log(`tube area = ${tubeArea}`);
console.log(`tube volume = ${tubeVolume}`);

console.log("---------level 2 --------------------");
squareArea = calculateSquareArea(add(2,2),3);
console.log(`square area = ${squareArea}`);
tubeVolume = calculateTubeVolumeWithCircle(calculateCircleArea(2),7);
console.log(`tube volume = ${tubeVolume}`);
