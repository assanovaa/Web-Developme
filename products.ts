export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img1: string;
  img2: string;
  url: string
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 799,
    description: 'A large phone with one of the best screens',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h22/hb6/83559849754654.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    rating: 5
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 11 128Gb черный',
    price: 574,
    description: 'The functional and stylish Apple iPhone 11 smartphone in a metal case is capable of providing not only everyday communication and entertainment, but also productive work',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h74/hcd/63840620347422.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/hba/h13/63840626901022.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hbd/he8/63840632602654.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000",
    rating: 4
  },
  {
    id: 3,
    name: 'Apple MacBook Air 13 MLY33',
    price: 1192,
    description: 'All Apple MacBook Air 2022 laptops boast proprietary Liquid Retina screens with a resolution of 2560x1664 pixels',
    img: "https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/h90/h16/64506823475230.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h82/64506826293278.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000",
    rating:5
  },
  {
    id: 4,
    name: 'Dyson HS05 Airwrap Complete Long 1300 W',
    price: 594,
    description: 'The Dyson Airwrap HS05 Complete Long styler is suitable for girls with long hair.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h59/h4d/83906343763998.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/hda/h48/83906344419358.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h23/he6/83906344157214.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-w-110086766/?c=750000000",
    rating:5

  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case',
    price: 250,
    description: 'The Apple-designed Dynamic Driver uses a dedicated amplifier to deliver incredibly detailed sound.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-large",
    url:"https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000",
    rating:4

  },
  {
    id: 6,
    name: 'Samsung Galaxy S23 FE 8',
    price: 589,
    description:'processor: 8-core MediaTek Helio G99',
    img: "https://resources.cdn-kaspi.kz/img/m/p/he4/haf/84251434516510.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/hdf/h2b/84251434778654.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h2e/hef/84251434909726.jpg?format=gallery-large",
    url:"https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000",
    rating: 4
  },
  {
    id: 7,
    name: 'Робот-пылесос Dreame F9',
    price: 260,
    description:'The Dreame F9 robot vacuum cleaner is your indispensable assistant, thanks to which your home will always be clean.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h8c/h88/64041503948830.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/h24/he7/64041549103134.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hf5/hbd/64041555820574.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/dreame-f9-belyi-100549614/?c=750000000",
    rating: 3
  },
  {
    id: 8,
    name: 'Дрон LYZ L900 Pro SE ',
    price: 107,
    description:'Intelligent functions and safe flight technology will allow you to fully immerse yourself in the creative process and create masterpieces of aerial photography.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h7f/82358081552414.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/h4f/h3f/64382214438942.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/64382215749662.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/lyz-l900-pro-se-chernyi-112197333/?c=750000000",
    rating: 4
  },
  {
    id: 9,
    name: 'Smeg TSF01CREU ',
    price: 102,
    description:'The electric kettle is equipped with non-slip feet and a removable filter',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h50/h97/65798105104414.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/he4/h88/65798105169950.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h44/h4d/65798105235486.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/smeg-tsf01creu-bezhevyi-11000154/?c=750000000",
    rating: 5
  },
  {
    id: 10,
    name: 'Стиральная машина LG F2M5HS6S серебристый',
    price: 461,
    description:'The LG F2M5HS6S washing machine in black and silver will be an ideal choice for a large family due to the ability to wash up to 7 kg of laundry per cycle',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hab/hd8/63767397728286.jpg?format=gallery-large",
    img1: "https://resources.cdn-kaspi.kz/img/m/p/hb8/h11/63767398514718.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hab/hd8/63767397728286.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000",
    rating: 5
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/