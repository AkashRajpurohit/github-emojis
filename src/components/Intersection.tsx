import React, { useEffect, useRef } from 'react'

export const Intersection = ({ onVisible }: { onVisible: Function}) => {
  const target = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onVisibleRef = useRef(onVisible);

  useEffect(() => {
    onVisibleRef.current = onVisible;
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries.some(e => e.isIntersecting);

      if(isIntersecting) {
        onVisibleRef.current();
      }
    });

    observer.observe(target.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={target} />;
}