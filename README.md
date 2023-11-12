# Список инструкций по настройке окружения фронта для тестирования рабочих проектов MQA-специалистами компании Aston.

## Стек проекта: Next.js, React, Typescript, RTK, Framer Motion, CSS Modules, PostgreSQL, Prisma, bcrypt, jsonwebtoken.

**_Fullstack SPA-проект получения с удаленного сервера и отображения списка инструкций на фреймворке Next.js v.13 и базе данных PostgreSQL управляемой через ORM Prisma с аутентификацией по JWT_**

---

### Использован шаблон [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

Для первичной инициализации проекта в его директории сперва нужно установить зависимости с помощью команды:

```sh
npm install
```

Для локального запуска проекта нужно использовать команду

```sh
npm run dev
```

### Автоматический деплой реализован на Vercel.

**_Ссылка на продакшн стенд: [next-base-app](https://next-base-app-wine.vercel.app/)_**

---

## В проекте использованы библиотеки

- [x] Typescript;
- [x] Redux Toolkit;
- [x] Auth.js;
- [x] Prisma;
- [x] bcrypt;
- [x] jsonwebtoken;
- [x] Framer Motion;
- [x] react-loader-spinner;

Страницы проекта являются _**серверными компонентами**_ с передаваемой **meta**-информацией для **SEO**-оптимизации.  
Интерактивное взаимодействие передано во вложенные _**клиентские компоненты**_.

В проекте реализованы страницы **Home** / **Auditorium** / **Sign In** / **Profile** / **About**.  
Страница **Not Found** генерируется автоматически Next.js.

На странице отображения всех постов также реализован **поиск** через query-запрос на сервер, вызываемый в клиентском компоненте `Search`. В реализации поиска использован **Debounce** - поиск триггерится и при сабмите по энтеру/клику, и при прекращении ввода после заданной задержки в `useDebounce`.
Триггер поиска по вводу ограничен длинной запроса _более двух_ символов.

### Аутентификация

**Аутентификация** производится согласно протоколу OAuth на выбор через провайдеров **Google** или **Github**. Также доступна аутентификация через `Credentials` (по паре логин/пароль).

Для аутентификации используется библиотека `Auth.js`.  
**_Ключи (переменные) для настройки окружения и конфигурации аутентификации NextAuth хранятся локально и отсутствуют в репозитории. Необходим файл .env.local_**

### Бэкенд

В качестве базы данных использована **СУБД PostgreSQL**.  
Для доступа к БД использована библиотека **Prisma**.

Призма установлена в качестве dev-зависимостей:  
_(команды приводимые ниже указаны для удобства развертывания нового проекта по аналогии)_

```sh
npm i prisma --save-dev
```

Для настройки конфигурации Призмы использована схема:

```sh
npx prisma init --datasource-provider postgresql
```

Для создания реляционной БД использована опция `migration` в Prisma:

```sh
npx prisma migrate dev --name init
```

Установлен клиент Призмы:

```sh
npm i @prisma/client
```

---

Для **хеширования** паролей использована функция-алгоритм **bcrypt** (обязательно версия _bcrypt@5.1.0_ - последняя на момент написания кода версия 5.1.1 крашится при установке npm-пакета!).  
_hint для установки:_

```sh
npm i bcrypt@5.1.0
```

Для типизации библиотеки хеширования не забываем установить типы:

```sh
npm i --save-dev @types/bcrypt
```

---

Для генерации **JWT** `access token`'а использована библиотека **jsonwebtoken** .  
_hint для установки:_

```sh
npm i jsonwebtoken
```

Для типизации библиотеки jsonwebtoken не забываем установить типы:

```sh
npm i --save-dev @types/jsonwebtoken
```
