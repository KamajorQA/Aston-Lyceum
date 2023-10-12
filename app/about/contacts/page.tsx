import { Metadata } from 'next';
import s from './contacts.module.css';

export const metadata: Metadata = {
  title: 'My contacts',
  description: 'Contacts page',
};

export default function Contacts() {
  return (
    <>
      <p className={s.label}>Location</p>

      <p className={s.shift}>Saint-Petersburg, Russia</p>
      <p className={s.label}>Phone / WhatsApp</p>
      <a className={`${s.link} ${s.shift}`} href="tel:+79641872190">
        +7 (964) 187-21-90
      </a>
      <p className={s.label}>Telegram</p>
      <a className={`${s.link} ${s.shift}`} href="https://t.me/KamajorQA">
        @KamajorQA
      </a>
      <p className={s.label}>Email</p>
      <a className={`${s.link} ${s.shift}`} href="mailto:kamajor@mail.ru">
        kamajor@mail.ru
      </a>
    </>
  );
}
