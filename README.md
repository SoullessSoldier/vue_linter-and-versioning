# Vue 3 + TypeScript + Vite
## Заготовка с ESLint, Prettier и функцией отображения версии сборки.

Изменения в @/main.ts, ./vite-env.d.ts, ./package.json, ./tsconfig*, ./vite.config.ts, ./eslint.config.ts



### ESlint & Prettier
смотрим, исправляем ошибки
```sh
npm run lint
```
прогоняем форматтер
```sh
npm run prettier
```

Вывод номера сборки:
0.0.0 = major.minor.patch \
В папке app перед билдом повышаем версию сборки:
```sh
npm version patch
```
Опции версионирования:
- **patch** - если незначительные изменения либо обновление данных;
- **minor** - добавление функционала без нарушения совместимости;
- **major** - крупные изменения, либо изменения, несовместимые с предыдущей версией.


Useful links:  
https://www.npmjs.com/package/@vue/eslint-config-prettier  
https://dev.to/aolyang/eslint-flat-config-tutorial-2bm5  
https://eslint.org/docs/latest/use/configure/configuration-files  
https://eslint.org/docs/latest/use/command-line-interface  
https://eslint.vuejs.org/user-guide/

