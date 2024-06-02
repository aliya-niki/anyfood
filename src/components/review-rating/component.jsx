/* eslint-disable react/jsx-key */
export const ReviewRating = ({checkedValue, maxRating, onChange}) => {
  return (
    <div>
      Оценка: 
      {new Array(maxRating).fill(null).map((_, index) => (
        <label>
          <input
            type="radio"
            name="rating"
            value={index + 1}
            defaultChecked={index + 1 === checkedValue}
            onChange={({target}) => onChange(Number(target.value))}
          />
          {index + 1}
        </label>
        )
      )}
    </div>
  );
};
