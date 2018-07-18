import App from './App';
import './lib/pannellum/css/pannellum.css';
import './lib/pannellum/js/libpannellum.js';
import './lib/pannellum/js/pannellum.js';
import { compose, lifecycle } from 'recompose';

var appLifeCycle = lifecycle({
  componentDidMount: function componentDidMount() {
    var _props = this.props,
        _props$autoLoad = _props.autoLoad,
        autoLoad = _props$autoLoad === undefined ? false : _props$autoLoad,
        _props$imagePath = _props.imagePath,
        imagePath = _props$imagePath === undefined ? 'https://pannellum.org/images/alma.jpg' : _props$imagePath,
        _props$preview = _props.preview,
        preview = _props$preview === undefined ? '' : _props$preview,
        _props$showControls = _props.showControls,
        showControls = _props$showControls === undefined ? true : _props$showControls,
        _props$showZoomCtrl = _props.showZoomCtrl,
        showZoomCtrl = _props$showZoomCtrl === undefined ? true : _props$showZoomCtrl,
        _props$showFullscreen = _props.showFullscreenCtrl,
        showFullscreenCtrl = _props$showFullscreen === undefined ? true : _props$showFullscreen,
        _props$hotSpotDebug = _props.hotSpotDebug,
        hotSpotDebug =  _props$hotSpotDebug === undefined ? false : _props$hotSpotDebug,
        _props$hotSpots = _props.hotSpots,
        hotSpots = _props.hotSpots === undefined ? [] : _props$hotSpots;


    window.pannellum.viewer('pano-image', {
      'type': 'equirectangular',
      'panorama': imagePath,
      'autoLoad': autoLoad,
      'preview': preview,
      'showControls': showControls,
      'showZoomCtrl': showZoomCtrl,
      'showFullscreenCtrl': showFullscreenCtrl,
      'hotSpotDebug': hotSpotDebug,
      'hotSpots': hotSpots
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _props = nextProps,
        _props$autoLoad = _props.autoLoad,
        autoLoad = _props$autoLoad === undefined ? false : _props$autoLoad,
        _props$imagePath = _props.imagePath,
        imagePath = _props$imagePath === undefined ? 'https://pannellum.org/images/alma.jpg' : _props$imagePath,
        _props$preview = _props.preview,
        preview = _props$preview === undefined ? '' : _props$preview,
        _props$showControls = _props.showControls,
        showControls = _props$showControls === undefined ? true : _props$showControls,
        _props$showZoomCtrl = _props.showZoomCtrl,
        showZoomCtrl = _props$showZoomCtrl === undefined ? true : _props$showZoomCtrl,
        _props$showFullscreen = _props.showFullscreenCtrl,
        showFullscreenCtrl = _props$showFullscreen === undefined ? true : _props$showFullscreen,
        _props$hotSpotDebug = _props.hotSpotDebug,
        hotSpotDebug =  _props$hotSpotDebug === undefined ? false : _props$hotSpotDebug,
        _props$hotSpots = _props.hotSpots,
        hotSpots = _props.hotSpots === undefined ? [] : _props$hotSpots;

        window.pannellum.viewer('pano-image', {
          'type': 'equirectangular',
          'panorama': imagePath,
          'autoLoad': autoLoad,
          'preview': preview,
          'showControls': showControls,
          'showZoomCtrl': showZoomCtrl,
          'showFullscreenCtrl': showFullscreenCtrl,
          'hotSpotDebug': hotSpotDebug,
          'hotSpots': hotSpots
        });
  }
});

var AppContainer = compose(appLifeCycle)(App);

export default AppContainer;