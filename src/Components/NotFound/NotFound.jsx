import {Routes,Route} from 'react-router-dom'
//See the Location ./components? Correctly
export const NotFound = () => {
  return (
    <div className="notFound">
    <h1 className="p-2 text-4xl font-bold text-center text-blue-700 animate-pluse">Sorry Page Not Found</h1>
      <img alt="notfound" src="https://cdn.mos.cms.futurecdn.net/v2GsYvZSGVWm32YVRBynib-970-80.jpg.webp" className="p-2" />
      {/* Show some 404 not found image or component here */}
    </div>
  );
};