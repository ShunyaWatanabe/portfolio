import ContactLinks from 'components/ContactLinks';
import NavLinks from 'components/NavLinks';
import MainLogo from './MainLogo';

export default (props) => {
  const { hideNavLinks, hideContactLinks } = props;
  return (
    <header id="main-header">
      <MainLogo />
      {!hideNavLinks && <NavLinks />}
      {!hideContactLinks && <ContactLinks />}
    </header>
  )
}
