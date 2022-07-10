// import app from './app.js';

// const port = 3000;

// // listen on port 3000
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
import axios from 'axios';
import express from 'express';
const app = express();
const port = 3000;

app.get('/:platform/:platformUserId', async (req, res) => {
    let test = [];
    let response = await axios.get(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${req.params['platform']}/${req.params['platformUserId']}/sessions`,        {
          headers: {
            "TRN-Api-Key": "d20b6c40-e614-438d-9c58-f61714543113"
          }
        }
    )
    console.log(response.data.data)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
