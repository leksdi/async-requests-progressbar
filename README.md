# Загрузка больших файлов

Домашнее задание к занятию 3.1 «Асинхронные запросы».

## Описание 

Необходимо разработать индикатор загрузки большого файла, отправленного через AJAX.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка

Для индикации прогресса пользуйтесь тегом *progress*, находящимся в разметке:

```html
<progress value="0.0" id="progress"></progress>
```

Для манипуляции тегом пользуйтесь его свойством *value*:

```js
const progress = document.getElementById( 'progress' );
progress.value = 0.7;
```

### Процесс реализации

1. Загрузите форму через AJAX по адресу *https://netology-slow-rest.herokuapp.com/upload.php*
2. Отслеживайте событие изменения загрузки и в соответствии 
с ним корректируйте прогресс

## Решение задач

1. Перейти в папку задания. `cd ./async-requests/progressbar`.
2. Открыть файл `task.js` в вашем редакторе кода и выполнить задание.
3. Открыть файл `task.html` в вашем браузере и убедиться в правильности выводимых результатов.
4. Добавить файл `task.js` в индекс git с помощью команды `git add %file-path%`, где %file-path% - путь до целевого файла. `git add task.js`.
5. Сделать коммит используя команду `git commit -m '%comment%'`, где %comment% - это произвольный комментарий к вашему коммиту. `git commit -m 'first commit progressbar'`.
6. Опубликовать код в репозиторий homeworks с помощью команды `git push -u origin master`.
7. Прислать ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].

[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/REAMDE.md
[6]: https://netology.ru/

*Никаких файлов прикреплять не нужно.*

Все задачи обязательны к выполнению для получения зачета. Присылать на проверку можно каждую задачу по отдельности или все задачи вместе. Во время проверки по частям ваша домашняя работа будет со статусом "На доработке".

Любые вопросы по решению задач задавайте в Slack-канале.
# async-requests-progressbar
