import ContactLinks from 'components/ContactLinks';
import NavLinks from 'components/NavLinks';
import MainLogo from './MainLogo';

export default () => {
  return (
    <header id="main-header">
      <MainLogo />
      <NavLinks />
      <ContactLinks />
    </header>
  )
}
