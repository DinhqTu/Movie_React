import Skeleton from 'react-loading-skeleton';

function MovieCardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index}>
        <div className="py-3">
          <a>
            <img />
            <Skeleton height={384} />
          </a>
          <a>
            <p className="mt-[6px] overflow-hidden text-ellipsis whitespace-nowrap ">
              <Skeleton />
            </p>
          </a>
          <a>
            <p className="text-[#7A7A7A]  overflow-hidden text-ellipsis whitespace-nowrap ">
              <Skeleton />
            </p>
          </a>
        </div>
      </div>
    ));
}

export default MovieCardSkeleton;
