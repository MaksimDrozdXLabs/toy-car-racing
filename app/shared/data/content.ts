import { appRoutes } from '@/app/shared/constants/routes';
import { MetaTags } from '@/app/shared/types/metaTags';

interface SectionContent {
  products: string;
  smi: string;
  partners: string;
  articles: string;
  sets: string;
  influencerListTitle: string;
}

interface PageContent {
  title: string;
  subtitle: string;
  sections?: Partial<SectionContent>;
  meta?: Partial<MetaTags>;
}

type PageKey = keyof typeof appRoutes;

interface Content {
  pages: Partial<Record<PageKey, Partial<PageContent>>>;
}

export const content: Content = {
  pages: {
    live: {
      title: 'Live',
      subtitle: 'Live',
      meta: {
        title: 'Live',
        short_description: 'Live',
      },
    },
    races: {
      title: 'Races',
      subtitle: 'Races',
      meta: {
        title: 'Races',
        short_description: 'Races',
      },
    },
  },
};
