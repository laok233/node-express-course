const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", (req, res) => {
	res.json({
		success: true,
		message: "successfully got users. Nice!",
		users: mockUserData,
	});
});

app.get("/users/:id", (req, res) => {
	console.log(req.params.id);
	res.json({
		success: true,
		message: "got one user",
		user: req.params.id,
	});
});

app.get("/time", (req, res) => {
    const date = new Date()
	res.json({
		success: true,
		message: "time",
		date: date,
	});
});

app.post("/login", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const mockUsername = "billyTheKid";
        const mockPassword = "superSecret";

        if (username === mockUsername && password === mockPassword) {
            res.json({
                success: true,
                message: "password and username match!",
                token: "encrypted token goes here",
            });
        } else {
            res.json({
                success: false,
                message: "password and username do not match",
            });
        }
    });

app.listen(8000, () => {
	console.log("server is running");
});
