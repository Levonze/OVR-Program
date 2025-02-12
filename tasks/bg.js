const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = [];
const pointCount = 0; // Количество точек
const maxDistance = 30; // Максимальное расстояние для соединения точек

// Создаем точки
for (let i = 0; i < pointCount; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1, // Скорость по x
        dy: (Math.random() - 0.5) * 1  // Скорость по y
    });
}

// Рисуем точки и линии
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#555';
    ctx.strokeStyle = '#555';

    // Рисуем точки
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    // Рисуем линии между точками
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.stroke();
            }
        }
    }

    // Обновляем позиции точек
    points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        // Отражаем точки, если они выходят за границы
        if (point.x < 0 || point.x > canvas.width) point.dx = -point.dx;
        if (point.y < 0 || point.y > canvas.height) point.dy = -point.dy;
    });

    requestAnimationFrame(draw);
}

// Запускаем анимацию
draw();

// Изменяем размер canvas при изменении размера окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});