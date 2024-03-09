import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Categories() {
    const categories = useSelector((state) => state.shows.categories);
    const allCategories = ['All', ...categories];
    const [filteredCategory, setFilteredCategory] = useState('All');
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows');
                const data = await response.json();
                console.log(data)
                setShows(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching shows:', error);
                setIsLoading(false);
            }
        };

        fetchShows();
    }, []);
    console.log(shows)

    const filteredShows = filteredCategory === 'All'
        ? shows
        : shows.filter((show) => show.genres.includes(filteredCategory));

    const handleCategory = (event) => {
        setFilteredCategory(event.target.value);
    };

    return (
        <>
            <div className="hero">
                <h1>Shows</h1>
                <div className="filter">
                    <span>Categories</span>
                    <select onChange={handleCategory} value={filteredCategory}>
                        {allCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="shows-container">
                <div className="shows-grid">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredShows.map((show) => (
                            <Link to={`/ShowDetails/${show.id}`} key={show.id} className="show-link">
                                <div className='home-card-head'>
                                    <div className='col-lg-3 col-md-4 col-sm-6 pb-3 home-card' >
                                        <div className="project-1">
                                            <img
                                                style={{ width: '100%', height: '300px', objectFit: 'fill', }}
                                                src={show.image.original}
                                                alt={`project`}
                                            />
                                            <div className="project-card-2">
                                                <div className="project-2">
                                                    <div className="home-card-1">
                                                        <div className="sub-homecard">
                                                            {/* <h2>Movie</h2> */}
                                                            <h3>Movie: {show.name}</h3>
                                                            <h4>Type: {show.type}</h4>
                                                            <h4>Language: {show.language}</h4>
                                                        </div>

                                                        <div className="sub-homecard">
                                                            {/* <h2>Time</h2> */}
                                                            <h3>Time:{show.schedule.time}</h3>
                                                            <h4>Day: {show.schedule.days.join(', ')}</h4>
                                                        </div>

                                                    </div>
                                                    <div className="rating">
                                                        <h3>Genres: {show.genres.join(', ')}</h3>
                                                        <h5><Icon style={{ color: '#fe0707' }} icon="line-md:star-alt" width="24" height="24" />{show.rating.average}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Categories;
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Footer from '../footer/Footer';
// import Header from '../header/Header';
// import BasicSkeleton from '../subPages/BasicSkeleton';
// import { Icon } from '@iconify/react';

// function Home() {
//   const categories = useSelector((state) => state.shows.categories);
//   // const allCategories = ['All', ...categories];
//   const [filteredCategory, setFilteredCategory] = useState('All');
//   const [shows, setShows] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchShows = async () => {
//       try {
//         const response = await fetch('https://api.tvmaze.com/shows');
//         const data = await response.json();
//         setShows(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching shows:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchShows();
//   }, []);

//   const allCategories = ['All', ...categories];

//   const filteredShows = filteredCategory === 'All'
//     ? shows
//     : shows.filter((show) => show.genres.includes(filteredCategory));

//   const handleCategory = (event) => {
//     setFilteredCategory(event.target.value);
//   };

//   if (isLoading) {
//     return <BasicSkeleton />;
//   }

//   return (
//     <div className='total-wrapper'>
//       <Header />
//       <div className="container-sub">
//         <div className='hero'>
//           <h1>Shows</h1>
//           <div className="filter">
//             <span>Categories</span>
//             <select onChange={handleCategory} value={filteredCategory}>
//               {allCategories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className='home-card-head'>
//           {filteredShows.map((show, index) => (
//             <div className='col-lg-3 col-md-4 col-sm-6 pb-3 home-card' key={index}>
//               <Link to={`/ShowDetails/${show.id}`} className="show-link">
//                 <div className="project-1">
//                   <img
//                     style={{ width: '100%', height: '300px', objectFit: 'fill' }}
//                     src={show.image.original}
//                     alt={`project`}
//                   />
//                   <div className="project-card-2">
//                     <div className="project-2">
//                       <div className="home-card-1">
//                         <div className="sub-homecard">
//                           <h3>Movie: {show.name}</h3>
//                           <h4>Type: {show.type}</h4>
//                           <h4>Language: {show.language}</h4>
//                         </div>
//                         <div className="sub-homecard">
//                           <h3>Time: {show.schedule.time}</h3>
//                           <h4>Day: {show.schedule.days.join(', ')}</h4>
//                         </div>
//                       </div>
//                       <div className="rating">
//                         <h3>Genres: {show.genres.join(', ')}</h3>
//                         <h5>
//                           <Icon style={{ color: '#fe0707' }} icon="line-md:star-alt" width="24" height="24" />
//                           {show.rating.average}
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;
