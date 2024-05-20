# Thread Pool

A thread pool is a software design pattern that allows for the efficient management and utilization of a fixed number of threads. It is commonly used in concurrent programming to improve performance and resource management.

## Examples

### Go

#### Simple Thread Pool

In this example, we create a simple thread pool in Go that allows us to execute multiple tasks concurrently. The thread pool is implemented using goroutines and channels.

path of file is `./go/simple/main.go`

You can run the example by executing the following command:

```bash
go run ./go/simple/main.go
```

Main idea is to create a pool of workers and a channel to send tasks to the workers. The workers will listen on the channel for tasks and execute them concurrently. All workers will run in parallel and process the tasks concurrently and the same amount.

#### Complex Thread Pool

In this example, we create a more complex thread pool in Go that allows us to execute multiple tasks concurrently. The thread pool is implemented using goroutines, channels and mutexes to synchronize access to shared resources. We also introduce a time-consuming task to simulate real-world scenarios where tasks may take different amounts of time to complete

path of file is `./go/complex/main.go`

You can run the example by executing the following command:

```bash
go run ./go/complex/main.go
```

Main idea here is just creating time consuming task and demonstrating all workers does net get same amount of tasks showing this in percentages. And showing how to use mutexes to synchronize access to shared resources.

### JavaScript

#### LIBUV Thread Pool

In this example, we use the LIBUV syncchronous and asynchronous functions to demonstrate how the thread pool works in JavaScript. LIBUV is a C library that provides event-driven programming and asynchronous I/O support for Node.js.And there is `UV_THREADPOOL_SIZE` environment variable to set the size of thread pool.
Spoiler: It is 4 by default.

`sync.js` and `async.js` files are in `./javascript/libuv` folder.

You can run the example by executing the following command:

```bash
node ./javascript/libuv/sync.js
```

```bash
node ./javascript/libuv/async.js
```

Main idea is to show how the thread pool works in JavaScript and how to use the `LIBUV` library to perform synchronous and asynchronous operations.

#### Node.js with Worker Modules

In this example, we use the Worker Threads module in Node.js to create a thread pool and execute multiple tasks concurrently. The Worker Threads module allows you to create and manage worker threads in Node.js, which can be used to perform CPU-intensive tasks in parallel.

#### Node.js with Cluster Module

In this example, we use the Cluster module in Node.js to create a thread pool and execute multiple tasks concurrently. The Cluster module allows you to create and manage worker processes in Node.js, which can be used to perform CPU-intensive tasks in parallel.

## References

- [Thread Pool - Wikipedia](https://en.wikipedia.org/wiki/Thread_pool)
- [Goroutines - Go Documentation](https://golang.org/doc/effective_go.html#goroutines)
- [Channels - Go Documentation](https://golang.org/doc/effective_go.html#channels)
- [LIBUV - Official Documentation](https://docs.libuv.org/en/v1.x/)
- [Node.js - Official Documentation](https://nodejs.org/en/docs/)
- [Concurrency in Go - Blog Post](https://blog.golang.org/concurrency-is-not-parallelism)
- [Concurrency in JavaScript - Blog Post](https://blog.logrocket.com/concurrency-in-javascript/)
- [Concurrency in Node.js - Blog Post](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)

## Conclusion

Thread pools are a powerful tool for managing and utilizing threads efficiently in concurrent programming. They allow you to control the number of threads used in your application and provide a way to manage shared resources and tasks. By using thread pools, you can improve the performance and scalability of your application while reducing resource consumption and overhead.
