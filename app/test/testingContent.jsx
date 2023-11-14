import Image from 'next/image';
import s from './instructions.module.css';

function TestingContent() {
  const elString = {
    a: `
    Итак, Git установлен, доступ к проекту на GitLab получен (
      <em>еще раз</em> - пинаем ПМ&apos;а, хотя обычно доступ будет по твоей
      рабочей почте и паролю от рабочей учетки ).
    </p>
    <p>
      Далее для работы с GitHub через свой компьютер нужно еще добавить&nbsp;
      <strong>SSH-ключ</strong>.
    </p>
    <p>
      Чтобы уметь отправлять команды на GitHub со своего локального
      компьютера, надо пройти авторизацию у сервера. Это как при использовании
      некоторых сайтов надо сначала войти, введя логин и пароль. GitHub для
      этого использует <strong>SSH-ключи</strong>.
    </p>

    <p>
      <em>
        * Доступ по логину и паролю также имеется, для чего репозиторий при
        дальнейшем клонировании копируется по https-ссылке (и это, как
        правило, намного проще чем возня с ключами, но почему-то не у всех
        нормально настроен такой доступ - если что пинаем DevOps&apos;а)
      </em>
    </p>
    <p>
      <strong>SSH-ключи</strong> состоят из открытого (публичного) ключа и
      закрытого (приватного) ключа. Открытый ключ — это как логин. Он
      отправляется на сервер, его можно не прятать ни от кого. Закрытый ключ
      же, наоборот, нельзя никому показывать, он как пароль. При авторизации
      вы отправляете только свой публичный ключ. Сервер присылает вам
      секретное сообщение, которое понять можете только вы, и таким образом
      происходит авторизация.&nbsp;
    </p>
    <p>
      По сравнению с логином и паролем это безопаснее, так как при авторизации
      и логин, и пароль вы отправляете на сервер, а тут только публичный
      ключ.&nbsp;
    </p>
    <p>
      <strong>1. </strong>Итак, для генерации ключей нам нужен терминал
      <strong>. </strong>Откройте свой терминал (<strong>Terminal</strong> для
      MacOs или <strong>Git Bash</strong> для Windows)
    </p>
    <p>
      {' '}
      <em>
        * а если уже поставили себе <strong>Visual Studio Code</strong>, то
        нажимаем в нем&nbsp;
        <em>&apos;ctrl + ~&apos;</em>&nbsp; и познаем вселенское счастье, с
        комфортом работая там и переключаясь между нужными оболочками
        терминала&nbsp;
      </em>
    </p>
    <p>
      Далее, чтобы сгенерировать ключи, нужно запустить команду (вводим ее в
      терминал):
    </p>
    <pre class="codeBlock">
      <code>
        ssh-keygen -t rsa -b 4096 -C&nbsp;
        <span>&quot;your_mail@example.com&quot;</span>
      </code>
    </pre>
    <p>можно использовать разные кодировки, например также можно ввести:</p>
    <a
      href="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png"
        alt="Установка_SSH_0"
        width="500"
        height="172"
      />
    </a>
    <p>
      В конце нужно указать свою почту (рабочую или, если регистрировались
      сами, то которую вы вводили при регистрации на GitLab/GitHub).
    </p>
    <p>
      Вводим команду в терминале, жмем <strong>Enter</strong>. После этого вас
      попросят ввести имя файла, куда сохранить ключ. Можно ничего не вводить
      и нажать <strong>Enter</strong>:
    </p>
    <a
      href="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003"
        alt="Установка_SSH_1"
        width="500"
        height="172"
      />
    </a>
    <p>
      Затем вас попросят ввести пароль для <strong>SSH-ключа</strong>. Его
      тоже можно не вводить и нажать <strong>Enter</strong>:
    </p>
    <a
      href="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004"
        alt=""
        width="500"
        height="172"
      />
    </a>
    <p>
      Пароль попросят повторить, снова жмем<strong> Enter</strong>.
    </p>
    <p>
      После этого <strong>SSH-ключ</strong> успешно сгенерируется:
    </p>
    <a
      href="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004"
        alt=""
        width="500"
        height="172"
      />
    </a>
    <p>
      Осталось ввести еще одну команду, чтобы он начал использоваться
      системой:
    </p>
    <pre class="codeBlock">
      <code>ssh-add ~/.ssh/id_rsa</code>
    </pre>
    <p>
      Если вы указывали другое имя для ключа, то нужно ввести его. Если при
      генерации ничего не вводили, то вам подойдет команда выше.
    </p>
    <p>После ввода команды выведется информация о том, что он добавился:</p>
    <pre class="codeBlock">
      <code>
        Identity added: /Users/green-corp/.ssh/id_rsa (green-corp@yandex.ru)
      </code>
    </pre>
    <p>
      <strong>2. </strong>Итак, мы сгенерировали ключ. Теперь надо вывести его
      публичную часть, это можно сделать командой:
    </p>
    <pre class="codeBlock">
      <code>cat ~/.ssh/id_rsa.pub</code>
    </pre>
    <p>
      Команда <strong>cat</strong> выводит содержимое файла, путь к которому
      указывается далее. Если вы не задавали никакого названия для
      своего&nbsp;
      <strong>SSH-ключа</strong>, то вам подойдет та же самая команда.
    </p>
    <p>Она выведет значение публичного ключа:&nbsp;</p>
    <a
      href="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004"
        alt=""
        width="500"
        height="172"
      />
    </a>
    <p>
      Этот ключ хранится у вас локально на вашем компьютере, так что можете и
      просто найти его в соответствующей папке и открыть руками (тем же самым
      блокнотом), где вы увидите то же самое содержимое
    </p>
    <p>
      Нужно выделить строку, начинающуюся с <strong>ssh-rsa</strong> и
      скопировать ее всю.
    </p>
    <p>
      Этот ключ теперь необходимо добавить в нашу используемую Git-систему
      (по-умолчанию, GitLab, но также будет приведена инструкция и для
      GitHub&apos;а)
    </p>
    `,
  };

  console.log(JSON.stringify(elString));

  return (
    <>
      <p>
        Итак, Git установлен, доступ к проекту на GitLab получен (
        <em>еще раз</em> - пинаем ПМ&apos;а, хотя обычно доступ будет по твоей
        рабочей почте и паролю от рабочей учетки ).
      </p>
      <p>
        Далее для работы с GitHub через свой компьютер нужно еще добавить&nbsp;
        <strong>SSH-ключ</strong>.
      </p>
      <p>
        Чтобы уметь отправлять команды на GitHub со своего локального
        компьютера, надо пройти авторизацию у сервера. Это как при использовании
        некоторых сайтов надо сначала войти, введя логин и пароль. GitHub для
        этого использует <strong>SSH-ключи</strong>.
      </p>

      <p>
        <em>
          * Доступ по логину и паролю также имеется, для чего репозиторий при
          дальнейшем клонировании копируется по https-ссылке (и это, как
          правило, намного проще чем возня с ключами, но почему-то не у всех
          нормально настроен такой доступ - если что пинаем DevOps&apos;а)
        </em>
      </p>
      <p>
        <strong>SSH-ключи</strong> состоят из открытого (публичного) ключа и
        закрытого (приватного) ключа. Открытый ключ — это как логин. Он
        отправляется на сервер, его можно не прятать ни от кого. Закрытый ключ
        же, наоборот, нельзя никому показывать, он как пароль. При авторизации
        вы отправляете только свой публичный ключ. Сервер присылает вам
        секретное сообщение, которое понять можете только вы, и таким образом
        происходит авторизация.&nbsp;
      </p>
      <p>
        По сравнению с логином и паролем это безопаснее, так как при авторизации
        и логин, и пароль вы отправляете на сервер, а тут только публичный
        ключ.&nbsp;
      </p>
      <p>
        <strong>1. </strong>Итак, для генерации ключей нам нужен терминал
        <strong>. </strong>Откройте свой терминал (<strong>Terminal</strong> для
        MacOs или <strong>Git Bash</strong> для Windows)
      </p>
      <p>
        {' '}
        <em>
          * а если уже поставили себе <strong>Visual Studio Code</strong>, то
          нажимаем в нем&nbsp;
          <em>&apos;ctrl + ~&apos;</em>&nbsp; и познаем вселенское счастье, с
          комфортом работая там и переключаясь между нужными оболочками
          терминала&nbsp;
        </em>
      </p>
      <p>
        Далее, чтобы сгенерировать ключи, нужно запустить команду (вводим ее в
        терминал):
      </p>
      <pre class="codeBlock">
        <code>
          ssh-keygen -t rsa -b 4096 -C&nbsp;
          <span>&quot;your_mail@example.com&quot;</span>
        </code>
      </pre>
      <p>можно использовать разные кодировки, например также можно ввести:</p>
      <a
        href="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png"
          alt="Установка_SSH_0"
          width="500"
          height="172"
        />
      </a>
      <p>
        В конце нужно указать свою почту (рабочую или, если регистрировались
        сами, то которую вы вводили при регистрации на GitLab/GitHub).
      </p>
      <p>
        Вводим команду в терминале, жмем <strong>Enter</strong>. После этого вас
        попросят ввести имя файла, куда сохранить ключ. Можно ничего не вводить
        и нажать <strong>Enter</strong>:
      </p>
      <a
        href="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003"
          alt="Установка_SSH_1"
          width="500"
          height="172"
        />
      </a>
      <p>
        Затем вас попросят ввести пароль для <strong>SSH-ключа</strong>. Его
        тоже можно не вводить и нажать <strong>Enter</strong>:
      </p>
      <a
        href="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004"
          alt=""
          width="500"
          height="172"
        />
      </a>
      <p>
        Пароль попросят повторить, снова жмем<strong> Enter</strong>.
      </p>
      <p>
        После этого <strong>SSH-ключ</strong> успешно сгенерируется:
      </p>
      <a
        href="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004"
          alt=""
          width="500"
          height="172"
        />
      </a>
      <p>
        Осталось ввести еще одну команду, чтобы он начал использоваться
        системой:
      </p>
      <pre class="codeBlock">
        <code>ssh-add ~/.ssh/id_rsa</code>
      </pre>
      <p>
        Если вы указывали другое имя для ключа, то нужно ввести его. Если при
        генерации ничего не вводили, то вам подойдет команда выше.
      </p>
      <p>После ввода команды выведется информация о том, что он добавился:</p>
      <pre class="codeBlock">
        <code>
          Identity added: /Users/green-corp/.ssh/id_rsa (green-corp@yandex.ru)
        </code>
      </pre>
      <p>
        <strong>2. </strong>Итак, мы сгенерировали ключ. Теперь надо вывести его
        публичную часть, это можно сделать командой:
      </p>
      <pre class="codeBlock">
        <code>cat ~/.ssh/id_rsa.pub</code>
      </pre>
      <p>
        Команда <strong>cat</strong> выводит содержимое файла, путь к которому
        указывается далее. Если вы не задавали никакого названия для
        своего&nbsp;
        <strong>SSH-ключа</strong>, то вам подойдет та же самая команда.
      </p>
      <p>Она выведет значение публичного ключа:&nbsp;</p>
      <a
        href="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004"
          alt=""
          width="500"
          height="172"
        />
      </a>
      <p>
        Этот ключ хранится у вас локально на вашем компьютере, так что можете и
        просто найти его в соответствующей папке и открыть руками (тем же самым
        блокнотом), где вы увидите то же самое содержимое
      </p>
      <p>
        Нужно выделить строку, начинающуюся с <strong>ssh-rsa</strong> и
        скопировать ее всю.
      </p>
      <p>
        Этот ключ теперь необходимо добавить в нашу используемую Git-систему
        (по-умолчанию, GitLab, но также будет приведена инструкция и для
        GitHub&apos;а)
      </p>
    </>
  );
}

export { TestingContent };
