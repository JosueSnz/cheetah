const express = require('express');
const app = express();
app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
});

app.get('/', chamandopython);
function chamandopython(req, res) {
    var spawn = require("child_process").spawn;
    var process = spawn("python", ["./script.py"]);
    process.stdout.on("data", function (data) {
        res.send(data.toString());
    });
}

