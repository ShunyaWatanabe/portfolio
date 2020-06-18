import Link from 'next/link';
import ContactLinks from 'components/ContactLinks';

const navLinks = [
  {
    key: 'home',
    label: 'home',
    to: '/',
  },
  {
    key: 'about',
    label: 'about',
    to: '/',
  },
  {
    key: 'projects',
    label: 'projects',
    to: '/',
  },
  {
    key: 'contact',
    label: 'contact',
    to: '/',
  },
]

export default () => {
  return (
    <header id="main-header">
      <div id="main-logo">
        <img src="/logo.png"/>
      </div>
      <nav id="navigation">
        <ul>
          {navLinks.map(navLink => 
            <NavLink 
              key={navLink.key} 
              label={navLink.label}
              to={navLink.to}
            />
          )}
        </ul>
      </nav>
      <ContactLinks />
    </header>
  )
}

const NavLink = (props) => {
  const { label, to } = props;
  return (
    <li>
      <Link href={to} >
        <a> {label} </a>
      </Link>
    </li>
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