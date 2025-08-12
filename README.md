# Card Game MVP

## Описание
Это MVP простой карточной игры на TypeScript с использованием React (Frontend) и NestJS (Backend).  
Цель проекта — прокачать навыки фуллстек-разработки, изучить ООП, паттерны проектирования, алгоритмы и структуры данных на практике.

## Технологии
- TypeScript
- React
- NestJS
- PostgreSQL

## Структура проекта
- `/frontend` — React приложение
- `/backend` — NestJS API
- `/shared` — общие модели и логика игры

## Запуск проекта
1. Клонируйте репозиторий
```bash
git clone https://github.com/IvanJSBog/card-game-mvp
```
2. Установите зависимости для фронтенда и бэкенда
```bash
cd frontend && npm install
cd ../backend && npm install
```
3. Запустите backend и frontend
```bash
# В одной вкладке терминала
cd backend && npm run start  
# В другой вкладке терминала
cd frontend && npm start
```