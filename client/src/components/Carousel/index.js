import React, { useState } from 'react';
import "./style.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Suede Covered Book',
    src:     './pictures/Suede-Covered-Book.png'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Stained Glass Star',
    src:     './pictures/Stained-glass-star.jpg'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Pendant with stone',
    src:     './pictures/Pendant-withstone.jpg'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} style={{display:'block', marginRight:'auto', marginLeft:'auto', width:'auto', height:'99%'}}/>
        
        <CarouselCaption className="picname" color ="#effded" font-size="20%" captionText={item.caption}  />
      </CarouselItem>
    );
  });

  return (
    <div className ="container">
      <style>
        {
          `.custom-tag {
            
              max-width: 100%;
              height: 500px;
              background: black;
            
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;