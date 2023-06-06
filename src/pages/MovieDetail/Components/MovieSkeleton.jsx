import Skeleton from 'react-loading-skeleton';

function MovieSkeleton() {
  return (
    <div className="">
      <div className="-z-10 bg-cover bg-center h-[600px] relative after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#020d18bf]">
        <Skeleton height={200} />
      </div>
      <section className="mt-[-360px] max-w-[1344px] m-auto ">
        <div className="flex">
          <div className="w-1/4 pr-8 py-3 flex-none">
            <a>
              <Skeleton height={432} />
            </a>
            <a className="bg-[#dd003f] flex items-center justify-center text-white mt-6  px-5 py-[9px] rounded text-xl">
              <Skeleton />
            </a>
          </div>
          <div className="px-8 py-3 pt-[1.8em] shrink grow">
            <h2 className="text-[40px] mb-7 font-Merriweather">
              <Skeleton width="50%" />
            </h2>
            <h3 className="text-2xl mt-[-20px] mb-9">
              <Skeleton width="40%" />
            </h3>
            <p className="mb-4 font-semibold">
              <Skeleton width="15%" />
            </p>
            <p className="mb-4 font-semibold">
              <Skeleton width="10%" />
            </p>
            <span className="flex items-center gap-2 font-semibold mb-4 ">
              <Skeleton width="10%" />
            </span>
            <div className="flex items-center justify-between mb-14">
              <div className="flex gap-3 ">
                <a className="  gap-3 rounded  ">
                  <Skeleton width={100} height={40} />
                </a>
                <a className=" gap-3 rounded  ">
                  <Skeleton width={100} height={40} />
                </a>
              </div>
              <div className="flex">
                <a className="text-xs mb-2 mr-2  rounded-full ">
                  <Skeleton width={50} height={20} />
                </a>
                <a className="text-xs mb-2 mr-2  rounded-full ">
                  <Skeleton width={50} height={20} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[12%_30%] gap-y-1 gap-x-4 font-semibold mb-6">
              <p>
                <Skeleton width="80%" />
              </p>
              <p>
                <span>
                  <Skeleton />
                </span>
              </p>
              <p>
                <Skeleton width="80%" />
              </p>
              <span>
                <Skeleton />
              </span>
              <p>
                <Skeleton width="80%" />
              </p>
              <p>
                <Skeleton />
              </p>
              <Skeleton width="80%" />
              <p>
                <span>
                  <Skeleton />
                </span>
              </p>
            </div>
            <p>
              <Skeleton count={3} />
            </p>
            <h2 className="mt-8 mb-[1.2rem]">
              <Skeleton />
            </h2>
            <div className="w-[994px]">
              {/* <Carousel setting>
                {credits?.cast?.map((cast) => (
                  <div key={cast.cast_id}>
                    <Actor
                      key={cast.cast_id}
                      character={cast.character}
                      name={cast.original_name}
                      avatar={cast.profile_path}
                    />
                  </div>
                ))}
              </Carousel> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieSkeleton;
