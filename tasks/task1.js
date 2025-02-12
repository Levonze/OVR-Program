document.getElementById('task1-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Правильные ответы
    const correctAnswers = {
        1: "5", // Коэффициент перед CuSO4
        2: "2", // Коэффициент перед P
        3: "8", // Коэффициент перед H2O
        4: "5", // Коэффициент перед Cu
        5: "2", // Коэффициент перед H3PO4
        6: "5", // Коэффициент перед H2SO4
        7: "5", // Коэффициент для Cu в полуреакции
        8: "окислитель", // Окислитель/Восстановитель для Cu
        9: "2", // Коэффициент для P в полуреакции
        10: "восстановитель" // Окислитель/Восстановитель для P
    };

    // Получаем все поля ввода
    const inputs = document.querySelectorAll('#task1-form input, #task1-form select');
    let isCorrect = true;

    inputs.forEach(input => {
        const userAnswer = input.value.trim(); // Получаем ответ пользователя
        const correctAnswer = correctAnswers[input.name]; // Получаем правильный ответ

        if (userAnswer !== correctAnswer) {
            isCorrect = false; // Если хотя бы один ответ неверный, устанавливаем флаг в false
        }
    });

    // Выводим результат
    const resultDiv = document.createElement('p');
    if (isCorrect) {
        resultDiv.innerHTML = `<img src="right.png" height="25"> Все верно!<br><a href="task2.html">Задание 2</a>`;
    } else {
        resultDiv.innerHTML = `<img src="wrong.png" height="25"> Есть ошибки в ответе!`;
    }

    // Удаляем предыдущий результат (если есть)
    const oldResult = document.getElementById('result');
    if (oldResult) {
        oldResult.remove();
    }

    // Добавляем новый результат
    resultDiv.id = 'result';
    document.getElementById('task-div').appendChild(resultDiv);
});