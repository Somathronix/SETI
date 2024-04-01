const signalsContainer = document.getElementById('signals');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const constellationCounter = document.getElementById('constellationCounter');
let signalGenerator = null; // Инициализируем переменную signalGenerator значением null

startBtn.addEventListener('click', startSignalGenerator);
stopBtn.addEventListener('click', stopSignalGenerator);

function startSignalGenerator() {
    // Проверяем, если уже есть активный интервал, то не создаем новый
    if (!signalGenerator) {
        signalGenerator = setInterval(generateSignal, 1000);
    }
}

function stopSignalGenerator() {
    clearInterval(signalGenerator);
    signalGenerator = null; // Присваиваем переменной signalGenerator значение null при остановке
}

function generateSignal() {
    const randomSignal = generateRandomSignal();
    const signalElement = document.createElement('div');
    signalElement.textContent = randomSignal;
    signalsContainer.prepend(signalElement);

    // Limit signals to 10
    if (signalsContainer.children.length > 10) {
        signalsContainer.removeChild(signalsContainer.lastChild);
    }

    // Highlight random signal
    highlightRandomSignal();

    // Update constellation counter
    updateConstellationCounter();
}

function generateRandomSignal() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let signal = '';

    for (let i = 0; i < 20; i++) {
        signal += letters.charAt(Math.floor(Math.random() * letters.length));
        signal += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return signal;
}

function highlightRandomSignal() {
    const signals = signalsContainer.children;
    const randomIndex = Math.floor(Math.random() * signals.length);
    const randomSignal = signals[randomIndex];

    // Add class to randomly selected signal
    randomSignal.classList.add('highlighted');
}

function updateConstellationCounter() {
    const randomConstellationCount = Math.floor(Math.random() * 10);
    constellationCounter.textContent = `Signals blocked: ${randomConstellationCount}`;
}

//Изображения 

const leftWindow = document.getElementById('leftWindow');
const rightWindow = document.getElementById('rightWindow');

// Массив с путями к изображениям для Left Window Image
const leftImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// Массив с путями к изображениям для Right Window Image
const rightImages = ['image4.jpg', 'image5.jpg', 'image6.jpg'];

function generateSignal() {
    const randomSignal = generateRandomSignal();
    const signalElement = document.createElement('div');
    signalElement.textContent = randomSignal;
    signalsContainer.prepend(signalElement);

    // Limit signals to 10
    if (signalsContainer.children.length > 10) {
        signalsContainer.removeChild(signalsContainer.lastChild);
    }

    // Highlight random signal
    highlightRandomSignal();

    // Update constellation counter
    updateConstellationCounter();
    
    // Выбор случайного изображения для Left Window Image
    const randomLeftImage = leftImages[Math.floor(Math.random() * leftImages.length)];
    leftWindow.querySelector('img').src = randomLeftImage;

    // Выбор случайного изображения для Right Window Image
    const randomRightImage = rightImages[Math.floor(Math.random() * rightImages.length)];
    rightWindow.querySelector('img').src = randomRightImage;
}


const logElement = document.getElementById('log');

// Функция для генерации случайных символов логирования
function generateLog() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let logText = '';
    for (let i = 0; i < 1000; i++) {
        logText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return logText;
}

// Функция для обновления логов
function updateLog() {
    logElement.textContent = generateLog();
}

// Вызываем функцию обновления логов при загрузке страницы и затем каждые 3 секунды
updateLog();
setInterval(updateLog, 1000);
