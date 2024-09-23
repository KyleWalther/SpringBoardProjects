import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Increment currCardIdx by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  // Decrement currCardIdx by 1 (for the left arrow)
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">

        {/* Conditionally render the left arrow only if we are not on the first image */}
        {currCardIdx > 0 && (
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
            aria-label="left arrow"
          />
        )}

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />

        {/* Conditionally render the right arrow only if we are not on the last image */}
        {currCardIdx < total - 1 && (
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
            aria-label="right arrow"
          />
        )}

      </div>
    </div>
  );
}

export default Carousel;

