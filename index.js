import chalk from "chalk";
import http from "http";

console.log(chalk.blue("Hello Friends"));
console.log(chalk.red("Paul"));
console.log(chalk.green("Marla"));

const host = "localhost";
const port = 8000;

const server = http.createServer((request, response) => {
 response.end('<h1>Hello World</h1>');
}); 

server.listen(port, host, () => {
 console.log(`Server is running on http://${host}:${port}`);
}
);


