import Image from 'next/image';
import s from './instructions.module.css';

function TestingContent() {
  const elString = {
    a: `
    <p>
        Если проект размещен на GitLab (что вероятнее), то полученный ранее SSH
        ключ загружаем туда (все доступные внутренние проекты можно найти на:
        &nbsp;
        <em>
          <a
            href="https://git.astondevs.ru/aston"
            target="_blank"
            rel="noopener"
          >
            Aston
          </a>
        </em>
        ).
      </p>
      <p>
        В общем случае необходимо перейти в настройки в раздел &nbsp;
        <strong>SSH-keys</strong>, где вставляем ключ в специально отведенное
        для этого поле и нажимаем на кнопку&nbsp;<strong>Add key</strong>.
      </p>
      <a
        href="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png"
          alt="Добавление_SSH_GitHub_1"
          width="615"
          height="324"
        />
      </a>

      <p>
        Но поскольку настройки и визуализация интерфейса GitLab могут отличаться
        на проектах, то добавлять ключ может быть проще (<em>...нет</em>) с
        помощью команд.
      </p>

      <p>
        Для этого вот ссылка на соответствующий раздел официальной документации
        GitLab: &nbsp;
        <em>
          <a
            href="https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account"
            target="_blank"
            rel="noopener"
          >
            Добавление SSH-ключа к вашему аккаунту
          </a>
        </em>
      </p>
      <p>
        Также, зная как порой приходится танцевать с бубном при установке
        SSH-ключей, оставляю список ссылок на официальную документацию GitLab и
        GitHub (поскольку это работа с Git как таковым, то инструкции покрывают
        один и тот же функционал и взаимно хорошо друг друга дополняют):
      </p>
      <ol>
        <li>
          <em>
            <a
              href="https://docs.gitlab.com/ee/user/ssh.html"
              target="_blank"
              rel="noopener"
            >
              Использование SSH для обмена с GitLab (<em>english</em>)
            </a>
          </em>
        </li>
        <li>
          <em>
            <a
              href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
              target="_blank"
              rel="noopener"
            >
              Создание нового ключа SSH и его добавление в ssh-agent
            </a>
          </em>
        </li>
        <li>
          <em>
            <a
              href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"
              target="_blank"
              rel="noopener"
            >
              Добавление нового ключа SSH в учетную запись GitHub
            </a>
          </em>
        </li>
      </ol>
    `,
  };

  console.log(JSON.stringify(elString));

  return (
    <>
      <p>
        Если проект размещен на GitLab (что вероятнее), то полученный ранее SSH
        ключ загружаем туда (все доступные внутренние проекты можно найти на:
        &nbsp;
        <em>
          <a
            href="https://git.astondevs.ru/aston"
            target="_blank"
            rel="noopener"
          >
            Aston
          </a>
        </em>
        ).
      </p>
      <p>
        В общем случае необходимо перейти в настройки в раздел &nbsp;
        <strong>SSH-keys</strong>, где вставляем ключ в специально отведенное
        для этого поле и нажимаем на кнопку&nbsp;<strong>Add key</strong>.
      </p>
      <a
        href="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png"
          alt="Добавление_SSH_GitHub_1"
          width="615"
          height="324"
        />
      </a>

      <p>
        Но поскольку настройки и визуализация интерфейса GitLab могут отличаться
        на проектах, то добавлять ключ может быть проще (<em>...нет</em>) с
        помощью команд.
      </p>

      <p>
        Для этого вот ссылка на соответствующий раздел официальной документации
        GitLab: &nbsp;
        <em>
          <a
            href="https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account"
            target="_blank"
            rel="noopener"
          >
            Добавление SSH-ключа к вашему аккаунту
          </a>
        </em>
      </p>
      <p>
        Также, зная как порой приходится танцевать с бубном при установке
        SSH-ключей, оставляю список ссылок на официальную документацию GitLab и
        GitHub (поскольку это работа с Git как таковым, то инструкции покрывают
        один и тот же функционал и взаимно хорошо друг друга дополняют):
      </p>
      <ol>
        <li>
          <em>
            <a
              href="https://docs.gitlab.com/ee/user/ssh.html"
              target="_blank"
              rel="noopener"
            >
              Использование SSH для обмена с GitLab (<em>english</em>)
            </a>
          </em>
        </li>
        <li>
          <em>
            <a
              href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
              target="_blank"
              rel="noopener"
            >
              Создание нового ключа SSH и его добавление в ssh-agent
            </a>
          </em>
        </li>
        <li>
          <em>
            <a
              href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"
              target="_blank"
              rel="noopener"
            >
              Добавление нового ключа SSH в учетную запись GitHub
            </a>
          </em>
        </li>
      </ol>
    </>
  );
}

export { TestingContent };
