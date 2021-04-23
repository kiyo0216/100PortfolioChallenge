import React from 'react'

class ItemData {
  title: string;
  image: string;
  link: string;
  description: string;
  technology: string[];
}

export const ItemDatas: ItemData[] = [
  {
    title: "Fukakouryoku",
    image: "/global/Fukakouryoku 5.png",
    link: "www.google.com",
    description: "Description of Fukakouryoku",
    technology: ["HTML", "CSS", "JavaScript", "React", "GatsbyJS"]
  }
]