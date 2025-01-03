import styles from './index.module.scss';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import { formatTime } from '@/utils/deal_time';

const TimeControl = ({
  currentTimeMS,
  isPlay,
  setIsPlay,
}: {
  currentTimeMS: number;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClickPlayButton = () => {
    setIsPlay(prev => !prev);
  };

  return (
    <div className={styles['timeline-control']}>
      <div className={styles['timeline-control-button']} onClick={handleClickPlayButton}>
        {isPlay ? <IoMdPause className="text-[#c3c3c3]" /> : <IoMdPlay className="text-[#c3c3c3]" />}
      </div>
      <span className={styles['timeline-control-time']}>{formatTime(currentTimeMS)}</span>
    </div>
  );
};

export default TimeControl;
