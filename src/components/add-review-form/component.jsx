/* eslint-disable react/jsx-key */
import { useReducer } from "react";
import { ReviewRating } from "../review-reting/component";

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
      <label>Ваш отзыв: 
        <textarea
          name="description"
          placeholder="Введите текст отзыва"
          onChange={({target}) => dispatch({type: 'setDescription', payload: target.value})}
        />
      </label>
      <ReviewRating
        checkedValue={form.rating} 
        onChange={({target}) => dispatch({type: 'setRating', payload: Number(target.value)})}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Сохранить
      </button>
    </form>
  )
};
