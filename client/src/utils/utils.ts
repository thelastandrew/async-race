import { carBrand, carModal } from '../templates/cars';

export const generateColor = (): string => {
  let r = (Math.floor(Math.random() * 256)).toString(16);
  let g = (Math.floor(Math.random() * 256)).toString(16);
  let b = (Math.floor(Math.random() * 256)).toString(16);

  r = r.length === 1 ? `0${r}` : r;
  g = g.length === 1 ? `0${g}` : g;
  b = b.length === 1 ? `0${b}` : b;

  return `#${r}${g}${b}`;
};

export const generateCarName = (): string => {
  const randomBrand = carBrand[Math.floor(Math.random() * carBrand.length)];
  const randomModal = carModal[Math.floor(Math.random() * carModal.length)];

  return `${randomBrand} ${randomModal}`;
};