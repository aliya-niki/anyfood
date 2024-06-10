/* eslint-disable react/jsx-key */
import { Review } from "../review/component";

export const Reviews = ({ reviewsIds }) => {
  return (
    <ul>
      {reviewsIds?.map((reviewId) => (
        <li>
          <Review reviewId={reviewId} />
        </li>
      ))}
    </ul>
  )
};
