<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
    <defs>
      <filter id="filter-glitch-1">
        <feTurbulence type="fractalNoise" baseFrequency="0 0.9" numOctaves="10" result="warp"></feTurbulence>
        <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="10" in="SourceGraphic" in2="warpOffset">
        </feDisplacementMap>
      </filter>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
    <defs>
      <filter id="filter-music">
        <feTurbulence type="fractalNoise" baseFrequency="0.2600002000000037 0.008000800000000185" numOctaves="1"
          result="warp"></feTurbulence>
        <feOffset dx="0" dy="-90" result="warpOffset"></feOffset>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset">
        </feDisplacementMap>
      </filter>
    </defs>
  </svg>
</template>

<style>
svg:not(:root) {
  overflow: hidden;
}

.svg-filters {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  inset: 0;
}
</style>