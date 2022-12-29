require("express-async-errors");

const { request, response } = require("express");
const express = require("express");
const AppError = require("./Utils/AppError");

const app = express();
app.use(express.json());

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

const port = 3333;
app.listen(port, () => console.log(`Server ir running on port ${port}`));

