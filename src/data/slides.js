
import image2 from "../assets/sandwiches_edit.png";
import image1 from "../assets/dosa_top_edit.png";
import image3 from "../assets/north_indian_edit.png";
import image4 from "../assets/chinese_edit.png";
import image5 from "../assets/fast_food_edit.png";
import image6 from "../assets/all_edit.png";

export const slides = [
  {
    id: 1,
    title: "Green Goddess Chicken Salad",
    price: "$32",
    priceColor: "text-orange-500",
    bg: "bg-amber-50",
    centerImg: image5,
    orbitImgs: [image1, image2, image3, image4],
    description:
      "It is a non vegetarian salad which consists of the green goddess dressing...",
  },
  {
    id: 2,
    title: "Asian Cucumber Salad",
    price: "$35",
    priceColor: "text-green-500",
    bg: "bg-green-50",
    centerImg: image6,
    orbitImgs: [image1, image2, image3, image4],
    description:
      "Asian cucumber salad recipe made with crunchy cucumber, onion...",
  },
];
