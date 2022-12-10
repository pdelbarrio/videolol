import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Classic Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928273/videolol/nomechilles_mgmm2e.png",
    },
    {
      id: 2,
      title: "Horror Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928912/videolol/shaun_s34hys.jpg",
    },
    {
      id: 3,
      title: "Modern Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928443/videolol/symbol_ar62cm.png",
    },
    {
      id: 4,
      title: "Spanish Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928573/videolol/aquihuele_fuyll3.jpg",
    },
    {
      id: 5,
      title: "Spoof Movies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928704/videolol/nakedgun_mondv2.jpg",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
