# Sasflix Frontender

Задача: Реализовать приложение с общим списком постов и отдельными страницами с комментариями. Код на Nuxt3/Vue3, TypeScript и Pinia, и разбит на компоненты.

### Приложения должно:

повторять макет в Фигме;
- выводить первые 5 постов из API на общей странице;
- быть написано без использования готовых библиотек компонентов;
- иметь кликабельные кнопки лайка и дизлайка;
- удалять комментарии, изменять значении и стили кнопок локально.

---

### Памятка смотрящим

- Этот проект основан на моем [nuxt-core-template](https://github.com/yesfedor/nuxt-core-template), который хостится [тут](https://nuxt-core-template.iny.su/)
- Все nuxt-core-template видны в проекте шаблона, можете изучить его тоже
- Что идет далее - не стал переводить, тк не имеет смысла. GitHub Actions также не настраивал для этого "проекта"
- Не забудьте скопировать `.env` в корень проекта из [./environments/local.env](./environments/local.env)
- StoryBook есть, но не описан, как по мне, для задания - ту мач

---

### Special modifications

1. A `<ui-icon>` component has been created that covers the functionality of `nuxt-icon`. There is also a module written for it that scans the `~~/assets/icon` folder and generates a `types` based on the files. Adds hints to the icon name when using the component
2. A `<core-scope>` is a "god" component, it avoids duplication of initialization code and is a repository of the necessary components throughout the application.
3. Plugin `1.initialization.ts` - initialization you're app here - validate token, request the site configuration, etc.
4. Plugin `2.eventBus.ts` - wrapper over the `mitt` package for convenient use
5. A `app/api` api folder support auto-imports a.k.a composable, for details see [homepage](./app/pages/index.vue)

---

### Docs

1. [Architecture](./docs/architecture.md) - For a quick start, the project philosophy is described, which you can change
2. [Stylesheets](./app/assets/stylesheets/README.md) - For a quick start, the philosophy of styles is described. SCSS is included

### Installation

> You can view the Node.js version in [.nvmrc](./.nvmrc)

```bash
nvm i && nvm use
cp ./environments/local.env .env
```

---

### Dev Mode

```bash
npm run dev
```

---

### Build and start server

```bash
npm run build && node .output/server/index.mjs
```

### SSG mode and start server

```bash
nuxi generate && npx serve .output/public
```
