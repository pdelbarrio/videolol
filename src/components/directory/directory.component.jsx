import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "Classic Comedies",
    imageUrl:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1635969328/videolol/nomechilles1_s54g9z.png",
    route: "shop/classic%20comedy",
  },
  {
    id: 2,
    title: "Modern Comedies",
    imageUrl:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1635928443/videolol/symbol_ar62cm.png",
    route: "shop/modern%20comedies",
  },
  {
    id: 3,
    title: "Spanish Comedies",
    imageUrl:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1635928573/videolol/aquihuele_fuyll3.jpg",
    route: "shop/spanish%20comedies",
  },
  {
    id: 4,
    title: "Spoof Movies",
    imageUrl:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1635928704/videolol/nakedgun_mondv2.jpg",
    route: "shop/spoof-movies",
  },
  {
    id: 5,
    title: "Horror Comedies",
    imageUrl:
      "https://res.cloudinary.com/getoutbcn/image/upload/v1635928912/videolol/shaun_s34hys.jpg",
    route: "shop/horror%20comedies",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
