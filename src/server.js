import app from './app';
const port = 3001;

app.listen(port, ()=>{
    console.log();
    console.log('Running in port', port);
    console.log(`Ctrl + click in http://localhost:${port}`);
    console.log();
});