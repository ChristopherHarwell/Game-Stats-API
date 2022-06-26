import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('match-history')
export class MatchHistoryController {
    @Get('match-history/:platform/:platformUserId')
    findHistoryBySession(@Req() request: Request, @Res() response: Response): any {
    }

}
