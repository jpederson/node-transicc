## node-transicc

A simple nodejs module that wraps the LittleCMS transicc command line utility, to allow you to make true ICC Profile-based color conversions inside your node apps.

### Installation

First, install [LittleCMS](https://github.com/mm2/Little-CMS) using the commands below on Unix/Linux/OSX (binaries available for other OSs). It's a small, open source Python-based color management system - transicc uses a LittleCMS command line utility by the same name to perform the actual profile comparisons.

```shell
git clone https://github.com/mm2/Little-CMS.git
cd Little-CMS
./configure 
make 
make check 
sudo make install
```

Next, you're ready to install the node module...

```shell
npm install transicc --save
```

... and start converting colors!

```js
var transicc = require( "transicc" );

transicc( "cmyk", "rgb", [ 100, 0, 0, 0 ], function( rgb ){
	console.log( rgb ); // same as Photoshop, yo!
});
```

*****

### Bundled ICC Profiles

Several ICC profiles are bundled with transicc for your convenience. Here's a complete list of the values you can enter into the input or output options of transicc.

#### CMYK

- `cmyk` (shortcut to `cmyk-adobe-us-web-coated-swop`)
- `cmyk-adobe-coated-fogra27`
- `cmyk-adobe-coated-fogra39`
- `cmyk-adobe-coated-gracol2006`
- `cmyk-adobe-japan-200-newspaper`
- `cmyk-adobe-japan-2001-coated`
- `cmyk-adobe-japan-2001-uncoated`
- `cmyk-adobe-japan-2003-web-coated`
- `cmyk-adobe-japan-web-coated`
- `cmyk-adobe-uncoated-fogra29`
- `cmyk-adobe-us-web-coated-swop`
- `cmyk-adobe-us-web-uncoated`
- `cmyk-adobe-web-coated-fogra28`
- `cmyk-adobe-web-coated-swop-2006-g3`
- `cmyk-adobe-web-coated-swop-2006-g5`
- `cmyk-eci-iso-coated-v2-300`
- `cmyk-eci-iso-coated-v2-eci`
- `cmyk-eci-iso-uncoated-yellowish`
- `cmyk-eci-pso-coated-300-npscreen-iso12647`
- `cmyk-eci-pso-coated-npscreen-iso12647`
- `cmyk-eci-pso-lwc-improved`
- `cmyk-eci-pso-lwc-standard`
- `cmyk-eci-pso-mfc-paper`
- `cmyk-eci-pso-snp-paper`
- `cmyk-eci-pso-uncoated-iso12647`
- `cmyk-eci-pso-uncoated-npscreen-iso12647`
- `cmyk-eci-sc-paper`

#### Lab

- `lab` (shortcut to `lab-apple`)

#### RGB

- `rgb` (shortcut to `rgb-adobe-1998`)
- `rgb-adobe-1998`
- `rgb-apple`
- `rgb-colormatch`
- `rgb-pal-secam`
- `rgb-smpte-c`
- `rgb-video-hd`
- `rgb-video-ntsc`
- `rgb-video-pal`

#### sRGB

- `srgb` (shortcut to `srgb-apple`)
- `srgb-apple`

#### XYZ

- `xyz` (shortcut to `xyz-d65` - the 'standard' luminant associated with daylight)
- xyz-d50`
- xyz-d55`
- xyz-d65`

**Note:** These profiles are the property of their respective owners, and were copied as-is (simply renamed for easier organization). By using this module, you accept the terms of service agreements associated with their use as provided by Adobe, Apple, ECI, and the ICC.

If there's another ICC profile you'd like bundled with this package, please ensure that the creator of that profile is OK with it being bundled in other software. Once you know that, pull requests away!

