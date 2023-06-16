import React, { useEffect, useState } from "react";
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      id: 0,
      name: "Prachi",
      city: "Bangalore",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      rating: [1, 1, 1, 1, 1],
    },
    {
      id: 1,
      name: "Prachi1",
      city: "Bangalore",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      rating: [1, 1, 1, 1],
    },
    {
      id: 2,
      name: "Prachi2",
      city: "Bangalore",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      rating: [1, 1, 1, 1, 1],
    },
  ];
  const [revId, setRevId] = useState(0);
  useEffect(() => {
    for (let i = 0; i < reviews.length; i++) {
      let el = document.getElementById(i);
      el.className = "carousel-dot";
    }
    const carousel = document.getElementById(revId);
    carousel.className = "carousel-dot-clicked";
  }, [revId]);

  return (
    <div className="review-sec">
      <h1>User Reviews</h1>
      <div className="rating">
        {reviews[revId].rating.map((r) => {
          if (r === 1) {
            return (
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>rating is {reviews[revId].rating.length}</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          }
        })}
      </div>
      <div className="review-txt">
        <img src="qoutes.png" alt="qoutes" style={{ marginBottom: "auto" }} />
        <p>{reviews[revId].review}</p>
        <img
          src="qoutes.png"
          alt="qoutes"
          className="align-bottom"
          style={{ transform: "rotateY(180deg)", marginTop: "auto" }}
        />
      </div>
      <p>
        {reviews[revId].name}, {reviews[revId].city}
      </p>
      <div className="carousel-cont">
        {reviews.map((review) => {
          return (
            <div
              className="carousel-dot"
              onClick={() => {
                setRevId(review.id);
              }}
              id={review.id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
