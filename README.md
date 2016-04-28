# mhn-webcams

This script fixes the annoying flickering effect on the webcam pages of the "Musée d'histoire naturelle Fribourg".
Currently, this script only works on Firefox. 

## Installation guide

### Install Firefox

Please, visit the [Firefox web site](https://www.mozilla.org/firefox/) for detailed instructions.

### Install GreaseMonkey

This script works with the greasemonkey extension. Open this [link](https://addons.mozilla.org/firefox/addon/greasemonkey/) in Firefox and click on "+ Add to Firefox"

### Install the MHN Webcams script

Finish the installation by clicking on the [latest release](https://github.com/BlueMasters/mhn-webcams/releases/download/1.0/mhn-webcams.user.js) of the MHN Webcams script.

## Notes

The web page of the "Musée d'histoire naturelle Fribourg" can be viewed using HTTPS. However, the page opens an "i-frame" in HTTP and this leads to "mix content" problems. So if you use the [HTTPS Everywhere](https://www.eff.org/https-everywhere) extension, you will have to temporarily disable the "mix content protection".