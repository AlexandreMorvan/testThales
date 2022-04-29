const express = require('express');
const PORT = 3000;
const app = express();
const fs = require('fs');



const functionModule = require('./functions/functionModule')
const dataServ = require('./data/metrics.json');
app.set('view engine', 'ejs');
app.set('views', 'app/views');


// On ajoute notre middleware qui intercept les données envoyer sous format urlencoded et les mets dans le body
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {

    res.status(200).json(dataServ)
})


app.get('/minValue/:name', (req, res) => {

    const metric = req.params.name;

    newArray = functionModule.arrayMin(dataServ, metric);

    res.status(200).json(newArray)
})

app.get('/maxValue/:name', (req, res) => {

    const metric = req.params.name;

    newArray = functionModule.arrayMax(dataServ, metric);

    res.status(200).json(newArray)
})


app.get('/avgValue/:name', (req, res) => {

    const metric = req.params.name;

    newArray = functionModule.arrayAvg(dataServ, metric);

    res.status(200).json(newArray)
})


app.get('/dataBetweenDates/:date1/:date2', (req, res) => {

    const date1 = req.params.date1;
    const date2 = req.params.date2;

    newArray = functionModule.dataBetweenTwoDates(dataServ, date1, date2);

    res.status(200).json(newArray)
})

app.get('/metricValueBetweenTwoDates/:name/:date1/:date2', (req, res) => {

    const metric = req.params.name;
    const date1 = req.params.date1;
    const date2 = req.params.date2;

    newArray = functionModule.metricValueBetweenTwoDates(dataServ, metric, date1, date2);

    res.status(200).json(newArray)
})

app.get('/addValue', (req, res) => {

    const keys = Object.keys(dataServ[0])

    res.render('addValue', { keys })

})

app.post('/addValue', (req, res, next) => {

    const form = req.body;

    for (property in form) {

        if (property === 'time') {
            next();
        } else {

            const u = parseInt(form[property])
            console.log(u)
            form[property] = u;
        }
    }

    dataServ.push(form)

    const dataServToString = JSON.stringify(dataServ)

    fs.writeFile('/var/www/html/thales/testNode1/data/metrics.json', dataServToString, (err) => {

        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
        }
    });

    res.status(201).json({ message: "Value added" })
    
})

app.listen(PORT, () => {
    console.log(`app started on http://localhost:${PORT}`);
})