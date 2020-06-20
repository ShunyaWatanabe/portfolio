import ContactLinks from 'components/ContactLinks';
import NavLinks from 'components/NavLinks';
import MainLogo from './MainLogo';
import styles from './Footer.module.scss';

export default () => {
  return (
    <footer id="main-footer">
      <div id="contact">
        <h5>Get in touch</h5>
        <p>
          But Brooke Chaffin and Catherine Connors are looking to change that with the 
          introduction of Maverick, a social network that connects young girls with female 
          mentors to express their creativity in a safe space.
        </p>
        <ContactLinks />
      </div>
      <div className={styles.extra}>
        <MainLogo />
        <h5>Copyright © Shunya Watanabe <br/> All rights reserved</h5>
        <NavLinks />
      </div>
    </footer>
  )
}