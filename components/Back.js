import Router from 'next/router'
import { FaAngleLeft } from 'react-icons/fa';
import style from './Back.module.scss';

export default function BackButton() {
  return (
    <div 
      onClick={() => Router.back()} 
      className={style.back} >
      <div className="back-icon">
        <FaAngleLeft 
          title="back"
          size="20"
        />
      </div>
      <p>Go Back</p>
    </div>
  )
}