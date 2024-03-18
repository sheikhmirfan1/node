import chalk from "chalk";
import http from "http";
import 'dotenv/config';
import fs from "fs";
import axios from "axios";

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

fs.writeFile('data.txt', 'Hello World ', 'utf-8', (err) => {
  if (err) throw err;
    console.log('The file has been saved!');
}
);
fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
    console.log(data);
}
);


//  axios.get('http://www.google.com')
//     .then((response) => {
//         fs.writeFile('google.html', response.data, 'utf-8', (err) => {
//         if (err) throw err;
//             console.log('The file has been saved!');
//         }
//         );
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const fetchData = async () => {
  try {
    const response = await axios.get("http://www.google.com");
    fs.writeFile("google.html", response.data, "utf-8",(err)=>{
        if (err)throw err;
        console.log("The file has been saved!");
    });
    
  } catch (error) {
    console.log(error);
  }
};

fetchData();


