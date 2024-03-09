
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const BasicSkeleton = () => {
  return (
    <div className="container-sub">
      <Stack spacing={1} className='home-card-head'>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-3 " >
            <div className="home-card" aria-hidden="true">
              <Skeleton variant="rectangular" width="100%" height={180} />

              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <Skeleton width="50%" />
                </h5>
                <p className="card-text placeholder-glow">
                  <Skeleton width="70%" />
                  <Skeleton width="40%" />
                  <Skeleton width="40%" />
                  <Skeleton width="60%" />
                  <Skeleton width="80%" />
                </p>
                <a href="#" tabIndex="-1" className="btn btn-dark disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default BasicSkeleton;
