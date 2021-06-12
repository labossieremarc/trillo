import nat8 from '../Assets/nat-8.jpg';
import nat9 from '../Assets/nat-9.jpg';

export const descriptors = [
  "Close to the beach",
  "Breakfast Included",
  "Free Airport shuttle",
  "Free wifi in all rooms",
  "Air conditioning and heating",
  "Pets allowed",
  "We speak all languages",
  "Perfect for families",
];
export const images = [
  "/img/user-3.jpg",
  "/img/user-4.jpg",
  "/img/user-5.jpg",
  "/img/user-6.jpg",
];

export const user = [
  {
    name: "Nick Smith",
    date: "Feb 23rd, 2017",
    rating: 7.8,
    image: "/img/user-1.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
  },
  {
    name: "Hilda Gilman",
    date: "Mar 25th, 2020",
    rating: 9.3,
    image: "/img/user-2.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
  },
];

export const features = [
  {
    title: "Explore the World",
    icon: "/img/sprite.svg#icon-globe",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    title: "Meet Nature",
    icon: "/img/sprite.svg#icon-leaf",
    text: "Consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "Find Your Way",
    icon: "/img/sprite.svg#icon-compass",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.",
  },
  {
    title: "Live a Healthier Life",
    icon: "/img/sprite.svg#icon-heart-outlined",
    text: "Sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
];

export interface Tours {
  title: string;
  content: string[];
  cost: number;
}


export const popularTours = [
  {
    title: 'The Sea Explorer',
    content: ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy beds', 'Difficulty: very easy'],
    cost: 267,
  },
  {
    title: 'The Snow Adventurer',
    content: ['5 day tour', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'],
    cost: 350,
  },
  {
    title: 'The Forest Hiker',
    content: ['7 day tour', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
    cost: 425,
  },


]

export interface Story {
  heading: string;
  content: string;
  image: string;
  name: string;
}

export const tourStories = [
  {
    heading: "I had the best week ever with my Familly",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            qui voluptas cupiditate blanditiis quidem expedita, dolore doloribus
            nemo doloremque quam natus dicta perspiciatis.  Adipisicing elit. Corrupti dicta enim dolores pariatur ab in similique hic exercitationem saepe non beatae omnis ipsam atque, dolorum velit vel minima. Vel, voluptatibus!`,
    image: nat8,
    name: "Marry",
  },
  {
    heading: "I had the best week ever with my Familly",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            qui voluptas cupiditate blanditiis quidem expedita, dolore doloribus
            nemo doloremque quam natus dicta perspiciatis.  Adipisicing elit. Corrupti dicta enim dolores pariatur ab in similique hic exercitationem saepe non beatae omnis ipsam atque, dolorum velit vel minima. Vel, voluptatibus!`,
    image: nat9,
    name: "Marry",
  },
];