import { Car } from "../types/types";
import img from "../../public/images/copper.png";

const imageUrlString: string = img.src;

export const cars: Car[] = [
  {
    id: 1,
    name: "Mini Cooper 2020",
    imageUrl: imageUrlString,
    nextReservation: "11/07",
    status: "Available",
    rating: 4,
  },
  {
    id: 2,
    name: "Mini Cooper 2020",
    imageUrl: imageUrlString,
    nextReservation: "11/07",
    status: "Reserved",
    rating: 4,
  },
  {
    id: 3,
    name: "Mini Cooper 2020",
    imageUrl: imageUrlString,
    nextReservation: "11/07",
    status: "Available",
    rating: 4,
  },
  {
    id: 4,
    name: "Mini Cooper 2020",
    imageUrl: imageUrlString,
    nextReservation: "11/07",
    status: "Reserved",
    rating: 4,
  },
  {
    id: 5,
    name: "Mini Cooper 2020",
    imageUrl: imageUrlString,
    nextReservation: "11/07",
    status: "Available",
    rating: 4,
  },
];
