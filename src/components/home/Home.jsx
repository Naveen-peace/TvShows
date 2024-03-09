// YourComponent.jsx
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import BasicSkeleton from '../subPages/BasicSkeleton';
import { Icon } from '@iconify/react';
import { fetchAllShows } from '../../reducer/ShowSlide';


function Home() {
  const categoriesArray = useSelector((state) => state.shows.categories);
  const allCategories = Array.isArray(categoriesArray) && categoriesArray.length > 0 ? ['All', ...categoriesArray] : [];
  const shows = useSelector((state) => state.shows.shows);
  const isLoading = useSelector((state) => state.shows.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  const [filteredCategory, setFilteredCategory] = useState('All');

  const filteredShows = filteredCategory === 'All'
    ? shows
    : shows.filter((show) => show.genres.includes(filteredCategory));

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };

  if (isLoading) {
    return <BasicSkeleton />;
  }

  return (
    <div className='total-wrapper'>
      <Header />

      <div className="container-sub">
        <div className='hero'>
          <h1>Shows</h1>
          <div className="filter">
            <div className="categories-scroll">
              {allCategories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`category-item ${filteredCategory === category ? 'active' : ''}`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='home-card-head'>
          {filteredShows.map((show, index) => (
            <div className='col-lg-3 col-md-4 col-sm-6 pb-3 home-card' key={index}>
              <Link to={`/ShowDetails/${show.id}`} className="show-link">
                <div className="project-1">
                  <img
                    style={{ width: '100%', height: '300px', objectFit: 'fill' }}
                    src={show.image.original}
                    alt={`project`}
                  />
                  <div className="project-card-2">
                    <div className="project-2">
                      <div className="home-card-1">
                        <div className="sub-homecard">
                          <h3>Movie: {show.name}</h3>
                          <h4>Type: {show.type}</h4>
                          <h4>Language: {show.language}</h4>
                        </div>
                        <div className="sub-homecard">
                          <h3>Time: {show.schedule.time}</h3>
                          <h4>Day: {show.schedule.days.join(', ')}</h4>
                        </div>
                      </div>
                      <div className="rating">
                        <h3>Genres: {show.genres.join(', ')}</h3>
                        <h5>
                          <Icon style={{ color: '#fe0707' }} icon="line-md:star-alt" width="24" height="24" />
                          {show.rating.average}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
