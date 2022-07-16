import express from 'express';
import pug from 'pug';
import requests from 'requests';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import serveFavicon from 'serve-favicon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();

const viewsPath = path.join(__dirname, "../templates/views");
const cssImages= path.join(__dirname, "../templates/views/assets/css");
const videoBgs = path.join(__dirname, "../templates/views/Weather Conditions");


app.use(express.static(videoBgs));
app.use(serveFavicon(path.join(__dirname, "../templates/views", "favicon.ico")));
app.set('view engine', 'pug');
app.set('views', viewsPath);


app.get("/", (req,res)=>{

    let weather;
    let city = "Bidar";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39b5b3cb4d08c3f59595abd4542a3fae`;
    requests(url)
    .on('data',(chunk)=>{
        weather = JSON.parse(chunk);
        weather.main.temp = parseInt((weather.main.temp-273.15)-1);
        res.render('index.pug', {"weather":weather});
    })
    .on('end', (err)=>{
        if(err) return res.send(err);
    });
});

app.get("/get-weather", (req,res)=>{

    let weather;
    let city = req.query.city;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q={city-name}&appid=39b5b3cb4d08c3f59595abd4542a3fae';
    let url2 = url.replace("{city-name}", city);
    requests(url2)
    .on('data',(chunk)=>{
        weather = JSON.parse(chunk);
        let code=weather.cod;
        if(code==404)
        {
            res.send(`<h1 style='font-family: monospace;'><span style='color:red;'>${city}</span> is incorrect!</h1>`);
        }
        else
        {
            weather.main.temp = parseInt((weather.main.temp-273.15));
            res.render('index.pug', {"weather":weather});
        }
    })
    .on('end', (err)=>{
        if(err) return res.send(err);
    });
});


app.listen(port);