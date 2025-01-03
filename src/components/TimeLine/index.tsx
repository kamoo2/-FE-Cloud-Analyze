import styles from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import TimeControl from './TimeControl';
import { useInterval } from 'usehooks-ts';
import axios from 'axios';

const TimeLine = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalTimeMS, setTotalTimeMS] = useState<number>(10000);
  const [width, setWidth] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [positionX, setPositionX] = useState<number>(0);
  const [period, setPeriod] = useState<number>(10);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  useEffect(() => {
    if (domRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (!domRef.current) return;

        setWidth(domRef.current.getBoundingClientRect().width);
      });
      resizeObserver.observe(domRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  // currentTime에 맞게 positionX를 업데이트
  useEffect(() => {
    // currentTime에 맞는 positionX 계산
    const newPositionX = (currentTime / totalTimeMS) * width;
    setPositionX(newPositionX);
  }, [currentTime, width, totalTimeMS]);

  useInterval(
    () => {
      setCurrentTime(prev => {
        const newTimeMS = prev + period;

        // 마지막에 도달하면 Time Interval 중지
        if (newTimeMS > totalTimeMS) {
          setIsPlay(false);
        }
        return newTimeMS > totalTimeMS ? totalTimeMS : newTimeMS; // totalTimeMS를 넘지 않도록 설정
      });
    },
    isPlay ? period : null,
  );

  const handleClick = async (e: React.MouseEvent) => {
    if (!domRef.current) return;

    const rect = domRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // 클릭한 위치의 x좌표

    const newTimeMS = (clickX / width) * totalTimeMS;
    setIsPlay(false);
    setCurrentTime(newTimeMS);

    setPositionX(clickX); // xPosition 상태 업데이트

    try {
      const response = await axios.post('http://localhost:8000/api/v1/analyze/frame/extract', { timeMS: newTimeMS });

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:');
    }
  };

  return (
    <div ref={domRef} className={styles['timeline-wrapper']}>
      <TimeControl setIsPlay={setIsPlay} currentTimeMS={currentTime} isPlay={isPlay} />
      <div className={styles['timeline-area']} onClick={handleClick}>
        <div
          className={styles['timeline-marker']}
          style={{
            transform: `translateX(${positionX}px)`,
            transition: 'transform 0.1s ease',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimeLine;
