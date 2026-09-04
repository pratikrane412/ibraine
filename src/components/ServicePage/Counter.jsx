import React, { useEffect, useState, useRef } from 'react';
import { useInView, useSpring, useTransform } from 'framer-motion';

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const prefix = value.match(/^[^\d]+/)?.[0] || '';
  const suffix = value.match(/[^\d]+$/)?.[0] || '';

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(spring, (current) => Math.floor(current));
  const [renderedValue, setRenderedValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    } else {
      spring.set(0);
    }
  }, [isInView, spring, numericValue]);

  useEffect(() => {
    return displayValue.on('change', (latest) => setRenderedValue(latest));
  }, [displayValue]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{renderedValue}{suffix}
    </span>
  );
}