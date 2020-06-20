import Link from 'next/link';

const linkMap = {
  home: {
    key: 'home',
    label: 'home',
    to: '/',
  },
  about: {
    key: 'about',
    label: 'about',
    to: '#about-me',
  },
  projects: {
    key: 'projects',
    label: 'projects',
    to: '#latest-works',
  },
  contact: {
    key: 'contact',
    label: 'contact',
    to: '#contact',
  },
}

export default (props) => {
  const { links } = props;
  const navLinks = (links || ['home', 'about', 'projects', 'contact']).map(l => linkMap[l]);
  return (
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