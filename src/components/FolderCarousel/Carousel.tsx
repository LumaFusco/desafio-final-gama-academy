import React, { useState } from 'react'
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import Image1 from '../../assets/images/1.jpg'
import Image2 from '../../assets/images/2.jpg'
import Image3 from '../../assets/images/3.jpg'

const images = [Image1, Image2, Image3]

function Carousel() {
  const [currImg, setCurrImg] = useState(0)

  return (
    <div className="carouselSection">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg]})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1)
          }}
        >
          <ArrowBackIosIcon style={{fontSize: 30}}/>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1)
          }}
        >
          <ArrowForwardIosIcon style={{fontSize: 30}}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel
