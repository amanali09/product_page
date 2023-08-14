import { useState } from "react";

const useSwipe = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = ({ length, active, setActive }) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      let next = active + 1;
      let prev = active - 1;
      if (isRightSwipe && prev >= 0) {
        setActive(prev);
      }
      if (isLeftSwipe && next < length) {
        setActive(next);
      }
    }
  };

  return { onTouchStart, onTouchEnd, onTouchMove };
};

export default useSwipe;
