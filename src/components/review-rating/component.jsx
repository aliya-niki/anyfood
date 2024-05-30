/* eslint-disable react/jsx-key */
const RATING_NUMBERS = [1, 2, 3, 4, 5];

export const ReviewRating = ({checkedValue, onChange}) => {
  return (
    <div>
      Оценка: 
      {RATING_NUMBERS.map((ratingNumber) => (
        <label>
          <input
            type="radio"
            name="rating"
            value={ratingNumber}
            defaultChecked={ratingNumber === checkedValue}
            onChange={onChange}
          />
          {ratingNumber}
        </label>
        )
      )}
    </div>
  );
};
