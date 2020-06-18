import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io";

const contactLinks = [
  {
    key: 'linkedIn',
    icon: <IoLogoLinkedin />,
    to: 'https://www.google.com',
  },
  {
    key: 'github',
    icon: <IoLogoGithub />,
    to: 'https://www.google.com',
  },
  {
    key: 'email',
    icon: <IoIosMail />,
    to: 'https://www.google.com',
  }
]

export default () => {
  return (
    <div id="contact-links">
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
      <a href={to} className="contactIcon"> {icon} </a>
    </li>
  )
}

