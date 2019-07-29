# BigScreener

<a href="https://github.com/yunseok/BigScreener" target="_blank">
  <img src="https://img.shields.io/github/package-json/v/yunseok/BigScreener.svg">
</a>
<a href="https://github.com/yunseok/BigScreener" target="_blank">
  <img src="https://img.shields.io/github/license/yunseok/BigScreener.svg">
</a>
    
<hr>
        
A free and high quality streaming service using WebTorrent, watch anything, anywhere, whenever you want.

<i>Projet libre fait par Alan S et Tanguy H.</i>

<br>

<img src="https://i.imgur.com/EmKhsy0.jpg" alt="BigScreener Beta">  
<hr>
<img src="https://i.imgur.com/glPEjbu.jpg" alt="BigScreener Beta">

## Installation

You can download the latest version [here](https://github.com/yunseok/BigScreener/releases)

## OS Requirements

### Windows

- Windows 7 and later are supported, older operating systems are not supported (and do not work).
- Both x86 and amd64 (x64) binaries are provided for Windows. Please note, the ARM version of Windows is not supported for now.

### Mac

- Only 64bit binaries are provided for macOS, and the minimum macOS version supported is macOS 10.10 (Yosemite).

### Linux

- The prebuilt ia32(i686) and x64(amd64) binaries are built on Ubuntu 12.04, the arm binary is built against ARM v7 with hard-float ABI and NEON for Debian Wheezy.

Whether the prebuilt binary can run on a distribution depends on whether the distribution includes the libraries that Electron is linked to on the building platform, so only Ubuntu 12.04 is guaranteed to work, but following platforms are also verified to be able to run the prebuilt binaries of Electron:

- Ubuntu 12.04 and later
- Fedora 21
- Debian 8

## Hardware Requirements

## Windows

- An Intel Pentium 4 processor or later that's SSE2 capable
- 512 MB of RAM
- 1Go of storage 

## Mac

- An Intel processor that's 64-bit
- 512 MB of RAM
- 1Go of storage

## Linux

- An Intel Pentium 4 processor or later that's SSE2 capable
- 1Go of storage

## For Developers

```bash
git clone git@github.com:yunseok/BigScreener.git
cd BigScreener
npm install
npm start # will build the project to dist/ and launch electron
```

## Contributing

Anything is appreciated! You can make a pull request for whatever you want really. 

## License

[UNLICENSED](https://unlicense.org/)
