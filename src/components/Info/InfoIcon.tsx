import styles from './infoIcon/infoIcon.module.css';
import { FaInfo } from 'react-icons/fa';

const InfoIcon: React.FC = () => {
  return <FaInfo className={styles['info-icon']} />;
};
export default InfoIcon;
