import { FaCircle } from "react-icons/fa";

const Star = () => {
  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getIndex = getRandomIndex(1, 5);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i;

        return (
          <label>
            <FaCircle
              values={ratingValue}
              className="star"
              color={ratingValue <= getIndex ? "#ffc107" : "#e4e5e9"}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Star;

// 리턴문에 별 5개를 보여준다.
// 각 별에 value를 누적해서 star에 표시한다.
// 누적값은  5개 이하여야 한다.
// 누적값은 랜덤해야 한다.
