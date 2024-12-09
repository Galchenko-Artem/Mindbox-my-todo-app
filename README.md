
# My Todo App

Это простое ToDo-приложение, написанное на TypeScript + React с использованием Ant Design и Vite.

## Запуск проекта локально

### Предварительные условия

- Установлен **Node.js** (версия 16 или выше).
- Установлен **npm**.

### Установка зависимостей

После клонирования репозитория выполните команду:

```bash
npm install
```

Это установит все необходимые пакеты, перечисленные в `package.json`.

### Запуск в режиме разработки

Для запуска дев-сервера Vite выполните:

```bash
npm run start
```

После этого в терминале вы увидите адрес, например:

```
VITE v4.5.5  ready in 400 ms

➜  Local:   http://localhost:3000/
```

Перейдите по этому адресу в браузере, чтобы увидеть приложение.

### Запуск тестов

Приложение покрыто базовыми тестами на **Jest** и **Testing Library**. Для запуска тестов выполните:

```bash
npm run test
```

Если тесты успешно пройдут, в терминале вы увидите что-то вроде:

```
PASS src/tests/App.test.tsx
  ✓ adds a new todo (178 ms)
  ✓ toggles a todo (55 ms)
```

### Сборка приложения

Для сборки продакшн-версии приложения запустите:

```bash
npm run build
```

Результат сборки будет помещён в папку `build` (или `dist`, в зависимости от настроек).

---

### Деплой на GitHub Pages

Для того чтобы задеплоить ваше приложение на GitHub Pages, убедитесь, что у вас в `package.json` указано поле `homepage` с адресом вашего репозитория GitHub Pages, а также установлены скрипты `predeploy` и `deploy`, например:

```json
"homepage": "https://<ваш-username>.github.io/Mindbox-my-todo-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Также в файле `vite.config.ts` должен быть настроен параметр `base`, соответствующий имени вашего репозитория:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Mindbox-my-todo-app/',
  build: {
    outDir: 'build'
  }
});
```

После этого выполните:

```bash
npm run deploy
```

Команда `deploy` соберёт проект (predeploy) и загрузит результат (папку `build`) в ветку `gh-pages` вашего репозитория на GitHub. Спустя минуту-две ваше приложение станет доступно по адресу, указанному в `homepage`.

Пример:

```
https://<ваш-username>.github.io/Mindbox-my-todo-app
```

После деплоя вы можете открыть указанный адрес в браузере и увидеть своё приложение онлайн.
