import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroller } from 'react-scroll';
import Homepage from './HomePage/HomePage';
import Rankpage from './RankPage/RankPage';
import HomeBtn from '../assets/HomeBtn.png';

function FullPage() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const handleMouseWheel = (event) => {
    // 마우스 휠의 방향 감지
    if (event.deltaY > 0) {
      // 아래로 스크롤
      scroller.scrollTo(1000, {
        duration: 300,
        delay: 0,
        smooth: 'easeInOutQuad',
      });
      setIsScrollingDown(true);
    } else if (event.deltaY < 0) {
      // 위로 스크롤
      scroller.scrollTo(0, {
        duration: 300,
        delay: 0,
        smooth: 'easeInOutQuad',
      });
      setIsScrollingDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleMouseWheel);
    return () => {
      window.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div>
      <Element name="homePage">
        <Homepage />
      </Element>
      <Element name="rankPage">
        <Rankpage />
      </Element>
      {window.scrollY >= 1000 && (
        <Link
          to="homePage"
          spy
          smooth
          offset={0}
          duration={500}
          delay={0}
          isDynamic
          ignoreCancelEvents={false}
          activeClass={isScrollingDown ? 'active' : ''}
          style={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: 1 }}
        >
          <img src={HomeBtn} alt="Home Button" style={{ width: '50px', height: '50px' }} />
        </Link>
      )}
    </div>
  );
}

export default FullPage;
