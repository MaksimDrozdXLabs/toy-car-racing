import Juventus from '@/app/shared/assets/icons/teamLogo/juventus.svg';
import Milan from '@/app/shared/assets/icons/teamLogo/milan.svg';
import MU from '@/app/shared/assets/icons/teamLogo/mu.svg';
import { IMatch } from '@/app/shared/types/match';

export const mockMatchData: IMatch[] = [
  {
    id: '1',
    homeTeam: {
      name: 'AC Milan',
      logo: <Milan />,
    },
    awayTeam: {
      name: 'Juventus',
      logo: <Juventus />,
    },
    homeScore: 1,
    awayScore: 2,
    matchTime: '10 June 2024',
    isLive: true,
  },
  {
    id: '2',
    homeTeam: {
      name: 'Juventus',
      logo: <Juventus />,
    },
    awayTeam: {
      name: 'Manchester',
      logo: <MU />,
    },
    homeScore: 3,
    awayScore: 2,
    matchTime: '7 June 2024',
  },
  // {
  //   id: '3',
  //   homeTeam: {
  //     name: 'Inter',
  //     logo: <InterLogo />,
  //   },
  //   awayTeam: {
  //     name: 'Juventus',
  //     logo: <Juventus />,
  //   },
  //   homeScore: 0,
  //   awayScore: 2,
  //   matchTime: "2 Half 67'",
  //   isLive: true,
  // },
];
