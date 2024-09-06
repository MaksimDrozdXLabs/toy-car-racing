import { memo } from 'react';
import Image from 'next/image';

import { ImageWrapper } from '@/app/components/DriftFieldSchema/style';

const BackgroundImage = () => (
  <ImageWrapper>
    <Image
      src="/map.png"
      alt="Toy Car Field"
      style={{
        transform: "rotate(-12.5deg) translateX(-25px) translateY(-25px)"
      }}
      fill
      priority
    />
  </ImageWrapper>
);
export default memo(BackgroundImage);
