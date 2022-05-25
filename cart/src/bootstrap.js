import { faker } from '@faker-js/faker';

let cartText = `<div>You have a ${faker.datatype.number()} in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;
