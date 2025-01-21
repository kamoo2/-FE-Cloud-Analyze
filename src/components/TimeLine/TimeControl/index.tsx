import styles from './index.module.scss';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { formatTime } from '@/utils/deal_time';
import axios from 'axios';

const TimeControl = ({
  currentTimeMS,
  period,
  isPlay,
  setIsPlay,
}: {
  currentTimeMS: number;
  period: number;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClickPlayButton = async () => {
    if (isPlay) {
      // 재생 -> 정지
      try {
        const response = await axios.post('http://localhost:8000/api/v1/analyze/frame/stop');

        console.log('Frame extracted successfully:', response.data);
      } catch (e) {
        console.error('Error extracting frame:' + e);
      }
    } else {
      console.log(`start_time : ${currentTimeMS}`);
      console.log(`period : ${period}`);
      // 정지 -> 재생
      try {
        axios.post('http://localhost:8000/api/v1/analyze/frame/play', {
          start_time: Math.round(currentTimeMS),
          period: period,
        });

        console.log('Frame extracted successfully:');
      } catch (e) {
        console.error('Error extracting frame:' + e);
      }
    }

    setIsPlay(prev => !prev);
  };

  return (
    <div className={styles['timeline-control']}>
      <div className={styles['timeline-control-button']} onClick={handleClickPlayButton}>
        {isPlay ? <IoMdPause className="text-[#c3c3c3]" /> : <IoMdPlay className="text-[#c3c3c3]" />}
      </div>
      <span className={styles['timeline-control-time']}>{formatTime(Math.round(currentTimeMS))}</span>
    </div>
  );
};

export default TimeControl;
