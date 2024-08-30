import { ReactNode } from 'react';

export interface Team {
    name: string;
    logo: ReactNode;
}

export interface IMatch {
    id: string,
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    matchTime: string;
    isLive?: boolean;
}
