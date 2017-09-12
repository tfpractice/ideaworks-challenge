[final]: public/images/final.png

![final][final]
Below, you will find a link to the files necessary to complete this test. Included are a PSD design file, fonts needed for @font-face implementation, and a logo file in .ai and .eps formats. Please develop this page using React, Javascript, and SASS/SCSS or LESS, refraining from use of jQuery if possible. Your sample will be expected to function properly on IE 11, Edge, and the last 3 versions of Chrome, Firefox, and Safari, as well as on iOS Safari and Chrome (iPhone and iPad). No links are expected to be functional, but please include hover states(__specically how? rolllover/finger cursor or color?__). Please ensure that these pages are fully responsive from desktop down to 320px-width mobile. Responsive design treatment will be left up to your discretion save where noted below.
 
* The header should be fixed at the top of the screen as the user scrolls.
* On mobile, the height of the header should be 50px 
  * (__what about other sizes?__). 
* resize and align items as necessary, keeping the logo to the left, and other items to the right.
  * (__how much padding specifically would you want in the header? the psd has the logo and masonary grid aligned, but with nested breakpoints or columns combined with React, aligning disparate components seems programmatically unnecessary/cumbersome for screens which change sizes)
 
* The wide image with overlaid text is a carousel. No previous/next arrows are necessary, but please include the navigation dots below
  * (__what size should they be__).
* Please have each slide advance automatically every 5 seconds and loop back to the beginning when the last slide is reached. 
* Users on touch*enabled devices should be able to swipe between slides. 
* The maximum width of the carousel should be 1440px, centering on screens wider than that
  * (__the photoshop document presents it as taking up the entire header, should there be padding for centering?__). 
* As the screen narrows, keep the height the same (__as what specifically?__), clipping the sides of the image 
  * (__is it incorrect to have the entire image viewable if it works?__) while keeping the text visible and appropriately padded. 
* Once the screen is narrow enough for the carousel to reach a 4:3
  * (__should the image clip or resize? see previous note__) ratio, have both the width and height scale with the browser width, maintaining the 4:3 aspect ratio. Text may be resized as necessary.
 
* Items on the masonry grid should be arranged by date. 
* Please scale the grid and item padding with the browser width 
  * (__veritcal padding between elements or betwen columsn, and how wide?__).
* The large titles can scale as you deem appropriate, but please keep the smaller text at its current size 
    * (__the photoshop doc only has one width__).
* Please adjust the grid to 2 columns for iPad Portrait and mobile views  (the actual breakpoint is up to your discretion) 
  * (__to clarify, 2 columns for mobile? or should there be a single column__).
- At this point, please have the padding between the items be the same as the padding between the grid and the edge of the screen 
  * (__padding between the columns or padding between the individual events?__).
  * __Depending on how the images consume the space the apparent padding will be different for thinner and taller images than squat ones, this affects both the apparent vertical and horizontal spacing__
 
When complete, please send us your source code and a live link to view your work.
- __am I expected to pay for a service to transpile and load my code?__
 
Source: http://dev.ideaworkdev.com/code-test/sample.zip
 
Thanks, and good luck!
