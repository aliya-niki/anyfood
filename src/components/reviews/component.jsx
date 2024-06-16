/* eslint-disable react/jsx-key */
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewsIds }) => {
  if (!reviewsIds) {
    return;
  }
  
  return (
    <ul>
      {reviewsIds?.map((reviewId) => (
        <li>
          <ReviewContainer reviewId={reviewId} />
        </li>
      ))}
    </ul>
  )
};
