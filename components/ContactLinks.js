import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io";
import styles from './ContactLinks.module.scss';

const contactLinks = [
  {
    key: 'linkedIn',
    icon: <IoLogoLinkedin />,
    to: 'https://www.linkedin.com/in/shunya-watanabe-aba1a5151/',
  },
  {
    key: 'github',
    icon: <IoLogoGithub />,
    to: 'https://github.com/ShunyaWatanabe',
  },
  {
    key: 'email',
    icon: <IoIosMail />,
    to: 'mailto:s.watte3212@gmail.com',
  }
]

export default () => {
  return (
    <div className={styles.contactLinks}>
      <ul>
        {contactLinks.map(navLink => 
          <ContactLink 
            key={navLink.key} 
            icon={navLink.icon}
            to={navLink.to}
          />
        )}
      </ul>
    </div>
  )
}

const ContactLink = (props) => {
  const { icon, to } = props;
  return (
    <li>
      <a 
        href={to} 
        className="contactIcon"
        id="contactIcon"
        target="_blank"
        > 
        {icon}
      </a>
    </li>
  )
}

