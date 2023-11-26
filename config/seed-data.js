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
    date: new Date('2024-03-10T14:00:00.000Z'),
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
    isMember: false,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
  {
    name: 'Evelyn Garcia',
    openId: 'evelyngarcia_openid',
    isMember: false,
    memberProfile: new mongoose.Types.ObjectId(),
    eventsAttended: [],
  },
];

export const discountSeed = [
  {
    retailer: 'George & Dragon',
    description: 'Get 20% off all food and drinks.',
    discountAmount: 20,
    expirationDate: new Date('2023-12-31T23:59:59.999Z'),
  },
  {
    retailer: 'Tech Store',
    description: 'Save 15% on all electronics and gadgets.',
    discountAmount: 15,
    expirationDate: new Date('2023-11-30T23:59:59.999Z'),
  },
  {
    retailer: 'Coffee Shop',
    description: 'Buy one coffee, get the second one free!',
    discountAmount: 50, // 50% off for the second coffee
    expirationDate: new Date('2023-10-15T23:59:59.999Z'),
  },
  {
    retailer: 'Fitness Center',
    description: 'Sign up for a 1-year membership and receive 10% off.',
    discountAmount: 10,
    expirationDate: new Date('2023-12-15T23:59:59.999Z'),
  },
  {
    retailer: 'Bookstore',
    description:
      'Purchase 3 or more books and get 25% off your total purchase.',
    discountAmount: 25,
    expirationDate: new Date('2023-11-01T23:59:59.999Z'),
  },
];

export const couponSeed = [
  {
    retailer: 'Elegant Attire',
    code: 'WELCOME10',
    description: '10% off for new members on their first apparel purchase.',
    discountPercentage: 10,
    expirationDate: '2024-01-01T00:00:00.000Z',
    isActive: true,
    isUsed: false,
  },
  {
    retailer: 'Happy Hour Cafe',
    code: 'HAPPYHOUR20',
    description: '20% discount on all beverages during happy hour.',
    discountPercentage: 20,
    expirationDate: '2024-06-01T00:00:00.000Z',
    isActive: true,
    isUsed: false,
  },
  {
    retailer: 'Book Bonanza',
    code: '50OFFBOOKS',
    description: '50 RMB off your next book purchase.',
    discountAmount: 50,
    expirationDate: '2023-12-31T00:00:00.000Z',
    isActive: true,
    isUsed: false,
  },
  {
    retailer: 'Spring Flowers',
    code: 'SPRINGFLING30',
    description: '30% off on all floral arrangements during spring.',
    discountPercentage: 30,
    expirationDate: '2024-05-01T00:00:00.000Z',
    isActive: true,
    isUsed: false,
  },
  {
    retailer: 'Family Fun Zone',
    code: 'FAMILY100',
    description: '100 RMB off on family entertainment packages.',
    discountAmount: 100,
    expirationDate: '2024-09-01T00:00:00.000Z',
    isActive: true,
    isUsed: false,
  },
];

export const memberSeed = [
  {
    userAccount: 'ObjectId("someUserId")', // This should be an actual ObjectId of a User document
    isForeignPassportHolder: false,
    birthday: new Date('1990-01-01'), // Example birthday
    nationality: 'Canadian',
    area: 'Nanshan District',
    phone: '1234567890',
    wechatID: 'wechat12345',
    worksOnWeekdays: true,
    hasChildren: true,
    childrenAgeGroup: ['2-3 years', '6-11 years'],
    interestedActivities: [
      'Weekday coffee functions',
      'Weekend social activities',
      'Cooking activities',
    ],
    leadActivityDescription: 'Organizing weekly cooking classes.',
    leadActivity: true,
    activity: 'Cooking',
    learnedAboutSWIC: ['Friends', 'WeChat'],
    feedback: 'Great community!',
    acceptedTermsAndConditions: true,
    memberDetails: {
      coupons: ['ObjectId("someCouponId1")', 'ObjectId("someCouponId2")'],
      discounts: ['ObjectId("someDiscountId1")', 'ObjectId("someDiscountId2")'],
    },
    // Assuming your schema has these fields for signupDate and membershipExpirationDate
    signupDate: new Date(),
    membershipExpirationDate: new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ), // One year from now
  },
];
