import styles from './ProjectTag.module.scss';

export default (props) => {
  const { label, type } = props;
  return (
    <div className={styles.projectTag} >
      <h5>
        {label || 'label'}
      </h5>
      <p>
        {type || 'type'}
      </p>
    </div>
  )
}