//import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, useSpring } from 'react-spring'
import './CulturalPage.css'

import Img0 from '../../images/events/img0.jpg'
import Img1 from '../../images/events/img1.jpg'
import Img2 from '../../images/events/img2.jpg'
import Img3 from '../../images/events/img3.jpg'

const slides = [
  { id: 0, url: 'https://res.cloudinary.com/green-hearts/image/upload/v1606811012/jbel0rai2ygsxie7aevi.jpg' },
  { id: 1, url: 'https://res.cloudinary.com/green-hearts/image/upload/v1606737983/ykj59flwugwegc5fxlxg.jpg' },
  { id: 2, url: 'https://res.cloudinary.com/green-hearts/image/upload/v1606737280/lhnldf0uivqm5mridagn.jpg' },
  { id: 3, url: 'https://res.cloudinary.com/green-hearts/image/upload/v1606730393/iwcu3ufalsrvetrkuy1g.jpg' }
]

const items = [
  {
    id: 0,
    event: 'JUST A MINUTE',
    url: 'https://www.gstatic.com/webp/gallery/1.jpg'
  },
  {
    id: 1,
    event: 'LE CHEF',
    url: 'https://www.gstatic.com/webp/gallery/1.jpg'
  },
  {
    id:2,
    event: 'DEBATE',
    url: 'https://www.gstatic.com/webp/gallery/1.jpg'
  }
]

const CulturalPage = () => {
  const [index, set] = useState(0)
  const [click, setClick] = useState(-1)
  const [hover, setHover] = useState(-1)
  const perc = (100 - items.length * 0.5) / items.length
  const props1 = useSpring({
    opacity: (click!==-1)?1:0,
    transform: (click!==-1)?'scale(1)':'scale(0.8)'
  })
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {opacity: 0},
    config: config.molasses
  })
  useEffect(() => void setInterval(() => set((state) => (state + 1) % 4), 5000), [])

  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          class="bg"
          style={{ ...props, backgroundImage: `url(${item.url})` }}>
          {click === -1 ? (
            items.map((item) => (
              <div
                className="event"
                onClick={() => setClick(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(-1)}
                style={{
                  height: `${perc}%`,
                  backgroundImage: hover === item.id ? `url(${item.url})` : null,
                  fontSize: `${perc*30/100}vh`
                }}>
                 {item.event}
              </div>
            ))
          ) : (
            <animated.div
              className="card"
              style={{
                ...props1,
                backgroundImage: `url(${items[click].url})`,
              }}>

              <button onClick={() => setClick(-1)} className="close"> Close </button>
              <h1 className="innerheading">{items[click].event} </h1>

            </animated.div>
          )}
        </animated.div>
      ))}
    </div>
  )
}

export default CulturalPage;
