import Back from 'components/Back';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

const links = [
  {
    url: '/projects/tamm',
    title: 'TAMM',
  },
  {
    url: '/projects/otsukaichain',
    title: 'OtsukaiChain',
  },
  {
    url: '/projects/nolack',
    title: 'Nolack',
  },
  {
    url: '/projects/describe',
    title: 'Describe',
  },
]

export default () => {
  return (
    <div className={styles.sidebar}>
      <Back />
      <h3>Projects</h3>
      <ul>
        {
          links.map(link => {
            return (
              <li key={link.title} >
                <Link href={link.url}>
                  <a> {link.title} </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}