import { Button } from '@zendeskgarden/react-buttons';
import styles from './Button.module.scss';

export default (props) => {
  console.log(styles);
  return (
    <Button {...props} className={styles.button}>
      {props.children}
    </Button>
  );
}