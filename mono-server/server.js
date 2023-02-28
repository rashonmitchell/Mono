const app = require('./modules/app/app');
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`[mono-server] Listening on ${port}.`);
});