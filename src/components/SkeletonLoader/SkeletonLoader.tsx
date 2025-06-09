function SkeletonLoader() {
  const skeletonLoaderStyle = `
    bg-[linear-gradient(100deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_60%)]
    bg-[#ededed] bg-[length:200%_100%] bg-[180%_0] animate-skeleton-loading
  `;

  return (
    <div
      className={`w-full max-w-[420px] h-[calc(33.33vw-96px)] max-h-[380px]
        bg-white overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.12)]
        flex flex-col justify-between screen-lg:min-h-full max-1032:pb-[32px]
        screen-sm:pb-[25px] screen-sm:max-w-full screen-sm:min-h-[400px]`}
    >
      <div className={`h-[60%] rounded-[4px] ${skeletonLoaderStyle}`} />
      <div className="pt-[20px] px-[8px] pb-[15px]">
        <div className={`mb-[15px] min-h-[16px] rounded-[4px] ${skeletonLoaderStyle}`} />
        <div
          className={`min-h-[25px] rounded-[4px] ${skeletonLoaderStyle}`}
        />
      </div>
    </div>
  );
}

export default SkeletonLoader;
