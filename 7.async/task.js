class AlarmClock {
    constructor() {
        this.alarmCollection = []; // свойство для хранения коллекции звонков
        this.intervalId = null; // свойство для хранения id таймера
    }

    addClock(time, callback) { // добавляет новый звонок в коллекцию существующих
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) { // удаляет звонки по определённому времени
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() { // возвращает текущее время в строковом формате HH:MM
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        let res = `${hours}:${minutes}`;
        return res;
    }

    start() { // запускает будильник
        if (this.intervalId != undefined) {
            return;
        }
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item) => {
                    if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
                        item.canCall = false;
                        item.callback();
                    }
                });
            }, 1000);
        }

    stop() { // останавливает выполнение интервала будильника
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() { // сбрасывает возможность запуска всех звонков
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() { // удаляет все звонки
        this.stop();
        this.alarmCollection = [];
    }
}
