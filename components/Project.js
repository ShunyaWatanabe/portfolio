import styles from './project.module.scss';
import ContactLinks from 'components/ContactLinks';
import ProjectTag from 'components/ProjectTag';

export default (props) => {
  const { title, description, src, children } = props;
  return (
    <div className={styles.project}>
      <h1 className="title">
        { title || 'Project Title'}
      </h1>
      <div className={styles.projectLinks}>
        <ContactLinks />
      </div>
      <div className={styles.projectTags}>
        <ProjectTag label="React Native, Firebase" type="Technologies" />
        <ProjectTag label="Mobile Application" type="Services" />
        <ProjectTag label="26 January 2019" type="Date" />
      </div>
      <img 
        src={src}
        color="white" 
        className={styles.projectImg}
      />
      <p className="description">
        { description || 'Ea esse ad nostrud officia ipsum consectetur aliqua. Labore ullamco in ex excepteur laboris consequat id ad id. Nostrud cillum id magna exercitation aliqua nostrud quis enim dolor irure ex labore. Est officia elit ut ea.'}
      </p>
      { children }
    </div>
  )
}