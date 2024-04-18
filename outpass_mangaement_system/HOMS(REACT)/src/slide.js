import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        style={{ width: '100%' }}
      />
    </div>
  );
};

// Usage example:
const Slide = () => {
  const images = [
    'https://rvsgroup.com/images/hostel1.jpg',
    'https://rvsgroup.com/images/hostel2.jpg',
    'https://images.shiksha.com/mediadata/images/1545637285php9gKL3v_g.jpg',
    'https://content3.jdmagicbox.com/comp/coimbatore/p4/0422px422.x422.000131616556.y4p4/catalogue/rvs-college-of-arts-and-science-sulur-coimbatore-colleges-for-bca-doe02t92w1.jpg',
    'https://www.collegebatch.com/static/clg-gallery/rvs-college-of-arts-science-coimbatore-218085.jpg',
  ];

  return <ImageSlider images={images} interval={3000} />;
};

export default Slide;
