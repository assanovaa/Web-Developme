export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img1: string;
  img2: string;
  url: string;
  rating: number;
  likes: number;
  category: string;
}

export const products = [
  {
    category: 'Electronics',
    likes: 0,
    id: 1,
    name: 'IPhone 15 Pro Max',
    price: 799,
    description: 'A large phone with one of the best screens',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-large",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    rating: 5
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 2,
    name: 'Samsung Galaxy A23',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h8d/49792687636510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h70/49792689242142/samsung-galaxy-a23-6-gb-128-gb-cernyj-104348541-7.jpg",
    rating: 4
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 3,
    name: 'Macbook Air',
    price: 599,
    description: 'best helper for coding', 
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
    rating: 3
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 4,
    name: 'Стиральная машина LG F2M5HS6S ',
    price: 799,
    description: 'also is the best',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hab/hd8/63767397728286.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h57/h59/63767399104542.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/hba/h71/63767400546334.jpg?format=gallery-large",
    rating: 5,
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 5,
    name: 'Shik Perfect Liquid Contour скульптор 02',
    price: 799,
    description: 'Скульптурирующее средство для лица SHIK идеально подходит для моделирования овала лица',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8e/85209900384286.png?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h2e/h13/85209900417054.png?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h4a/h8c/85209900515358.png?format=gallery-large",
    url: "https://kaspi.kz/shop/p/shik-perfect-liquid-contour-skul-ptor-02-102556869/?c=750000000",
    rating: 5
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 6,
    name: 'Dyson',
    price: 499,
    description: 'best gift for your partner',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h08/68296593244190/dyson-hd07-supersonic-426081-01-fen-1600-w-108611587-2.jpg",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/haf/67104331825182/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-3.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hd07-fen-1600-w-108611587/",
    rating: 5
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 7,
    name: 'Dior Backstage Eye Palette',
    price: 499,
    description: 'Формулы Dior Backstage высоко пигментированные и стойкие, при этом они обладают контролируемой плотностью покрытия и создают эффект второй кожи.',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hbc/hfc/64531313295390.jpg?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h0e/h40/64531316408350.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/hbf/hfb/64531319062558.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/dior-backstage-eye-palette-003-amber-neutrals-104927401/?c=750000000",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 8,
    name: 'Charlotte Tilbury AirBrush Flawless Finish Powder',
    price: 30,
    description: 'сухая Medium бежевый',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h62/hce/63947745984542.jpg?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/hfc/hfa/80698521681950.png?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h1b/h91/63947748769822.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/charlotte-tilbury-airbrush-flawless-finish-powder-suhaja-medium-bezhevyi-100738693/?c=750000000",
    rating: 1
  },
  {
    category: 'Books',
    likes: 0,
    id: 9,
    name: 'Книга Улицкая Л. Е.: Трудно быть добрым',
    price: 2,
    description: 'Эти истории Людмила Улицкая когда-то придумала для своих детей',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hb4/h22/65183078416414.jpg?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h06/hc3/65183078940702.jpg?format=gallery-large",
    img2 :"https://www.google.com/url?sa=i&url=https%3A%2F%2Fozon.kz%2Fproduct%2Ftrudno-byt-dobrym-823240115%2F&psig=AOvVaw1tXJawwATkzXyRarOcsLX8&ust=1709061171085000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjpyKjbyYQDFQAAAAAdAAAAABAE",
    url: "https://kaspi.kz/shop/p/ulitskaja-l-e-trudno-byt-dobrym-107360648/?c=750000000",
    rating: 3
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 10,
    name: 'Vivienne Sabo Cabaret Premiere Violet',
    price: 5,
    description: 'Тушь для ресниц Cabaret Premiere с эффектом сценического объёма',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hf1/h09/63773851975710.jpg?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h49/h2e/63773852696606.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h2b/ha8/63773853417502.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/vivienne-sabo-cabaret-premiere-violet-dlja-ob-ema-podkruchivajuschaja-fioletovyi-17400161/?c=750000000",
    rating: 0
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 11,
    name: 'Estee Lauder Double Wear Stay-in-Place тональный крем',
    price: 29,
    description: ' 24 часа стойкости и естественный матовый финиш.',
    img : "https://resources.cdn-kaspi.kz/img/m/p/hb7/h73/64230275907614.jpg?format=gallery-large",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h52/h28/64230279184414.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h40/h67/64230282133534.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/estee-lauder-double-wear-stay-in-place-tonal-nyi-krem-1n1-ivory-nude-30-ml-103070444/?c=750000000",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 12,
    name: 'Книга Асиман А.: Назови меня своим именем',
    price: 699,
    description: 'Это история о пробуждающейся чувственности и первой любви. ',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h01/h7e/63800843862046.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/asiman-a-nazovi-menja-svoim-imenem-26022915/?c=750000000",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h98/h8d/63800844714014.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h80/h8d/63800845172766.jpg?format=gallery-large",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 13,
    name: 'Книга The Arabian Nights: Illustrated Book For Children',
    price: 699,
    description: 'возраст: 6+',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h45/hd7/68085106147358.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/the-arabian-nights-illustrated-book-for-children-108527922/?c=750000000",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/hc8/he7/68085108834334.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h40/hb0/68085109882910.jpg?format=gallery-large",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 14,
    name: 'О чем молчит ласточка',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    url: "https://kaspi.kz/shop/p/malisova-e-sil-vanova-k-o-chem-molchit-lastochka-106412172/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 15,
    name: 'Оруэлл Дж.: 1984',
    price: 699,
    description: 'Всемирная классика',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h34/51390686953502/oruell-dz-1984-105221802-1.jpg",
    url: "https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hcc/51390687412254/oruell-dz-1984-105221802-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hcc/51390687412254/oruell-dz-1984-105221802-2.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 16,
    name: 'Ежедневник Office, A5, 120 листов',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h12/63307614126110/ezednevnik-19982-16k-106916100-1.jpg",
    url: "https://kaspi.kz/shop/p/ezhednevnik-office-a5-120-listov-mul-tikolor-106916100/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h26/63307614584862/ezednevnik-19982-16k-106916100-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hdd/63307615043614/ezednevnik-19982-16k-106916100-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 17,
    name: 'Moleskine еженедельник',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/hf6/63809484783646/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-1.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h89/63809493499934/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/h83/63809502347294/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 18,
    name: 'Moleskine Le Nb Pinocchio',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/ha1/48266700292126/moleskine-le-nb-pinocchio-the-dogfish-103439218-1.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-le-nb-pinocchio-the-dogfish-103439218/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/he0/48266700750878/moleskine-le-nb-pinocchio-the-dogfish-103439218-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/hdf/48266701209630/moleskine-le-nb-pinocchio-the-dogfish-103439218-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 19,
    name: 'Ежедневник Notebook 2024, A5, 100 л, линейка',
    price: 699,
    description: 'формат: A5',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h55/he6/85074916835358.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/ezhednevnik-notebook-2024-a5-100-l-lineika-116380888/?c=750000000",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/hf4/h67/85074916900894.jpg?format=gallery-large",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h4e/h52/85074916966430.jpg?format=gallery-large",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 20,
    name: 'Канц-Эксмо скетчбук',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h65/49198369439774/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-1.jpg",
    url: "https://kaspi.kz/shop/p/kants-eksmo-sketchbuk-v-oblakah-a5-100-listov-104009384/",
    img1 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h7b/49198369898526/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-2.jpg",
    img2 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h15/49198370357278/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-3.jpg",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 21,
    name: 'Vivienne Sabo Feutre Fin',
    price: 699,
    description: 'Стрелки любой формы и ширины!',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h0a/h45/63947392188446.jpg?format=gallery-large",
    url: "https://kaspi.kz/shop/p/vivienne-sabo-feutre-fin-801-podvodka-flomaster-chernyi-801-100796291/?c=750000000",
    img1 : "https://resources.cdn-kaspi.kz/img/m/p/h38/h09/63947395301406.jpg?format=gallery-large",
    img2 :"https://resources.cdn-kaspi.kz/img/m/p/h92/h7f/63947400445982.jpg?format=gallery-large",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/