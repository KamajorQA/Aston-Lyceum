import Image from 'next/image';
// eslint-disable-next-line no-unused-vars
import s from './instructions.module.css';

function TestingContent() {
  const elString = {
    a: `
    `,
  };

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(elString));

  return (
    <>
      <p>
        Наконец необходимо установить среду разработки (редактор)&nbsp;
        <strong>Visual Studio Code</strong>.
      </p>
      <p>
        Visual Studio Code (он же&nbsp;<em>VSCode</em>) - это интегрированная
        среда разработки (<strong>IDE</strong>), то есть очень продвинутый
        блокнот (<em>ну... все-таки редактор кода</em>), у которого есть
        подсветка для кода, автодополнения и много разных плагинов, утилит и
        сервисов, которые упрощают жизнь разработчику, включая наш уже любимый
        терминал, а главное - возможность запуска локального сервера, на котором
        мы наконец и сможем запустить, посмотреть и пощупать наш драгоценный
        проект.
      </p>

      <p>
        <strong>1.</strong>&nbsp;Сначала надо скачать установщик с официального
        сайта:&nbsp;
        <em>
          <a
            href="https://code.visualstudio.com/Download"
            target="_blank"
            rel="noopener"
          >
            VSCode
          </a>
          .
        </em>
      </p>
      <p>
        Выбираем пакет, подходящий для своей операционной системы и скачиваем.
      </p>
      <p>
        <strong>2.</strong>&nbsp;После окончания загрузки файла запускаем его
      </p>
      <p>
        Если у вас <strong>MacOS</strong>, то загруженный файл — это архив:
      </p>
      <Image
        src="https://cs.sberuniversity.online/image/1000/auto/upsize/005fb750-040b-11ec-af8c-0242ac170003"
        alt="VSCode_1"
        width="128"
        height="139"
      />
      <p>
        После нажатия на него дважды он разархивируется, и появится файл. Этот
        файл необходимо перенести в <strong>Программы</strong>.
      </p>
      <p>
        Если у вас <strong>Windows</strong>, то после запуска всплывет окно
        предупреждения системы безопасности, нажимаем <strong>Запустить</strong>
        :
      </p>
      <Image
        src="https://cs.sberuniversity.online/image/1080/auto/fit/b946717e-040a-11ec-a28e-0242ac170004"
        alt="VSCode_2"
        width="500"
        height="383"
      />

      <p>
        После этого начнется установка <strong>VSCode</strong>, нажимаем&nbsp;
        <strong>Далее</strong>:
      </p>
      <Image
        src="https://cs.sberuniversity.online/image/1080/auto/fit/9dd16952-040b-11ec-a366-0242ac170004"
        alt="VSCode_3"
        width="500"
        height="387"
      />

      <p>
        Далее необходимо выбрать папку установки, можете оставить по умолчанию
        или поменяйте, если хотите, и нажимаем <strong>Далее</strong>.
      </p>
      <p>
        Откроется меню <strong>Выбрать папку </strong>в меню
        <strong> Пуск</strong>. Рекомендуется оставить по умолчанию и
        нажать&nbsp;
        <strong>Далее</strong>.
      </p>
      <p>
        Откроется меню дополнительных задач. По умолчанию стоит&nbsp;
        <strong>Добавить в PATH</strong>, советуется не снимать галку с нее.
        Дополнительные условия можете выбрать по вашему усмотрению, например,
        ярлык на рабочем столе может быть полезен для быстрого запуска
        программы.
      </p>
      <p>
        Затем осталось нажать <strong>Установить</strong> и дождаться окончания
        установки. В конце будет стоять галка на&nbsp;
        <strong>Запустить Visual Studio Code</strong>, можете ее не снимать и
        нажать <strong>Завершить</strong>.
      </p>
    </>
  );
}

export { TestingContent };
