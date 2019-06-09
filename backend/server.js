const app = require("./app");

const PORT = process.env.PORT || 3200;

app.listen(3200, () => console.log(`Listening on port ${PORT}`));
