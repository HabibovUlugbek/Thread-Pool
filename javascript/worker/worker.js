const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const numbers = [21, 37, 32, 12, 43, 10, 30, 15, 20];

if (isMainThread) {
    console.time('Execution Time'); // Start measuring time

    const workers = [];

    const initializeWorkers = () => {
        const numWorkers = 4;

        for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker(__filename, { workerData: i });
            workers.push(worker);
        }
    };

    const sendMessageToWorker = (number) => {
        const worker = workers.shift();
        worker.postMessage(number);
        workers.push(worker);
    };

    initializeWorkers();
    for(let i = 0; i < numbers.length; i++) {
        sendMessageToWorker(numbers[i]);
    }

    console.timeEnd('Execution Time'); // End measuring time

} else {
    const workerId = workerData;

    parentPort.on('message', (number) => {
        const result = fibonacci(number);
        console.log(`Fibonacci of ${number}: ${result} by worker ${workerId}`);
    });

    function fibonacci(num) {
        if (num <= 1) return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
