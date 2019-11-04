import React from 'react';
import { CollectionProps } from '../../utils/types';
interface LocalCollectionProps extends CollectionProps {
    collectionWrapper: any;
}
declare const Collection: React.FC<LocalCollectionProps>;
export default Collection;
