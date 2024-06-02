import { useReducer } from "react";
import { ReviewRating } from "../review-rating/component";

const DEFAULT_REVIEW_STATE = {
  rating: 2,
  name: '',
  description: '',
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'setName':
      return {...state, name: payload};
    case 'setDescription':
      return {...state, description: payload};
    case 'setRating':
      return {...state, rating: payload};
    case 'reset':
      return {...DEFAULT_REVIEW_STATE};
    default:
      return state;
  }
};

export const AddReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_REVIEW_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({type: 'reset'});
  };

  return (
    <form action="#">
      <p>
        <label>
          Ваше имя: 
          <input 
            type="text" 
            name="name"     
            onChange={({target}) => dispatch({type: 'setName', payload: target.value})}
          />
        </label>
      </p>
      <label>
        Отзыв: 
        <textarea
          name="description"
          placeholder="Введите текст отзыва"
          onChange={({target}) => dispatch({type: 'setDescription', payload: target.value})}
        />
      </label>
      <ReviewRating
        checkedValue={form.rating}
        maxRating={5}
        onChange={(rating) => dispatch({type: 'setRating', payload: rating})}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Сохранить
      </button>
    </form>
  )
};
