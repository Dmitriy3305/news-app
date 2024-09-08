import { InfoIconProps } from '../../interfaces/IInfoIconProps';
import styles from './infoIcon.module.css';
import { FaInfo } from 'react-icons/fa';

const InfoIcon: React.FC<InfoIconProps> = ({ handleInfoClick }) => {
  return <FaInfo className={styles['info-icon']} onClick={handleInfoClick} />;
};
export default InfoIcon;
