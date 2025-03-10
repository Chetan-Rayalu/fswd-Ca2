const express = require('express');
const port = 5000;
const app = express();
const router = express.Router();

const Users = [
    { Username: "MS Dhoni", age: 42, email: "thala07@gmail.com" },
    {Username: "Chetan", age: 17, email: "chetanrayalu07@gmail.com"}
   
];

// <!-- Kindly Change the usernames and emails according to your requirements -->


app.use(express.json());
app.use('/', router);


router.get('/', (req, res) => {
    res.send("Server is Running");
});

router.get('/data', (req, res) => {
    try {
        let { Username } = req.query;


        if (!Username || Username.trim() === '') {
            return res.status(400).json({ message: "Username cannot be empty!" });
        }

        const user = Users.find(user => user.Username === Username);
        
        if (!user) {
            return res.status(404).json({ message: "User Details Not Found" });
        }

        res.status(200).json({ message: "User Details found", data: user });
    } catch (error) {
        console.error("Error occurred in /find route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
