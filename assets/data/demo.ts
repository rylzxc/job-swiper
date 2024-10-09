import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Tiktok",
    isOnline: true,
    match: "78",
    description:
      "Looking for: Software engineers, Cloud engineers, Product, HR",
    message:
      "Thank you for applying to Tiktok, we will get back to you in a couple of days.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Mircosoft",
    match: "93",
    description:
      "Looking for: Data Analysts, Software Engineers, Sales Specialist",
    isOnline: false,
    message:
      "We loved your experiences, would you be keen for a phone interview next Tuesday at 10:00 a.m. ET?",
    image: IMAGE_02,
  },
  {
    id: 5,
    name: "Meta",
    match: "45",
    description:
      "Looking for: Customer Success Manager, Senior Product Marketing Manager, Software Engineer II",
    isOnline: false,
    message:
      "Thank you for your application, but we've reached our hiring limit this year.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Amazon",
    match: "10",
    description:
      "Looking for: Fulfillment Center Associate, Delivery Station Associate, Amazon Pharmacy Technician",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 3,
    name: "Nvidia",
    match: "76",
    description:
      "Looking for: Product Operations, Senior DevOps, Cloud Security Engineer, Chip Specialist",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "John",
    match: "76",
    description: "Looking for: Software Engineering and Data Analyst roles",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_06,
    age: "24",
    info1: "Super Engineer",
    info2: "Lives and breathes code",
    info3: "Worked at FAANGs and owns 3 startups.",
    info4: "Streams tech podcasts",
    location: "NYC",
  },
];

export default data;
