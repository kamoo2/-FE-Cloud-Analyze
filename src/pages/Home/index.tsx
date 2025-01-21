import axios from 'axios';
import styles from './index.module.scss';

const HomePage = () => {
  const handleClick = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8000/api/v1/test/log', {
        file_path: 'C:\\shmoon\\V1', // 올바른 JSON 데이터 형식
      });

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };

  const handleClick2 = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8000/api/v1/test/lidar');

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };

  const handleClick3 = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8080/api/analyzer/gps/log');

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };

  const handleClick4 = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8080/api/analyzer/rerun/python/on');

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };

  const handleClick5 = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8080/api/analyzer/lidar/log');

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };
  const handleClick6 = async () => {
    // 수집 요청
    try {
      const response = await axios.post('http://localhost:8080/api/analyzer/can-data/log');

      console.log('Frame extracted successfully:', response.data);
    } catch (e) {
      console.error('Error extracting frame:' + e);
    }
  };

  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main-log-button']} onClick={handleClick}>
        로깅 시작
      </div>
      <div className={styles['main-log-button']} onClick={handleClick2}>
        테스트
      </div>
      <div className={styles['main-log-button']} onClick={handleClick4}>
        Python Server On
      </div>
      <div className={styles['main-log-button']} onClick={handleClick3}>
        GPS 파싱
      </div>
      <div className={styles['main-log-button']} onClick={handleClick5}>
        Lidar 파싱
      </div>
      <div className={styles['main-log-button']} onClick={handleClick6}>
        CAN Data 파싱
      </div>
      <div className={styles['main-viewer']}></div>
      {/* <div className={styles['main-timeline']}>
        <TimeLine />
      </div> */}
    </div>
  );
};

export default HomePage;
