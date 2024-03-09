import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Icon } from '@iconify/react';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [relatedShows, setRelatedShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
        setIsLoading(false);
        const relatedShowsResponse = await fetch('https://api.tvmaze.com/shows');
        const relatedShowsData = await relatedShowsResponse.json();
        const uniqueRelatedShows = Array.from(new Set(relatedShowsData)).slice(20, 40);
        setRelatedShows(uniqueRelatedShows);
      } catch (error) {
        console.error('Error fetching show details:', error);
        setIsLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!show) {
    return <p>Show not found</p>;
  }

  const summaryWithPAndBTags = show.summary
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '');

  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  };

  return (
    <div className='total-wrapper'>
      <Header />
      <div className="container-sub">
        <div className="show-lol">
          <div className='show-details'>
            <div className="project-show">
              <img
                style={{ width: '100%', height: '300px', borderRadius: '10px 0 0 10px' }}
                src={show.image.original}
                alt={`project`}
              />
              <div className="project-card-2">
                <div className="project-2">
                  <div className="home-card-1">
                    <div className="sub-homecard">
                      <h3>Movie: {show.name}</h3>
                      <h4>Type: {show.type}</h4>
                      <h4 className="show-paragraph"><strong style={{ color: '#000000c7', fontSize: '18px' }}>About Movie: </strong> {summaryWithPAndBTags}</h4>
                    </div>
                  </div>
                  <div className="rating-font">
                    <h3> {show.genres.join(', ')}</h3>
                    <h5>
                      <Icon style={{ color: '#fe0707' }} icon="line-md:star-alt" width="24" height="24" />
                      {show.rating.average}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-shows">
          <Slider {...settings} className='carosel'>
            {relatedShows.map((relatedShow) => (
              <div key={relatedShow.id} className='card-body-1'>
                <div className='col-lg-3 col-md-4 col-sm-6 pb-3 home-card'>
                  <div className="project-1">
                    <img
                      style={{ width: '100%', height: '300px', objectFit: 'fill' }}
                      src={relatedShow.image.original}
                      alt={`project`}
                    />
                    <div className="project-card-2">
                      <div className="project-2">
                        <div className="home-card-1">
                          <div className="sub-homecard">
                            <h3>Movie: {relatedShow.name}</h3>
                            <h4>Type: {relatedShow.type}</h4>
                            <h4>Language: {relatedShow.language}</h4>
                          </div>
                          <div className="sub-homecard">
                            <h3>Time: {relatedShow.schedule.time}</h3>
                            <h4>Day: {relatedShow.schedule.days.join(', ')}</h4>
                          </div>
                        </div>
                        <div className="rating">
                          <h3>Genres: {relatedShow.genres.join(', ')}</h3>
                          <h5>
                            <Icon style={{ color: '#fe0707' }} icon="line-md:star-alt" width="24" height="24" />
                            {relatedShow.rating.average}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowDetails;
 