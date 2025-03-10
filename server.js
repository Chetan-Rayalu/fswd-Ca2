const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
app.use('/', router);
const PORT = 5000;

const Users = [
    { Username: "MS Dhoni", age: 42, email: "thala07@gmail.com" },
    {Username: "Chetan", age: 17, email: "chetanrayalu07@gmail.com"}
   
];



router.get('/', (req, res) => {
    res.send("Server is Running");
});

router.get('/data', (req, res) => {
    try {
        let { Username } = req.query;


        if (!Username || Username.trim() === '') {
            return res.status(400).json({ message: "Username cannot be empty" });
        }

        const user = Users.find(user => user.Username === Username);
        
        if (!user) {
            return res.status(404).json({ message: "User details not found" });
        }

        res.status(200).json({ message: "User details found", data: user });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
