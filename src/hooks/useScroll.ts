import { MutableRefObject, useEffect, useState } from "react";

export const useScroll = (scrollRef: MutableRefObject<Element | null>) => {
  const [endOfScroll, setEndOfScroll] = useState(false);

  useEffect(() => {
    const scroll = scrollRef.current;
    scroll?.addEventListener('scroll', updateEndOfScroll);

    return () => {
      scroll?.removeEventListener('scroll', updateEndOfScroll);
    }
  }, [scrollRef.current]);

  const updateEndOfScroll = () => {
    setEndOfScroll(getDistanceFromBottom() === 0);
  };

  const getDistanceFromBottom = (): number => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
      return Math.ceil(scrollHeight) - Math.ceil(scrollTop + clientHeight)
    }

    return Infinity;
  };

  const scrollBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return {
    scrollBottom,
    endOfScroll,
    updateEndOfScroll,
    getDistanceFromBottom
  }
};