import { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScrollBar = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;

      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScrollBar);

    return () => window.removeEventListener('scroll', handleScrollBar);
  }, []);


  return (
    <div className="progress-wrapper" >
      <div className="progress" style={{ transform: `scaleX(${scrolled})` }}></div>
    </div>
  )
};
