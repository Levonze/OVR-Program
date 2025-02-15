document.getElementById('task2-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Правильные ответы
    const correctAnswers = {
        1: "1", // Коэффициент перед PH3
        2: "4", // Коэффициент перед H2SO4
        3: "1", // Коэффициент перед H3PO4
        4: "4", // Коэффициент перед SO2
        5: "4", // Коэффициент перед H2O
        6: "4", // Коэффициент для S в полуреакции
        7: "окислитель", // Окислитель/Восстановитель для S
        8: "1", // Коэффициент для P в полуреакции
        9: "восстановитель" // Окислитель/Восстановитель для P
    };

    // Получаем все поля ввода и выбора
    const inputs = document.querySelectorAll('#task2-form input, #task2-form select');
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
        resultDiv.innerHTML = `<p><img src="/assets/right.png" height="25"> Все верно!<br><a href="task3.html">Задание 3</a></p>`;
    } else {
        resultDiv.innerHTML = `<p><img src="/assets/wrong.png" height="25"> Есть ошибки в ответе!</p>`;
    }
});