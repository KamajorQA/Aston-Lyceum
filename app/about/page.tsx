import { Metadata } from 'next';
import s from './self.module.css';

export const metadata: Metadata = {
  title: 'About me',
  description: 'About me',
};

export default function AboutSelf() {
  return (
    <>
      <h4>Hi, I&apos;m Anton</h4>
      <p>I&apos;m a react frontend developer</p>
      <p>
        You can check my&nbsp;
        <a
          href="https://kamajor.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          portfolio
        </a>
        &nbsp;and my&nbsp;
        <a
          href="https://drive.google.com/file/d/11wXBveGYvw4aUTkmbniPVgzJWxu5xYzP/view"
          target="_blank"
          rel="noreferrer"
          className={s.link}
        >
          CV
        </a>
      </p>
    </>
  );
}
