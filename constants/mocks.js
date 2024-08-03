const ticketSample = [
    {
      id: 1,
      ticketId: '16098966',
      purchaseDate: '03 May, 2019 15:00',
      companyId: 1,
      showId: 1,
      used: false,
      valid: true,
      theater: '01',
      row: '09',
      column: '11',
    },    
    {
      id: 2,
      ticketId: '26009684',
      purchaseDate: '03 May, 2019 15:00',
      companyId: 2,
      used: false,
      valid: false,
      adultNo: 1,
      kidNo: 2,
    },
    {
      id: 3,
      ticketId: '38889000',
      purchaseDate: '03 May, 2019 15:00',
      companyId: 3,
      used: true,
      valid: false,
      adultNo: 1,
      kidNo: 2,
    },
    {
      id: 4,
      ticketId: '46009877',
      purchaseDate: '06.04.2019 15:00',
      companyId: 4,
      used: false,
      valid: true,
      ticketTypeId:4,
      from: '5000',
      to: '5000',
      over: '0000',
      adult: true,
      kid: false,
    },
    {
      id: 5,
      ticketId: '56009878',
      purchaseDate: '06.04.2019 15:00',
      companyId: 5,
      valid: true,
      used: false,
    },
    {
      id: 6,
      ticketId: '66098966',
      purchaseDate: '03 May, 2019 15:00',
      companyId: 6,
      used: false,
      valid: true,
    },
    {
      id: 7,
      ticketId: '76098966',
      purchaseDate: '03 May, 2019 15:00',
      companyId: 1,
      showId: 2,
      used: false,
      valid: true,
      theater: '02',
      row: '09',
      column: '11',
    },
  ]

const companyCategory = [
  {
    id: 1,
    name: 'show'
  },
  {
    id: 2,
    name: 'visit'
  },
  {
    id: 3,
    name: 'travel'
  },
  {
    id: 4,
    name: 'party'
  }
]

const companies =[
  {
    id: 1,
    logo: 'ic.jpeg',
    categoryId: 1,
    name: 'International Cineplex',
    address: 'Am Olympiapark 2, 80809 München',
    shows :[
      {
        id: 1,
        name: 'Lord of the Rings',
        date: '13.04.2019',
        time: '19:30',
        price: 20
      },{
        id: 2,
        name: 'Avengers - End Game',
        date: '13.04.2019',
        time: '19:30',
        price: 22
      }
    ]
  },
  {
    id: 2,
    logo: 'gn.jpeg',
    categoryId: 2,
    name: 'Germanisches Nationalmuseum',
    address: 'Schaumainkai 41, 60596 Frankfurt am Main',
    adultPrice: 5,
    kidPrice: 2, 
    openAt: '10:00',
    closeAt: '19:00',
    lastEntry: '17:30',
    validity: 'Ticket is for one time use after purchase.'
  },{
    id: 3,
    logo: 'bmw.jpeg',
    categoryId: 2,
    name: 'BMW Museum',
    address: 'Frank-Zappa-Straße 19, 12681 Berlin',
    adultPrice: 4,
    kidPrice: 2, 
    openAt: '10:00',
    closeAt: '19:00',
    lastEntry: '17:30',
    validity: 'Ticket is one time use on the day it is bought.'
  },{
    id: 4,
    logo: 'rmv.jpeg',
    categoryId: 3,
    name: 'RMV Bus',
    ticketType: [
      {
        id: 1,
        name: 'Annual season tickets',
        validity: 'Every day from 7 p.m. and on weekends and public holidays all day: take one adult and as many children under 15 as you like free of charge',
        adultPrice: 550,
        kidPrice: 0, 
      },
      {
        id: 2,
        name: 'Monthly tickets',
        validity: 'Valid during the following month through the calendar day purchased and after until 05:00 am the next day',
        adultPrice: 60,
        kidPrice: 0, 
      },
      {
        id: 3,
        name: 'Weekly tickets',
        validity: 'Valid for all RMV mode of transport for as many journey as you like for seven consecutive days from date of purchase.',
        adultPrice: 15,
        kidPrice: 0, 
      },
      {
        id: 4,
        name: 'Day tickets',
        validity: 'Valid the day of validity until 05:00 a.m. the next day or until the last trip indicated as night route.',
        adultPrice: 8,
        kidPrice: 6, 
      },
      {
        id: 5,
        name: 'Single tickets',
        validity: 'Valid for one person for a immediate single journey.',
        adultPrice: 2.5,
        kidPrice: 2.5, 
      }
    ],
  },{
    id: 5,
    logo: 'sn.jpeg',
    name: 'Special Night Party',
    categoryId: 4,
    address: 'Schaumainkai 41, 60596 Frankfurt am Main',
    artist: 'DJ Lorem Ipsum',
    date: '13.04.2019',
    startTime: '10:00',
    endTime: '19:00',
    price: '11'
  },{
    id: 6,
    logo: 'logo.png',
    name: 'New year concert',
    categoryId: 4,
    address: 'Frankfurt football stidum',
    artist: 'Guns & Rose',
    date: '13.04.2019',
    startTime: '18:00',
    endTime: '20:00',
    price: '150'
  },  
  {
    id: 7,
    logo: 'ic.jpeg',
    categoryId: 1,
    name: 'Frankfurt Cineplex',
    address: 'Frank-Zappa-Straße 19, Frankfurt',
    shows :[
      {
        id: 1,
        name: 'Avengers - End Game',
        date: '13.04.2019',
        time: '19:30',
        price: 22
      }
    ]
  },
]

export { ticketSample, companyCategory, companies }