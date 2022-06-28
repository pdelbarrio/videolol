import Directory from "./components/directory/directory";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Classic Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635969328/videolol/nomechilles1_s54g9z.png",
    },
    {
      id: 2,
      title: "Modern Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928443/videolol/symbol_ar62cm.png",
    },
    {
      id: 3,
      title: "Spanish Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928573/videolol/aquihuele_fuyll3.jpg",
    },
    {
      id: 4,
      title: "Spoof Movies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928704/videolol/nakedgun_mondv2.jpg",
    },
    {
      id: 5,
      title: "Horror Comedies",
      imageUrl:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1635928912/videolol/shaun_s34hys.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
