import { useEffect, useRef } from 'react';

export const ScrollProgressBar = () => {
  const scrollBarRef = useRef();

  useEffect(() => {
    const handleScrollBar = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;

      scrollBarRef.current.style.transform = `scaleX(${scrolled})`;
    };

    window.addEventListener("scroll", handleScrollBar);

    return () => window.removeEventListener('scroll', handleScrollBar);
  }, []);


  return (
    <div className="progress-wrapper" >
      <div className="progress" ref={scrollBarRef} ></div>
    </div>
  )
};
