import chalk from "chalk";
import http from "http";
import 'dotenv/config';

console.log(chalk.blue("Hello Friends"));
console.log(chalk.red("Paul"));
console.log(chalk.green("Marla"));

const host = process.env.HOST
const port = process.env.PORT


const server = http.createServer((request, response) => {
 response.end('<h1>Hello World</h1>');
}); 

server.listen(port, host, () => {
 console.log(`Server is running on http://${host}:${port}`);
}
);


