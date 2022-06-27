import { Controller, Get, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Request, Response } from 'express';
@Controller('match-history')
export class MatchHistoryController {
    @Get('match-history/:platform/:platformUserId')
    findHistoryBySession(@Req() request: Request, @Res() response: Response): any {
        axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${request.params.platform}/${request.params.platformUserId}/sessions`).then(res => {
            response.send(res.data);
        }).catch(err => {
            response.send(err);
        })
    }

}
