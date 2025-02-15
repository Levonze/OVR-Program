document.getElementById('task3-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Правильные ответы
    const correctAnswers = {
        1: "1", // Коэффициент перед Si
        2: "4", // Коэффициент перед HNO3
        3: "1", // Коэффициент перед HF
        4: "1", // Коэффициент перед H2SiF6
        5: "1", // Коэффициент перед NO2
        6: "1", // Коэффициент перед H2O
        7: "4", // Коэффициент для N в полуреакции
        8: "окислитель", // Окислитель/Восстановитель для N
        9: "1", // Коэффициент для Si в полуреакции
        10: "восстановитель" // Окислитель/Восстановитель для Si
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
        resultDiv.innerHTML = `<p><img src="/assets/right.png" height="25"> Все верно!<br><a href="task4.html">Задание 4</a></p>`;
    } else {
        resultDiv.innerHTML = `<p><img src="/assets/wrong.png" height="25"> Есть ошибки в ответе!</p>`;
    }
});