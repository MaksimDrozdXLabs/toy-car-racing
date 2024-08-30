import { memo } from 'react';
import Image from 'next/image';

import { ImageWrapper } from '@/app/components/DriftFieldSchema/style';

const BackgroundImage = () => (
  <ImageWrapper>
    <Image
      src="/map.png"
      alt="Toy Car Field"
      fill
      priority
    />
  </ImageWrapper>
);
export default memo(BackgroundImage);
