import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.main}>
      <article className={`${styles.info} ${styles.infoWrap}`}>
        <p className={styles.textBlock}>
          Привет тебе, мой юный падава…&nbsp;MQA-специалист!
        </p>
        <p className={styles.textBlock}>Вестимо и тебя отправили учиться</p>
        <div>
          <p className={styles.textBlock}>
            Здесь собраны&nbsp;
            <a href={`/auditorium`} className={styles.subtleLink}>
              инструкции
            </a>
          </p>
          <p className={styles.textBlock}>
            ...как тебе настроить окружение и развернуть вверенный тебе
            Frontend-проект, чтобы ты мог запустить в него свои шаловливые ручки
            еще до мержа изменений в develop-ветку.
          </p>
        </div>

        <p className={styles.textBlock}>
          Собранная здесь информация является общедоступной и лежит по всему
          интернету, но меня пнул мой ПМ с наставлением, что &quot;все должно
          быть задокументировано&quot;… Так что авторизуйся удобным способом
          и...
        </p>
      </article>
      <a href={`/auditorium`} className="actionButton">
        поехали!
      </a>

      <article className={styles.info}>
        <div>...к слову, это fullstack проект</div>

        <div className={styles.center}>
          Built on: &nbsp;
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.spoiler}>...передовой фреймворк...</div>
        <div className={styles.spoiler}>
          …до которого наши банки, финтехи и бла-бла-бла тоже доберутся…
        </div>
        <div className={`${styles.spoiler} ${styles.spoilerEnd}`}>
          ...когда-нибудь
        </div>

        <div className={styles.grid}>
          <div className={styles.center}>
            БД: &nbsp;
            <Image
              className={styles.logo}
              src="/postgresql.svg"
              alt="PostgreSQL Logo"
              width={180}
              height={70}
              priority
            />
          </div>
          <div>
            <a
              className={`${styles.repoLink} ${styles.subtleLink}`}
              href="https://github.com/KamajorQA/Aston-Lyceum"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub проекта:
              <Image
                src="/icons/gitHub.svg"
                alt="GitHub link"
                className={styles.vercelLogo}
                width={35}
                height={35}
                priority
              />
            </a>
          </div>
          <div className={styles.paddingY}>
            ...форкайтесь на здоровье
            <br />
          </div>
        </div>

        <div className={styles.infoEnd}>
          и можете поставить&nbsp;
          <Image
            src="/icons/star.svg"
            alt="GitHub link"
            className={styles.vercelLogo}
            width={18}
            height={18}
            priority
          />
          &nbsp;на репозитории -
          <br />
          автору будет приятно :)
        </div>
      </article>
    </section>
  );
}
