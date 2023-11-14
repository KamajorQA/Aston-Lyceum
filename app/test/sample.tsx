const Git =
  '<h2>Что такое Git?</h2> <p> <strong> Git — это система контроля версий (Control Version System,&nbsp; <em>CVS</em>) </strong> </p> <p> Если целая команда работает над одним проектом, неизбежна ситуация, когда несколько человек могут изменять один файл одновременно. Без CVS нормально разрабатывать проект в команде очень сложно: будет много конфликтов, которые приводят к риску потери части изменений в коде. </p> <p> Например, вы поменяли в файле index.html заголовок, а коллега одновременно с этим изменил тексты. И при этом изменений коллеги у вас нет, а у коллеги нет ваших изменений. Как быть? Вероятно, кому-то из вас, например вам, придется взять файл коллеги и внести туда свои изменения. А если изменений очень много? В общем, это будет настоящая головная боль, а в большой команде эта головная боль будет у всех. </p> <p> В общем, чтобы решить такие проблемы, и были придуманы системы контроля версий. А ситуация, когда есть две версии одного файла и нужно их как-то «слить», называется <em>конфликтом</em>. </p> <h2>Как работают CVS?</h2> <p> Принцип работы Git простой: вы вносите какие-то изменения в файлы. Затем CVS позволяет их зафиксировать (в виде так называемого&nbsp; <strong> <em>коммита</em> </strong> ): ваши изменения сохраняются, и к ним всегда можно вернуться. </p> <p> На самом деле существует доволно много тонкостей и команд для работы с Git, но для вас (я апеллирую к специлистам ручного тестирования&nbsp; <strong>Aston</strong>)&nbsp;<em>хорошая новость</em>&nbsp; в том, что&nbsp; <strong>вам не нужно вообще их использовать</strong>, т.к. не предполагается, что вы будете вносить какие-либо правки в сам код. </p> <p> Вам уже должны быть предоставлены&nbsp; <strong> ссылки и доступ к <em>репозиториям</em> </strong> &nbsp; (так называются рабочие папки проектов в системах Git) вашего проекта. Если что пинайте своих <strong>DevOps&apos;a и ПМа</strong>. </p> <p> Таким образом, половина приведенных здесь инструкций тебе на текущий момент не нужна (а если ты уже ежедневно вводишь в своем терминале: </p> <pre class="codeBlock"> <code>npm run start</code> </pre> <p> ...то тебе вообще едва ли нужны эти инструкции, если только ты не сел за новый ПК и пытаешься вспомнить как снова ставить эти чертовы SSH-ключи). </p> <p> Однако, тебе будет в будущем намного проще работать, если сможешь пользоваться хотя бы командами &apos;&nbsp;<strong>git checkout</strong> &apos; и &apos;&nbsp;<strong>git pull</strong>&apos; чтобы не скачивать постоянно себе тестируемую ветку вручную из репозитория проекта. </p> <p> Так что все-таки полезно знать, что существуют разные Git системы (самые популярные - GitLab и GitHub) и как с ними работать. Разработка в &nbsp;<strong>Aston</strong> ведется в&nbsp;<strong>GitLab</strong>. </p>';

const Windows =
  '<p> <strong>1.</strong> Переходим на&nbsp; <a href="https://git-scm.com/downloads" target="_blank" rel="noopener" > страницу Git </a> . На ней в списке выбора операционных систем жмем на&nbsp; <strong>Windows</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/538848dc-1d12-11ec-aa2f-0242ac170004" alt="Git_Win_1" width="514" height="457" /> </p> <p> Автоматически запустится скачивание файла-установщика Git, дождемся его загрузки. </p> <p> <strong>2.</strong> Теперь установим Git. Запускаем скачавшийся файл, будет первое окно с информацией о Git, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/4681b768-1d12-11ec-bc66-0242ac170003" alt="Git_Win_2" width="517" height="409" /> </p> <p> Нас попросят выбрать место, куда сделать установку. Выбираем по умолчанию, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/635be066-1d12-11ec-b441-0242ac170004" alt="Git_Win_3" width="515" height="409" /> </p> <p> Далее будет список настроек, которые будут установлены вместе с Git. Оставим их все, так как они нужны, и жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/7af8f286-1d12-11ec-ab96-0242ac160003" alt="Git_Win_4" width="514" height="406" /> </p> <p> В следующем окне попросят выбрать папку для меню быстрого доступа, оставляем как есть, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/a2c1ccc0-1d12-11ec-a66f-0242ac160003" alt="Git_Win_5" width="512" height="409" /> </p> <p> Далее нам предлагают выбрать текстовый редактор по умолчанию. Можно оставить выбор по дефолту (<strong>Vim</strong>), но, если вы умеете работать с каким-то другим и вам с ним удобнее, можете выбрать другой. После выбора жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/b49cb9b4-1d12-11ec-aba7-0242ac160003" alt="Git_Win_6" width="519" height="409" /> </p> <p> Далее можно задать название главной ветки Git, предлагаем использовать значение по умолчанию, так что жмем <strong>Next</strong>: </p> <h3> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/d6ec1af0-1d12-11ec-9268-0242ac160002" alt="Git_Win_7" width="515" height="409" /> </h3> <p> В следующем меню предлагаем выбрать третий пункт вместо первого: это поможет использовать все инструменты Git. После выбора жмем&nbsp; <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/efe5fa30-1d12-11ec-b5c3-0242ac170004" alt="Git_Win_8" width="517" height="408" /> </p> <p> Далее предлагают выбрать дополнительный <strong>OpenSSH </strong>и <strong> OpenSSL</strong>, можно оставить все как есть и нажать&nbsp; <strong>Next</strong>: </p> <p> <strong> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/302b1c10-1d13-11ec-ad28-0242ac160003" alt="Git_Win_9" width="518" height="412" /> </strong> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/6c0a7cac-1d14-11ec-90f1-0242ac160003" alt="Git_Win_10" width="514" height="405" /> </p> <p> В следующем окне предлагаем выбрать второй пункт. Это поможет избежать проблем в будущем при работе в проектах совместно с другими людьми, у которых Unix-системы. После выбора жмем<strong> Next:</strong> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/b735991e-1d14-11ec-b21b-0242ac170003" alt="Git_Win_11" width="513" height="404" /> </p> <p> Далее оставляем все как есть, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/ce3c1700-1d14-11ec-9915-0242ac170003" alt="Git_Win_12" width="513" height="409" /> </p> <p> Далее тоже рекомендуем ничего не менять, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/e590243c-1d14-11ec-9b06-0242ac160002" alt="Git_Win_13" width="513" height="409" /> </p> <p> Последним шагом нам предложат настроить разные дополнительные опции. Здесь можно ничего не менять, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/f2c5f258-1d14-11ec-b2cb-0242ac170003" alt="Git_Win_14" width="513" height="409" /> </p> <p> В последних шагах нам предложат настроить разные дополнительные опции. Здесь можно ничего не менять и жать <strong>Next </strong>и <strong> Install</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/6d6b882e-1d15-11ec-9ea7-0242ac160002" alt="Git_Win_15" width="514" height="411" /> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/adda584a-1d15-11ec-928c-0242ac170003" alt="Git_Win_16" width="514" height="406" /> </p> <p> После этого начнется установка, после установки увидим завершающее окно, снимем галку с <strong>View Release Notes</strong> и поставим в&nbsp; <strong>Launch Git Bash</strong>, чтобы опробовать Git и проверить, что все хорошо. После выбора жмем <strong>Finish</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/c26dc60c-1d15-11ec-b5e7-0242ac170004" alt="Git_Win_17" width="513" height="406" /> </p> <p> После этого запустится программа <strong>Git Bash</strong>, терминал для работы с Git, куда можно вводить разнообразные команды, которые Git поддерживает.&nbsp; </p> <p>Введем первую команду:</p> <pre class="codeBlock"> <code>git --version</code> </pre> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/f767b58e-1d15-11ec-86ce-0242ac170004" alt="Git_Win_18" width="598" height="385" /> </p> <p> Если все хорошо, то появится версия программы Git. Отлично, установка завершена. </p>';

const MacOs =
  '<p> <strong>1.</strong> Git под MacOS удобно установить с помощью&nbsp; <strong>brew.</strong> Для этого открываем терминал. Чтобы его открыть, можно нажать<strong> Command + Space</strong> (пробел), далее в поиске нужно ввести <strong>Terminal</strong> и нажать <strong>Enter</strong>. </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/782581a0-0caa-11ec-8b86-0242ac160003" alt="GIT_MacOS_1" width="500" height="76" /> </p> <p> Запустится программа <strong>Terminal</strong>. Теперь установим&nbsp; <strong>Homebrew</strong> — специальную программу, которая умеет устанавливать нужные программы для терминала. <strong>Homebrew</strong>&nbsp; очень популярна среди разработчиков, пользующихся MacOS. </p> <p>Введем команду:</p> <pre class="codeBlock"> <code> /bin/bash -c&nbsp; <span> <span> <span>&quot;</span> </span> <span> <span> <span> <span> <span> $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh) </span> </span> </span> </span> </span> <span> <span>&quot;</span> </span> </span> </code> </pre> <p> После выполнения этой команды установится <strong>brew</strong>. </p> <p> <strong>2.</strong> Теперь можно установить Git, выполнив команду: </p> <pre class="codeBlock"> <code>brew install git</code> </pre> <p> После успешного завершения команды осталось лишь проверить, что Git установился: </p> <pre class="codeBlock"> <code>git --version</code> </pre> <p> Если все хорошо, то появится версия программы Git. Отлично, установка завершена. </p>';

const SSHInstall =
  '<p>Итак, Git установлен, доступ к проекту на GitLab получен (<em>еще раз</em> - пинаем ПМ&apos;а, хотя обычно доступ будет по твоей рабочей почте и паролю от рабочей учетки). </p> <p> Далее для работы с GitHub через свой компьютер нужно еще добавить&nbsp; <strong>SSH-ключ</strong>. </p> <p> Чтобы уметь отправлять команды на GitHub со своего локального компьютера, надо пройти авторизацию у сервера. Это как при использовании некоторых сайтов надо сначала войти, введя логин и пароль. GitHub для этого использует <strong>SSH-ключи</strong>. </p><p> <em> * Доступ по логину и паролю также имеется, для чего репозиторий при дальнейшем клонировании копируется по https-ссылке (и это, как правило, намного проще чем возня с ключами, но почему-то не у всех нормально настроен такой доступ - если что пинаем DevOps&apos;а) </em> </p> <p> <strong>SSH-ключи</strong> состоят из открытого (публичного) ключа и закрытого (приватного) ключа. Открытый ключ — это как логин. Он отправляется на сервер, его можно не прятать ни от кого. Закрытый ключ же, наоборот, нельзя никому показывать, он как пароль. При авторизации вы отправляете только свой публичный ключ. Сервер присылает вам секретное сообщение, которое понять можете только вы, и таким образом происходит авторизация.&nbsp; </p> <p> По сравнению с логином и паролем это безопаснее, так как при авторизации и логин, и пароль вы отправляете на сервер, а тут только публичный ключ.&nbsp; </p> <p> <strong>1. </strong>Итак, для генерации ключей нам нужен терминал <strong>. </strong>Откройте свой терминал (<strong>Terminal</strong> для MacOs или <strong>Git Bash</strong> для Windows) </p> <p><em> * а если уже поставили себе <strong>Visual Studio Code</strong>, то нажимаем в нем&nbsp; <em>&apos;ctrl + ~&apos;</em>&nbsp; и познаем вселенское счастье, с комфортом работая там и переключаясь между нужными оболочками терминала&nbsp; </em> </p> <p> Далее, чтобы сгенерировать ключи, нужно запустить команду (вводим ее в терминал): </p> <pre class="codeBlock"> <code> ssh-keygen -t rsa -b 4096 -C <span>&quot;your_mail@example.com&quot;</span> </code> </pre> <p>можно использовать разные кодировки, например также можно ввести:</p> <a href="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png" target="_blank" rel="noopener noreferrer" > <Image src="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png" alt="Установка_SSH_0" width="500" height="172" /> </a> <p> В конце нужно указать свою почту (рабочую или, если регистрировались сами, то которую вы вводили при регистрации на GitLab/GitHub). </p> <p> Вводим команду в терминале, жмем <strong>Enter</strong>. После этого вас попросят ввести имя файла, куда сохранить ключ. Можно ничего не вводить и нажать <strong>Enter</strong>: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003" alt="Установка_SSH_1" width="500" height="172" /> </a> <p> Затем вас попросят ввести пароль для <strong>SSH-ключа</strong>. Его тоже можно не вводить и нажать <strong>Enter</strong>: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004" alt="" width="500" height="172" /> </a> <p> Пароль попросят повторить, снова жмем<strong> Enter</strong>. </p> <p> После этого <strong>SSH-ключ</strong> успешно сгенерируется: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004" alt="" width="500" height="172" /> </a> <p> Осталось ввести еще одну команду, чтобы он начал использоваться системой: </p> <pre class="codeBlock"> <code>ssh-add ~/.ssh/id_rsa</code> </pre> <p> Если вы указывали другое имя для ключа, то нужно ввести его. Если при генерации ничего не вводили, то вам подойдет команда выше. </p> <p>После ввода команды выведется информация о том, что он добавился:</p> <pre class="codeBlock"> <code> Identity added: /Users/green-corp/.ssh/id_rsa (green-corp@yandex.ru) </code> </pre> <p> <strong>2. </strong>Итак, мы сгенерировали ключ. Теперь надо вывести его публичную часть, это можно сделать командой: </p> <pre class="codeBlock"> <code>cat ~/.ssh/id_rsa.pub</code> </pre> <p> Команда <strong>cat</strong> выводит содержимое файла, путь к которому указывается далее. Если вы не задавали никакого названия для своего&nbsp; <strong>SSH-ключа</strong>, то вам подойдет та же самая команда. </p> <p>Она выведет значение публичного ключа:&nbsp;</p> <a href="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004" alt="" width="500" height="172" /> </a> <p> Этот ключ хранится у вас локально на вашем компьютере, так что можете и просто найти его в соответствующей папке и открыть руками (тем же самым блокнотом), где вы увидите то же самое содержимое </p> <p> Нужно выделить строку, начинающуюся с <strong>ssh-rsa</strong> и скопировать ее всю. </p> <p> Этот ключ теперь необходимо добавить в нашу используемую Git-систему (по-умолчанию, GitLab, но также будет приведена инструкция и для GitHub&apos;а) </p>';
