import { IPopupProps } from '@/interfaces/IPopupProps';
import styles from './popup.module.css';

const Popup: React.FC<IPopupProps> = ({ handleInfoClick }) => {
  return (
    <ul className={styles['popup']}>
      <li>Advanced search:</li>
      <li>surround phrases with quotes (") for exact match;</li>
      <li>
        prepend words or phrases that must appear with a + symbol, eg: +bitcoin;
      </li>
      <li>prepend words that must not appear with a - symbol, eg: -bitcoin;</li>
      <li>
        alternatively, you can use the AND / OR / NOT keywords, and optionally
        group these with parenthesis, eg: crypto AND (ethereum OR litecoin) NOT
        bitcoin;
      </li>
      <button onClick={handleInfoClick}>Close</button>
    </ul>
  );
};

export default Popup;
