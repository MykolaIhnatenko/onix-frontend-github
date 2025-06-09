import { IBrand } from '../interfaces/IBrandsBlock';

function Brand({ Item, index, classes }: IBrand) {
  return (
    <div
      key={['icon_', index].join()}
      className={`flex justify-center items-center flex-[0_1_calc((100%_-_20px)_/_2)] 
        min-md:flex-[0_1_calc((100%_-_28px_*_3)_/_4)] min-lg:flex-[0_1_calc((100%_-_40px_*_4)_/_5)]
        ${classes || ''}`}
    >
      {Item}
    </div>
  );
}

export default Brand;
