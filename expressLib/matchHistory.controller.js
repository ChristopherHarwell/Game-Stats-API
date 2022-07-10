import { Router } from 'express';
import axios from 'axios';
const router = Router();
router.get('/:platform/:platformUserId', async function (req, res) {
  let test = [];
  await axios
    .get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/${req.params['platform']}/${req.params['platformUserId']}/sessions`,
    )
    .then((res) => {
      test.push(res.data);
    })
    .catch(
      (err) => err + 'err on at: match-history/match-history.controller.ts',
    );
  return test;
});

export default router;
