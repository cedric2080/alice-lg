
/**
 * Alice (formerly known as Birdseye) UI
 * -------------------------------------
 *
 * @author Annika Hannig <annika@hannig.cc>
 */

import { BrowserRouter
       , Routes
       , Route
       } 
  from 'react-router-dom';

import StartPage 
  from 'app/pages/start/Page';

import ErrorsProvider
  from 'app/components/errors/Provider';
import ConfigProvider
  from 'app/components/config/Provider';
import ContentProvider
  from 'app/components/content/Provider';
import RouteserversProvider
  from 'app/components/routeservers/Provider';


const Alice = () => {
  return (
    <ErrorsProvider>
    <ConfigProvider>
    <RouteserversProvider>
    <ContentProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
    </ContentProvider>
    </RouteserversProvider>
    </ConfigProvider>
    </ErrorsProvider>
  );
}

export default Alice;

