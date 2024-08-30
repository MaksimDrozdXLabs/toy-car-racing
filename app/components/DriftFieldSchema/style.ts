import styled from 'styled-components';

interface DriftFieldWrapperProps {
  width: number;
  height: number;
}

export const DriftFieldWrapper = styled.div<DriftFieldWrapperProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100%;
  height: 100%;
  flex: 1 1 auto;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export interface CarDotProps {
  x: number;
  y: number;
  color: string;
  border: string;
}

export const CarDot = styled.div.attrs<CarDotProps>((props) => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
    backgroundColor: props.color,
    borderColor: props.border,
  },
}))<CarDotProps>`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
