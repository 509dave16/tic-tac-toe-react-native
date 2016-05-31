import Dimensions from 'Dimensions';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;
const smallestDimension = x < y ? x : y;
let ratio = (smallestDimension / 3.2) * 0.01;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratio;

// We add an em() shortcut function 
export function em(value) {
  return unit * value;
}