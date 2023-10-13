import Image from 'next/image';
import s from './socialItem.module.css';

interface ISocialItemProps {
  href: string;
  imgSrc: string;
  alt: string;
}

function SocialItem({ href, imgSrc, alt }: ISocialItemProps) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <Image
          src={imgSrc}
          alt={alt}
          className={s.socialIcon}
          height={25}
          priority
        />
      </a>
    </li>
  );
}

export { SocialItem };
