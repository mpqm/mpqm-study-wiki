const express = require("express")
const url = require("url")
const app = express();
const port = 3000

app.listen(port, () => console.log(`server start use ${port}`));

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req,res) {
    const user = url.parse(req.url, true).query
    res.json(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

function feed(_, res) {
    res.end(`
    <ul>
        <li>p1</li>
        <li>p2</li>
    </ul>
    `);
}
