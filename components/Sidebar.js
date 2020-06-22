import Back from 'components/Back';
import styles from './Sidebar.module.scss';

export default () => {
  return (
    <div className={styles.sidebar}>
      <Back />
      <h3>Projects</h3>
      <ul>
        <li>
          <a>TAMM</a>
        </li>
        <li>
          <a>OtsukaiChain</a>
        </li>
        <li>
          <a>Nolack</a>
        </li>
        <li>
          <a>Desribe</a>
        </li>
      </ul>
    </div>
  );
}