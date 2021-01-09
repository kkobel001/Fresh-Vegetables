import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SliderImages } from './SliderImages';

const StyledSrapperSlider = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;
const StyledImage = styled.div`
  height: 500px;
  border-radius: 10px;
`;
const StyledArrowBackIosIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border-radius: 2px sollid #000;
`;
const StyledRightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = [slides.length];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <StyledSrapperSlider>
      <StyledArrowBackIosIcon>
        <ArrowBackIosIcon onClick={prevSlide} />
      </StyledArrowBackIosIcon>
      <StyledRightIcon>
        <ChevronRightIcon onClick={nextSlide} />
      </StyledRightIcon>
      {SliderImages.map(slide => (
        <div className={slide.id === current ? '<slideactive />' : '<slide />'} key={slide.id}>
          {slide.id === current && (
            <StyledImage>
              <img src={slide.image} alt="banner" />
            </StyledImage>
          )}
        </div>
      ))}
    </StyledSrapperSlider>
  );
}

Slider.propTypes = {
  slides: PropTypes.shape([]).isRequired,
};
export default Slider;
