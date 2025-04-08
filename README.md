# Cocktail Menu 🍸

Мобильное приложение для поиска рецептов коктейлей с использованием TheCocktailDB API

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=flat&logo=capacitor&logoColor=white)](https://capacitorjs.com/)

## Особенности

- 🔍 Поиск коктейлей по названию
- 🎲 Случайный коктейль
- 📄 Детальная информация о коктейле
- 📱 Поддержка Android через Capacitor

## Технологии

- **Frontend**: Angular 19+, Ionic 8+
- **Мобильная сборка**: Capacitor 7+
- **Стилизация**: CSS Variables, Ionic Components
- **API**: [TheCocktailDB](https://www.thecocktaildb.com/api.php)

## Быстрый старт

### Предварительные требования

- Node.js 18+
- npm 9+
- Android Studio (для сборки под Android)

### Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/eRybalchenko/cocktail-menu.git
cd cocktail-menu/cocktail-menu
```

2. Установить зависимости:
```bash
npm install
```

3. Запустить веб-версию:
```bash
ionic serve
```

## Сборка для Android

1. Собрать production-версию:
```bash
ionic build --prod
```

2. Добавить Android-платформу:
```bash
ionic cap add android
```

3. Скопировать ресурсы:
```bash
ionic cap copy
```

4. Открыть проект в Android Studio:
```bash
ionic cap open android
```

5. В Android Studio:
- Выберите устройство/эмулятор
- Нажмите "Run" ▶️

## Структура проекта

```
cocktail-menu/
├── src/
│   ├── app/
│   │   ├── api/               # Сервисы
│   │   ├── components/        # Переиспользуемые компоненты
│   │   ├── pages/             # Основные страницы приложения
│   │   │   ├── main/          # Главная страница
│   │   │   └── details/       # Страница деталей
│   ├── assets/                # Статические ресурсы
│   └── theme/                 # Глобальные стили
├── android/                   # Нативный Android-проект
└── capacitor.config.ts        # Конфигурация Capacitor
```
