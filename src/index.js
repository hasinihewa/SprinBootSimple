const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Example endpoint
app.get('/api/v1/movies', (req, res) => {
  res.json([
    {
      id: { timestamp: 1714979901, date: '2024-05-06T07:18:21.000+00:00' },
      imdbId: 'tt3915174',
      title: 'Puss in Boots: The Last Wish',
      releaseDate: '2022-12-21',
      trailerLink: 'https://www.youtube.com/watch?v=tHb7WlgyaUc',
      genres: ['Animation', 'Action', 'Adventure', 'Comedy', 'Family'],
      poster: 'https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg',
      backdrops: [
        'https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
        // Add other backdrops here...
      ],
      reviewIds: [
        {
          id: { timestamp: 1715423130, date: '2024-05-11T10:25:30.000+00:00' },
          body: 'reallyiiiiiiiiiiiiii enjoy it'
        },
        {
          id: { timestamp: 1715423831, date: '2024-05-11T10:37:11.000+00:00' },
          body: 'reallyiiiiiiiiiiiiii enjoy it'
        }
      ]
    },
    // Add other movies here...
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
