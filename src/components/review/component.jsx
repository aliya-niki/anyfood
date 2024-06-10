import { useSelector } from "react-redux";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => state.review.entities[reviewId]);

  if (!review) {
    return;
  }

  const { text } = review;

  return <p>{text}</p>;
};
