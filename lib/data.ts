import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug:any) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id:any) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};


export const  contactDetailsSingle = '78894 22838'

export const carRentalVehicles = [
  {
    id:1,
    cardImage: '/Cars/Fortuner.webp',
    vehicleName: 'Fortuner',
    pricePerDay:5000,
    distanceTravelled:4000,
    gearShiftType: 'Auto',
    personCapacity:4,
    fuelType: 'Petrol',
    bookNowLink:'1',
    baggageCapacity:3
  },
  {
    id:2,
    cardImage: '/Cars/12-Seater-Tempo.webp',
    vehicleName: '12 Seater Winger',
    pricePerDay:5000,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:12,
    fuelType: 'Petrol',
    bookNowLink:'2',
    baggageCapacity:7
  },
  {
    id:3,
    cardImage: '/Cars/13Seater-winger.webp',
    vehicleName: '13 Seater Winger',
    pricePerDay:5500,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:12,
    fuelType: 'Petrol',
    bookNowLink:'3',
    baggageCapacity:8
  },
  {
    id:4,
    cardImage: '/Cars/Etios.webp',
    vehicleName: 'Etios',
    pricePerDay:2600,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:3,
    fuelType: 'Petrol',
    bookNowLink:'4',
    baggageCapacity:3
  },
  {
    id:5,
    cardImage: '/Cars/innova-crysta.webp',
    vehicleName: 'Innova Crysta',
    pricePerDay:4000,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:6,
    fuelType: 'Petrol',
    bookNowLink:'5',
    baggageCapacity:4
  },
  {
    id:6,
    cardImage: '/Cars/swift-dezire.webp',
    vehicleName: 'Swift Dezire',
    pricePerDay:2600,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:3,
    fuelType: 'Petrol',
    bookNowLink:'6',
    baggageCapacity:3
  },
  {
    id:7,
    cardImage: '/Cars/tavera.webp',
    vehicleName: 'Tavera',
    pricePerDay:2800,
    distanceTravelled:7000,
    gearShiftType: 'Manual',
    personCapacity:7,
    fuelType: 'Petrol',
    bookNowLink:'7',
    baggageCapacity:5
  },
]