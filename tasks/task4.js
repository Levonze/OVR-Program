document.getElementById('task3-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Правильные ответы
    const correctAnswers = {
        1: "3",
        2: "1",
        3: "3",
        4: "3",
        5: "6",
        6: "1",
        7: "1",
        8: "окислитель",
        9: "3",
        10: "восстановитель"
    };

    // Получаем все поля ввода и выбора
    const inputs = document.querySelectorAll('#task3-form input, #task3-form select');
    let isCorrect = true;

    inputs.forEach(input => {
        const userAnswer = input.value.trim(); // Получаем ответ пользователя
        const correctAnswer = correctAnswers[input.name]; // Получаем правильный ответ

        if (userAnswer !== correctAnswer) {
            isCorrect = false; // Если хотя бы один ответ неверный, устанавливаем флаг в false
        }
    });

    // Выводим результат
    const resultDiv = document.getElementById('result');
    if (isCorrect) {
        resultDiv.innerHTML = `<p><img src="/assets/right.png" height="25"> Все верно!<br><a href="task5.html">Задание 5</a></p>`;
    } else {
        resultDiv.innerHTML = `<p><img src="/assets/wrong.png" height="25"> Есть ошибки в ответе!</p>`;
    }
});