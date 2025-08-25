import ImageComponent from '../../Image/Image';
import { IBlogButtonSectionImage } from '../interfaces/IBlogButtonSection';

function BlogButtonSectionImage({ img, alt }: IBlogButtonSectionImage) {
  return (
    <div
      className="relative w-[330px] h-[340px]
    min-md:absolute min-md:top-0 min-md:left-[-268px] min-md:h-full min-md:w-[478px]
    min-xl:left-0"
    >
      {img && (
        <ImageComponent
          src={img}
          fill
          className="object-cover"
          alt={alt}
          sizes="100vw"
        />
      )}
    </div>
  );
}

export default BlogButtonSectionImage;
