import http from "http";
import moment from "moment";

const server = http.createServer((req, res) => {

    if(req.url === "/"){

        res.write("Welcome to My First Node.js Server");

    }

    else if(req.url === "/about"){

        res.write("About Page");

    }

    else if(req.url === "/contact"){

        res.write("Contact Page");

    }

    else if(req.url === "/time"){

        const currentTime = moment().format("DD-MM-YYYY HH:mm:ss");

        res.write(`Current Date & Time: ${currentTime}`);

    }

    else if(req.url === "/api"){

        res.setHeader("Content-Type","application/json");

        res.write(JSON.stringify({
            name: "Arshit",
            course: "BTech CSE",
            project: "Hello Server"
        }));

    }

    else{

        res.write("404 Page Not Found");

    }

    res.end();

});

server.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});