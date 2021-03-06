# CI/CD

Принцип действия CI/CD похож на конвейер: методика выполняет интеграционную функцию, включая различные типы автоматических тестов на каждом этапе, с последующей доставкой и развёртыванием завершённого кода в готовый продукт для конечного пользователя.

Если Agile – это устранение зазора во взаимодействии заказчика и разработчика, а DevOps – снятие границ между разработчиком и администратором, то CI/CD – это воплощение стратегий и компонентов DevOps на практике.

В CI/CD разработчик не просто пишет абстрактный код по ТЗ, а ещё и мгновенно его тестирует своими же силами.

**Главные плюсы CI/CD**:

- Скорость вывода новой функциональности от запроса клиента до запуска в эксплуатацию. CI/CD позволяет запускать обновления за считанные дни или недели по сравнению с целым календарным годом при классическом waterfall-подходе. Новые сервисы – новые конкурентные бизнес-преимущества. Появляется возможность не просто воспроизводить функциональность решений конкурентов, но и значительно опережать их в разработке и внедрении новых инструментов.
- Возможность выбора оптимального варианта за счет оперативного тестирования и большего числа итераций. Отказавшись от работы над бесперспективными решениями, вы сэкономите ресурсы компании.
- Качество итогового результата выше: автотестирование охватывает все аспекты продукта, что труднореализуемо при стандартном релизном подходе. Все ошибки и тонкие места выявляются и удаляются ещё на ранних этапах разработки.

**Главные минусы CI/CD**:

- Искушение перевести на Agile, DevOps и CI/CD сразу всё, что связано с корпоративными ИТ-системами, включая core-уровень, без приобретения первичного опыта. Это может серьёзно нарушить работу компании, особенно при плохой организации перехода на новую методологию.
- Поддержка должного уровня координации между CI и CD. Быстрые и качественные результаты от применения методики возможны только после длительной и тщательной настройки взаимодействия между командами DevOps, инженерами, scrum-экспертами и руководством компании. Самое сложное в CI/CD – человеческий фактор, налаживание здоровой командной работы, которую запрограммировать и автоматизировать невозможно.

---

# Принципы

1. Первый принцип CI/CD: сегрегация ответственности заинтересованных сторон.
2. Второй принцип CI/CD: снижение риска.
3. Третий принцип CI/CD: короткий цикл обратной связи.
4. Реализации среды в CI/CD.
5. Инструменты для CI/CD.

**Инструменты для CI/CDЛокальные**

GitLab CI, TeamCity, Bamboo, GoCD Jenkins, Circle CI.

**Облачные**

BitBucket Pipelines, Heroku CI, Travis, Codeship, Buddy CI, AWS CodeBuild.

**Правительственные**

hats, Nectar.

---

[https://www.youtube.com/watch?v=YG8Zky0PL1I](https://www.youtube.com/watch?v=YG8Zky0PL1I)

Залог успешной автоматизации - унификация

Упаковщик - docker (entrypoint, через regestry)

Delivery - Configuration Management System (Ancible or others)

Запускает - GitLab (gitlab-ci-multi-runner)

Build → Testing → Deploy → Cleanup

---

[https://www.youtube.com/watch?v=Rrv0-I3HIAw](https://www.youtube.com/watch?v=Rrv0-I3HIAw)

Правила непрерывной интеграции

1. автоматическая сборка с тестами
2. все комитят часто (min раз в день)
3. быстрая сборка и быстрые тесты
4. легко узнать статус любой сборки
5. тесты используют настоящую БД

### автоматическая сборка с тестами

Bamboo, Hudson, Jenkins, Travis CI, Snap CI

### все комитят часто (min раз в день)

rebase всегда

### быстрая сборка и быстрые тесты

unit + selenium (сначала unit, потом e2e)

---

[https://www.youtube.com/watch?v=upHLuHD8xtQ](https://www.youtube.com/watch?v=upHLuHD8xtQ)

docker (kubernetes - панель для докера)

ancible,

message-sender (Docker) + prostgreSQL + RabbitMQ → Bot (Docker) + Neo4J + Scheduler (Docker) + PostrgreSQL → Pg Logger (Docker) + RabbitMQ + GA Logger (Docker) + PostgreSQL (Analytics)

go cd + consul

amazon

Kibana (для логгов)

---

[https://youtu.be/CwU-OiS_PEQ](https://youtu.be/CwU-OiS_PEQ)

GitLab

Прочитать "Проект Феникс"

- Производительность всей команды
- Обратная связь
- Формирование культуры

CI - это дорого!

Сложность

Time to market

0. С чего начать?

Тесты (smoke - (back-front взаимодействие) + unit + E2E (но можно без E2E, т.к. они сложные)

Build + Realease (Монорепозиторий - бэк + фронт в 1-ой репе, лерна нужна только для npm пакетов)

Run

1. CI

yaml

test:

stage: run

script:

- npm install —development
- npx prettier -c "\*_/_.js"
- npx eslint \$LINT_DIRECTORY
- npm test

only:

- merge_requests

2. Docker (стандартные бочки)

3 бандла (билд, дев, стайдж) могут быть разные! Докер решит эту проблему

фронт контейнер и бэк контейнер

CD

Если что-то можно формализовать, то это можно автоматизировать

3. Iaac (Infrastucture as a Code)

3+) Kubernetes

apiVersion: v1

kind: Pod

metadata:

name: bsm-portal

spec:

containers:

- name: portal-app

  image: us.gcr.io/kubernetes

Google Cloud Run (serverless + kubernetes)

Gitlab позволяет добавить kubernetes

4. Потенциал

Можно кидать 10% пользователям свой билд

Делать билды для просмотра в PR

---

Рассмотрим классический процесс решения задачи, подходящий для большинства компаний:

- Берем задачу из списка/Получаем от начальства
- Создаем новую ветку в git и открываем пул реквест
- Пишем код
- Лично или с помощью коллеги выполняем код-ревью (*code review* — обзор/проверку кода)
- Запускаем тесты
- Сливаем ветку в мастер
- Выполняем сборку проекта
- Публикуем новую сборку

---

# TFS, TeamCity, Jenkins

...

# Build modes

...

...
