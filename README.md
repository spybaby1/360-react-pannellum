Panorama viewer for react.

Pannellum is a lightweight, free, and open source panorama viewer for the web.



## How to Install

```sh
npm install 360-react-pannellum --save
```

Alternatively you may use `yarn`:

```sh
yarn add 360-react-pannellum
```


## How to Use

```js
import React, { Component } from 'react'
import { Pannellum } from '360-react-pannellum'

class Example extends Component {
  render () {
    <Pannellum
      width='100%'
      height='200px'
      imagePath='https://pannellum.org/images/alma.jpg'
      isDisplayCloseButton={true}
      closeHandler={closeAction}
      closeButtonTitle='Close'
      showZoomCtrl={false}
      showFullscreenCtrl={false}
      autoLoad />
  }
}

const closeAction = () => {

}
```
