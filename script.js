let snap = Snap('#scene');

let darkPrimaryColor = '#455A64';
let primaryColor = '#607D8B';
let lightPrimaryColor = '#CFD8DC';
let textPrimaryColor = '#FFFFFF';
let accentColor = '#03A9F4';
let primaryTextColor = '#212121';
let secondaryTextColor = '#727272';
let dividerColor = '#B6B6B6';

let width = 600;
let traces = 16;
let spacing = 24;

for (let i = 0; i < traces; ++i) {
  let x;
  let half = traces / 2;
  let isLeft = i < half;
  let offset = i % half;

  if (isLeft) {
    x = (width - spacing) / 2 - offset * spacing;
  } else {
    x = (width + spacing) / 2 + offset * spacing;
  }

  let circle = snap.
  circle(x, 80, 4).
  attr({
    fill: '#fff',
    stroke: darkPrimaryColor,
    strokeWidth: 4 });


  let coords;
  if (isLeft) {
    coords = [
    x, 75,
    x, 70,
    x + 8 + 16 * offset, 46 - offset * 4,
    x + 8 + 16 * offset, 10];

  } else {
    coords = [
    x, 75,
    x, 70,
    x - 8 - 16 * offset, 46 - offset * 4,
    x - 8 - 16 * offset, 10];

  }

  snap.
  polyline(coords).
  attr({
    fill: '#fff',
    stroke: darkPrimaryColor,
    strokeWidth: 4 });

}
