Тестовое задание React

1. Создать компонент навигации который будут включать в себя 4 страницы:
 - index
 - cat
 - dog
 - fox
Навигации должна отображаться на всех страницах.

2. На странице index создать 3 отдельные службы таймера которые с разной задержкой буду слать запросы к API и отображать содержимое на странице.
 - Первый блок(Название: CAT(every 5 second)), каждые 5 секунд делает запрос на https://cataas.com/cat?json=true, и отображает параметр url (https://cataas.com/ + url) внутри блока в тега <img src="{url}"/>
- Второй блок(Название: DOG(every 10 second)), каждые 10 секунд делает запрос на https://dog.ceo/api/breeds/image/random, и отображает параметр message  внутри блока в тега <img src="{message}"/>
- Третий блок(Название: FOX(every 15 second)), каждые 15 секунд делает запрос на https://randomfox.ca/floof/, и отображает параметр image  внутри блока в тега <img src="{image}"/>

3. Остальный страницы пагинации cat, dog, fox должны соответствовать функционалу блоков главной страницы и выполнять только тот функционал который соответствует странице. 
- cat - Первый блок
- dog - Второй блок
- fox - Третий блок

4. Требований или ограничений по внешнему виду,  расположения блоков или меню нет.