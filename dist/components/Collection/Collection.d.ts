import React from 'react';
import { CollectionProps, BaseComponent } from '../../utils/types';
interface LocalCollectionProps extends BaseComponent, CollectionProps {
    collectionWrapper?: React.ComponentType;
}
declare const Collection: React.FC<LocalCollectionProps>;
export default Collection;
