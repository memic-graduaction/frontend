import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroller } from 'react-scroll';
import Homepage from './HomePage/HomePage';
import Rankpage from './RankPage/RankPage';
import HomeBtn from '../assets/HomeBtn.png';

function FullPage() {
    const rankPageOffset = 500;
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    let scrolling: NodeJS.Timeout | undefined;

    const handleScroll = () => {
        const scrolledDown = window.scrollY > 500;
        setIsScrollingDown(scrolledDown);

        if (scrolledDown) {
            clearTimeout(scrolling);
        } else {
            clearTimeout(scrolling);
            scrolling = setTimeout(() => {
                scrolling = undefined;

                if (window.scrollY > 500) {
                    scroller.scrollTo(rankPageOffset, {
                        duration: 500,
                        delay: 0,
                        smooth: 'easeInExpo',
                    });
                }
            }, 250);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            {window.scrollY > rankPageOffset && (
            <Link
                to="homePage"
                spy
                smooth
                offset={0}
                duration={500}
                delay={0}
                isDynamic
                ignoreCancelEvents={false}
                activeClass={isScrollingDown ? '' : 'active'}
                style={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: 1 }}
            >
                <img src={HomeBtn} alt="Home Button" style={{ width: '50px', height: '50px' }} />
            </Link>
            )}
        </div>
    );
}

export default FullPage;
