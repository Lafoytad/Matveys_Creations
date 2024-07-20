"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./sliderRow.module.scss";
import Image from "next/image";

interface ISliderProps {
  images: string[];
}

const SliderRow: React.FC<ISliderProps> = ({ images }) => {
  const [counter, setCounter] = useState<number>(1);
  const [transform, setTransform] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter !== images.length - 1) {
            setTransform(485 * prevCounter);
            return prevCounter + 1;
          } else {
            setTransform(0);
            return 1;
          }
        });
      }, 15000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const scroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (counter !== images.length - 1) {
      setCounter(counter + 1);
      setTransform(485 * counter);
    } else {
      setCounter(1);
      setTransform(0);
    }

    const newInterval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter !== images.length - 1) {
          setTransform(485 * prevCounter);
          return prevCounter + 1;
        } else {
          setTransform(0);
          return 1;
        }
      });
    }, 15000);

    intervalRef.current = newInterval;
  };

  return (
    <>
      <div className={styles.slider}>
        {images.map((item, index) => (
          <Image
            style={{ transform: `translateX(-${transform}px)` }}
            key={index}
            src={item}
            alt="#"
            width={485}
            height={307}
          />
        ))}
      </div>
      <div onClick={scroll} className={styles.arrow}></div>
    </>
  );
};

export default SliderRow;
