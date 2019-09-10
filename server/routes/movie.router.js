const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


//Get movie list
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
                        ORDER BY "title" ASC;`

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });

});
//get single movie

router.get('/single/:id', (req, res) => {


    const queryText = `SELECT * FROM "movies"
                        JOIN "movies_genres" ON "movies.id ="movies_genres".movies_id
                        JOIN "genres" ON "movies_genres".genres_id = "genres".id
                        WHERE "movies".id = $1;`
    const movieId = req.params.id;

    pool.query(queryText, [movieId])
        .then((response) => {
            res.send(response.ros);
        })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

router.put('/single/:id', (req, res) => {
    const newMovieData = req.body;
    const movieId = req.params.id;
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2
                        WHERE "id" = $3;`;

    pool.query(queryText, [newMovieData.title, newMovieData.description, movieId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error with PUT (single): ', err);
            res.sendStatus(500);
        });
});


module.exports = router;