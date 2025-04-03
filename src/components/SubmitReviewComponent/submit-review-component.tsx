import { useState, ChangeEvent, FormEvent } from 'react';

function SubmitReviewComponent() {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log({ review, rating });
  };

  const isSubmitDisabled = review.length < 50 || rating === 0;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((starValue) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={starValue}
              id={`${starValue}-stars`}
              type="radio"
              checked={rating === starValue}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${starValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                ['terribly', 'badly', 'not bad', 'good', 'perfect'][starValue - 1]
              }
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { SubmitReviewComponent };