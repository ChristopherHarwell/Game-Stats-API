import { Controller, Get, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Request, Response } from 'express';
@Controller('match-history')
export class MatchHistoryController {
  @Get(':platform/:platformUserId')
  findHistoryBySession(
    @Req() request: Request,
    @Res() response: Response,
  ): any {
    /**
     * Gets the match history for the given summoner.           
     * @param {string} summonerName - the summoner name           
     * @returns {Promise<any>} - the match history           
     */
    const res = axios
      .get(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${request.params['platform']}/${request.params['platformUserId']}/sessions`,
      )
      .then((res) => console.log(res.data))
      .catch(
        (err) => err + 'err on at: match-history/match-history.controller.ts',
      );
    return res;
  }
}
