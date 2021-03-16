const http = require("http");
const fs = require("fs");
const { writeFile } = require("node:fs");


const server = http.createServer((req, res) => {
    const pathName = req.url;
    if ((pathName === "/home") || (pathName === "/")) {
        fs.readFile("home.html", "utf-8", (err, data) => {
            res.end(data);
        });
    } else if (pathName === "/movie") {
        fs.readFile("movie.html", "utf-8", (err, data) => {
            res.end(data);
        });
    } else if (pathName === "/cricket") {
        fs.readFile("cricket.html", "utf-8", (err, data) => {
            res.end(data);
        });
    } else if (pathName === "/update") {
        let data = []
        
        req.on("data", line => {
            data.push(line)
        });

        req.on("end", () => {
            data = JSON.parse(data);
            let finalData = JSON.stringify(data)
            fileData.push(JSON.parse(finalData))
            const writable = JSON.stringify(Data)

            fs.writeFile("data.json", writable, (err) => {
                console.log(err)
            })
            res.end("Successfully updated")
        })
    } else {
        res.writeHead(400, {
            "content-type": "text/html"
        });
        fs.readFile("notfound.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server is listening to port 3000");
});