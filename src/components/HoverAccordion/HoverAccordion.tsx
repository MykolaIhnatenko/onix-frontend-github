import { useState } from 'react';

import { IHoverAccordion } from './interfaces/IHoverAccordion';
import HoverAccordionItem from './components/HoverAccordionItem';

function HoverAccordion({
  data, priority = false, whiteVariant = false,
}: IHoverAccordion) {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="flex">
      {data.map(({
        id, image, number, title,
      }) => (
        <HoverAccordionItem
          key={[id, number].join('_')}
          activeItem={activeItem}
          setActiveItem={(n) => (setActiveItem(n))}
          id={id}
          image={image}
          number={number}
          title={title}
          priority={priority}
          whiteVariant={whiteVariant}
        />
      ))}
    </div>
  );
}

export default HoverAccordion;
