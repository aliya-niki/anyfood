import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsById } from "../../redux/entities/review/thunks/get-reviews-by-id";
import { Reviews } from "./component";
import { selectRestaurantReviewsIds } from "../../redux/entities/restaurant/selectors";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewsIds = useSelector((state) => selectRestaurantReviewsIds(state, restaurantId));

  useEffect(() => {
    dispatch(getReviewsById({restaurantId}));
  }, [dispatch, restaurantId]);

  if (!reviewsIds) {
    return;
  }

  return (
    <Reviews reviewsIds={reviewsIds}/>
  )
};
