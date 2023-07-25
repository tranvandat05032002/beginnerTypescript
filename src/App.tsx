import React from "react";
import "./App.css";
import Card from "./component/Card";
import { parseCoordinate } from "./basic/function";
import { device } from "./basic/Keyof";
import { objQueryResults } from "./basic/search-compare-decoding";

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "TranVanDat",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

const travelItem: {
  image: string;
  name: string;
  totalReview: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: { wifi: boolean; parking: boolean; offer: boolean };
}[] = [
  {
    image: "abc",
    name: "DaNang",
    totalReview: 167,
    rating: 4.8,
    location: "Vietnam",
    price: 48.37,
    date: "August 5th - August 9th ",
    departure: "nmg",
    features: {
      wifi: true,
      parking: true,
      offer: true,
    },
  },
];

console.log(travelItem);

function App() {
  // const [count, setCount] = React.useState(0);
  console.log(parseCoordinate({ x: 45, y: 37 }));
  console.log(parseCoordinate(12, 3));
  // console.log(
  //   device([
  //     { name: "tb1", price: 123 },
  //     {
  //       name: "tb2",
  //       price: 456,
  //     },
  //   ])
  // );
  // console.log(object, "key") --> value
  const obj = [
    { name: "tb1", price: 123 },
    {
      name: "tb2",
      price: 456,
    },
  ];
  console.log(device(obj, "name"));
  console.log(objQueryResults);
  function displayReview(
    lenReview: number,
    nameReview: string,
    premiumUser: boolean
  ) {
    return (
      <React.Fragment>
        Review total <strong>{lenReview}</strong> | Last reviewed by{" "}
        <strong>{nameReview}</strong> {premiumUser ? "⭐️" : ""}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div>
        <div className="review">
          <div className="review-image">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <div className="review-info">
            {displayReview(
              reviews.length,
              reviews[0].name,
              reviews[0].premiumUser
            )}
          </div>
        </div>
      </div>
      <Card
        title="Title"
        name="Name"
        description="Description"
        image="image.jpg"
      ></Card>
    </React.Fragment>
  );
}

export default App;
