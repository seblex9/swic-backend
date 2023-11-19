import mongoose from 'mongoose';

export const eventSeed = [
  {
    createdBy: '655166c98465b7b8ebbd9602',
    creatorName: 'Mary Jane', //
    organizedBy: ['655166c98465b7b8ebbd9602'],
    title: 'Wine and Cheese Soiree',
    date: new Date('2023-08-15T19:00:00.000Z'),
    capacity: 50,
    address: {
      eng: 'Elegant Venue, 123 Fashion Road, Nanshan District, Shenzhen',
      chn: '优雅场地，时尚路123号，南山区，深圳',
    },
    coordinates: { latitude: 22.543096, longitude: 114.057865 },
    description:
      'Join us for a delightful evening of wine and cheese tasting, featuring a selection of international wines and artisanal cheeses.',
    memberPrice: 150,
    guestPrice: 200,
    attendees: [],
  },
  {
    createdBy: '655166c98465b7b8ebbd9602',
    creatorName: 'Mary Jane',
    organizedBy: ['655166c98465b7b8ebbd9602'],
    title: 'Majiang Social',
    date: new Date('2023-09-10T14:00:00.000Z'),
    capacity: 30,
    address: {
      eng: 'Community Center, 456 Culture Plaza, Futian District, Shenzhen',
      chn: '社区中心，文化广场456号，福田区，深圳',
    },
    coordinates: { latitude: 22.543096, longitude: 114.05096 },
    description:
      "A social afternoon of Majiang. Whether you're a seasoned player or a beginner, come enjoy this classic game.",
    memberPrice: 30,
    guestPrice: 50,
    attendees: [],
  },
  {
    createdBy: '655166c98465b7b8ebbd9602',
    creatorName: 'Mary Jane',
    organizedBy: ['655166c98465b7b8ebbd9602'],
    title: 'Outdoor Yoga Retreat',
    date: new Date('2023-09-25T06:00:00.000Z'),
    capacity: 25,
    address: {
      eng: 'Peaceful Park, 789 Nature Lane, Luohu District, Shenzhen',
      chn: '和平公园，自然道789号，罗湖区，深圳',
    },
    coordinates: { latitude: 22.548515, longitude: 114.111572 },
    description:
      'Start your day with serenity at our outdoor yoga retreat, surrounded by the calming sounds of nature.',
    memberPrice: 80,
    guestPrice: 100,
    attendees: [],
  },
  {
    createdBy: '655166c98465b7b8ebbd9602',
    creatorName: 'Mary Jane',
    organizedBy: ['655166c98465b7b8ebbd9602'],
    title: 'Creative Writing Workshop',
    date: new Date('2023-12-05T18:00:00.000Z'),
    capacity: 15,
    address: {
      eng: 'Bookworm Library, 123 Literacy Road, Futian District, Shenzhen',
      chn: '书虫图书馆，文学路123号，福田区，深圳',
    },
    coordinates: { latitude: 22.547, longitude: 114.085947 },
    description:
      'Join our workshop to explore creative writing techniques and unleash your storytelling potential.',
    memberPrice: 50,
    guestPrice: 75,
    attendees: [],
  },
];

export const userSeed = [
  {
    name: 'Alice Johnson',
    openId: 'alicejohnson_openid',
    isMember: true,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
  {
    name: 'Betty Smith',
    openId: 'bettysmith_openid',
    isMember: true,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
  {
    name: 'Carol Martinez',
    openId: 'carolmartinez_openid',
    isMember: true,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
  {
    name: 'Diana Lee',
    openId: 'dianalee_openid',
    isMember: true,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
  {
    name: 'Evelyn Garcia',
    openId: 'evelyngarcia_openid',
    isMember: true,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
];

export const memberSeed = [];
