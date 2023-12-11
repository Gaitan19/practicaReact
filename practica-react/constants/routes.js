import { v4 } from "uuid";

export const routes = [
  {
    id: v4(),
    text: "home",
    link: "/",
  },
  {
    id: v4(),
    text: "users",
    link: "/Users",
  },
];
