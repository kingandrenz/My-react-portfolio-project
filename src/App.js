import Accordion from './components/accordion/index';
import RandomColor from './components/random_color/index';
import StarRating from  './components/star-rating/index';
import ImageSlider from  './components/image-slider/index';
import LoadMoreImage from  './components/load-more-data/index';
import TreeView from './components/tree-view/index';
import menus from './components/tree-view/data';
import QrCodeGenerator from './components/qr-code-generator/index';

import LightDarkMode from  './components/light-dark-mode/index';

import ScrollIndicator from  './components/scroll-indicator/index';
import TabsTest from  './components/custom-tabs/tabs-test';
import ModalTest from  './components/custom-modal-popup/modal-test';
import GithubProfileFinder from  './components/github-profile-finder/index';
import AutoComplete from  './components/search-auto-complete-with-api/index';
import TicTocToe from './components/tic-tac-toe/index';
import FeatureFlags from './components/feature-flags/index';
import FeatureFlagGlobalState from './components/feature-flags/context/index_c.jsx'
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
// import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/> */}
      {/* <LoadMoreImage /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      <LightDarkMode />

      {/* ✅ Enable Feature Flags */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>*/}

      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}
      {/* <TabsTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <AutoComplete /> */}
      {/* <TicTocToe /> */}
      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
    </div>
  );
}

