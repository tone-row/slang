import React from 'react';
import { BaseComponent } from '../../utils/types';
interface ShapeProps extends BaseComponent {
    ratio?: number;
}
declare const Shape: React.FC<ShapeProps>;
export default Shape;
