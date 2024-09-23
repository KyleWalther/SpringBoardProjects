import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";




it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


const photos = [
  { src: "/test1.jpg", caption: "Photo 1" },
  { src: "/test2.jpg", caption: "Photo 2" },
  { src: "/test3.jpg", caption: "Photo 3" }
];


// Smoke Test: Does it render without crashing?
test('Carousel renders without crashing', () => {
  render(<Carousel photos={photos} title="Test Carousel" />);
});

// Snapshot Test: Does the UI match the last snapshot?
test('Carousel matches snapshot', () => {
  const { asFragment } = render(
    <Carousel photos={photos} title="Test Carousel" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('left arrow moves to the previous image', () => {
  const { getByText, getByRole } = render(<Carousel photos={photos} title="Test Carousel" />);

  // Move forward to the second image by clicking the right arrow
  const rightArrow = getByRole('img', { hidden: true }); // Assuming an SVG icon
  fireEvent.click(rightArrow);

  // Ensure we are now on the second image
  expect(getByText("Image 2 of 3.")).toBeInTheDocument();

  // Click the left arrow to move back to the first image
  const leftArrow = getByRole('img', { hidden: true }); // Same assumption for left arrow
  fireEvent.click(leftArrow);

  // The current image should now be the first one
  expect(getByText("Image 1 of 3.")).toBeInTheDocument();
});





