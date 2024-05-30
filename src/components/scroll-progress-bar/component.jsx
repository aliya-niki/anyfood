import { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;

      setScrolled(scrolled);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  }, []);


  return (
    <div className="progress-wrapper" >
      <div className="progress" style={{ transform: `scaleX(${scrolled})` }}></div>
    </div>
  )
};
