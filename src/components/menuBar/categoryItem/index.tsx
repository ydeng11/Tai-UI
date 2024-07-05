import React from 'react';

export type categoryItemProps = {
    id: number;
    category: string;
}

const CategoryItem: React.FC<categoryItemProps> = (props: categoryItemProps) => {
    return (
        <div>
            <h2>{props.category}</h2>
        </div>
    );
}

export default CategoryItem;
