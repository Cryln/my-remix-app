// SayHelloService.js
export function sayHelloService(name) {
    const greeting = `Hello, ${name || "Stranger"}!`;
    return { greeting };
  }
  