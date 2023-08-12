import React from "react";

const FilterColor = ({ ratingFilter, setRatingFilter }) => {
  return (
    <>
      <h4>Rating</h4>
      <div className="mb-4 mt-2">
        <label htmlFor="all">
          <span className="flex gap-x-2">
            <input
              type="checkbox"
              name="one"
              id="one"
              onChange={() => setRatingFilter(!ratingFilter)}
            />
            <h6>1</h6>
          </span>
        </label>
        <label htmlFor="two">
          <span className="flex gap-x-2">
            <input
              type="checkbox"
              name="two"
              id="two"
              onChange={() => setRatingFilter(!ratingFilter)}
            />
            <h6>2</h6>
          </span>
        </label>
        <label htmlFor="three">
          <span className="flex gap-x-2">
            <input
              type="checkbox"
              name="three"
              id="three"
              onChange={() => setRatingFilter(!ratingFilter)}
            />
            <h6>3</h6>
          </span>
        </label>
        <label htmlFor="four">
          <span className="flex gap-x-2">
            <input
              type="checkbox"
              name="four"
              id="four"
              onChange={() => setRatingFilter(!ratingFilter)}
            />
            <h6>4</h6>
          </span>
        </label>
        <label htmlFor="five">
          <span className="flex gap-x-2">
            <input
              type="checkbox"
              name="five"
              id="five"
              onChange={() => setRatingFilter(!ratingFilter)}
            />
            <h6>5</h6>
          </span>
        </label>
      </div>
    </>
  );
};

export default FilterColor;
