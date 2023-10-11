import telegram from '@/public/icons/telegram.svg';
import gitHub from '@/public/icons/gitHub.svg';
import linkedIn from '../../public/icons/linkedIn.svg';
import { SocialItem } from '../SocialItem/SocialItem';
import s from './footer.module.css';

function Footer() {
  return (
    <footer className={`container ${s.footer}`}>
      <div className={s.copyright}>
        Created by &copy; Kamajor {new Date().getFullYear()}
      </div>
      <ul className={s.socials}>
        <SocialItem
          href={'https://t.me/KamajorQA'}
          imgSrc={telegram}
          alt="Telegram Link"
        />
        <SocialItem
          href={'https://github.com/KamajorQA'}
          imgSrc={gitHub}
          alt="GitHub Link"
        />
        <SocialItem
          href={'https://www.linkedin.com/in/KamajorQA'}
          imgSrc={linkedIn}
          alt="LinkedIn Link"
        />
      </ul>
    </footer>
  );
}

export { Footer };
