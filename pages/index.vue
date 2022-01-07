<template>
  <div class="h-screen w-screen px-16">
    <!-- TODO: Must figure out a way to implement a proper responsive layout. The rows and columns are not cooperating with the breakpoints I need the lg and xl screens to be rows and the md, sm, xs devices to be columns -->
    <!-- About Intro -->
    <section class="flex flex-col items-center justify-center px-12">
      <!-- Panel 1 -->
      <div
        class="flex flex-col max-w-xl self-start xl:self-center xl:max-w-3xl"
      >
        <!-- Heading -->
        <div>
          <h3
            class="from-neutral-500 font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm"
          >
            hello, my name is
          </h3>
          <h1
            split-by="letter"
            letter-animation="hover"
            class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-3"
          >
            Matthew Ricklefs
            <br />
          </h1>
          <h3
            class="from-neutral-500 text-[#ff9e80] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-3 font-serif"
          >
            I produce content for the web.
            <br />
          </h3>
          <!-- Paragraph -->
          <p class="text-sm font-normal w-full will-change-transform">
            I'm motivated by the results gained through prioritizing customers
            needs, so I strive to build web applications that mirror a specific
            vision. I want to personalize the imagination of another person,
            vicariously through my implementation of content design. I want to
            consider lasting impacts and begin creating foresight ahead of time.
            I want to be a part of something greater while standing beside
            individuals driven by solutions architecture. Simply, looking for a
            good fit.
          </p>
          <!-- Connect Link -->

          <a
            class="text-sm py-6"
            href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
          >
            let's connect
          </a>
        </div>
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <div>
        <h6 class="font-light font-serif tracking-wide">skill</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm p-3">
          I like learning new things. Here are a few topics I am proficient
          with.
        </p>
      </div>

      <!-- Panel 2 -->
      <div
        class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-evenly items-center"
      >
        <!-- Icons -->
        <div class="flex gap-12">
          <div class="figure max-w-md">
            <figcaption class="self-center">
              <span class="text-sm font-light">01</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-xs font-light p-1 text-[#121212]">FRONT END</h4>

              <img
                class="h-15 w-12 object-contain basis-1/4 self-center"
                :src="icons.front"
              />
            </figure>
          </div>

          <div class="figure max-w-md">
            <figcaption class="self-center">
              <span class="text-sm font-light">02</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center self-end"
            >
              <h4 class="text-xs font-light p-1 text-[#121212]">UI DESIGN</h4>
              <img
                class="h-15 w-12 object-contain relative basis-1/4 self-center"
                :src="icons.ui"
              />
            </figure>
          </div>
        </div>

        <div class="flex gap-12">
          <div class="figure max-w-md">
            <figcaption class="self-center">
              <span class="text-sm font-light">03</span>
            </figcaption>

            <figure
              class="still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-xs font-light p-1 text-[#121212]">BACK END</h4>

              <img
                class="h-15 w-12 object-contain basis-1/4 self-center"
                :src="icons.back"
              />
            </figure>
          </div>

          <div class="figure max-w-md">
            <figcaption class="self-center">
              <span class="text-sm font-light">04</span>
            </figcaption>

            <figure
              class="gsap-figure still-blob flex flex-col items-center justify-center"
            >
              <h4 class="text-xs font-light p-1 text-[#121212]">UX DESIGN</h4>
              <img
                class="h-15 w-12 object-contain relative basis-1/4 self-center"
                :src="icons.ux"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology -->
    <section class="flex flex-col px-12">
      <!-- Heading -->
      <div>
        <h6 class="font-light font-serif tracking-wide">technology</h6>

        <p class="font-light text-sm p-3">
          Some tech I'm currently working with.
        </p>
      </div>

      <!-- Panel 3 -->
      <div class="flex xl:flex-row lg:flex-row justify-evenly items-center">
        <!-- Icons -->
        <div class="flex flex-col lg:flex-row xl:flex-row gap-6">
          <ul v-for="(icon, i) in logos.left" :key="i">
            <div class="figure">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex items-center justify-center self-end"
              >
                <img
                  class="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:h-16 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </div>
          </ul>
        </div>

        <div class="flex flex-col lg:flex-row xl:flex-row gap-6">
          <ul v-for="(icon, i) in logos.right" :key="i">
            <li class="figure">
              <figcaption class="self-center">
                <span class="text-sm font-light mb-3">{{ i }}</span>
              </figcaption>

              <figure
                class="still-blob flex items-center justify-center self-end"
              >
                <img
                  class="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:h-16 object-contain relative basis-1/4 self-center"
                  :src="icon"
                />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects ------------------- -->
    <section
      class="flex flex-col max-w-md self-start px-12 sm:px-4 md:self-center md:max-w-3xl sm:max-w-3xl"
    >
      <!-- Heading -->
      <div class="self-start">
        <h6 class="font-light font-serif tracking-wide">work</h6>

        <!-- Sub Heading -->
        <p class="font-light text-sm p-3">
          I am a bit busy finishing up an apprenticeship (01/2022) but I'll be
          adding so much more to this section throughout the month. Stay tuned!
        </p>
        <!--  -->
      </div>

      <!-- Icons -->
      <div class="w-full min-h-max flex flex-col items-evenly justify-evenly">
        <div class="figure flex justify-between items-center border-b-2">
          <figcaption class="flex flex-col justify-between">
            <span class="text-sm font-light">01</span>
            <h4 class="font-thin text-xs sm:text-sm">TRACKING FUNDS</h4>
          </figcaption>

          <figure class="self-center mr-3">
            <svg
              id="svg8"
              class="h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.4666665 8.4666669"
              version="1.1"
              inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
              sodipodi:docname="13. Exchange business, investment, money, market, financial, currency.svg"
            >
              <defs id="defs2">
                <pattern
                  id="EMFhbasepattern"
                  y="0"
                  x="0"
                  height="6"
                  width="6"
                  patternUnits="userSpaceOnUse"
                />
                <pattern
                  id="EMFhbasepattern-3"
                  y="0"
                  x="0"
                  height="6"
                  width="6"
                  patternUnits="userSpaceOnUse"
                />
                <pattern
                  id="EMFhbasepattern-2"
                  y="0"
                  x="0"
                  height="6"
                  width="6"
                  patternUnits="userSpaceOnUse"
                />
                <pattern
                  id="EMFhbasepattern-1"
                  y="0"
                  x="0"
                  height="6"
                  width="6"
                  patternUnits="userSpaceOnUse"
                />
                <pattern
                  id="EMFhbasepattern-5"
                  y="0"
                  x="0"
                  height="6"
                  width="6"
                  patternUnits="userSpaceOnUse"
                />
              </defs>

              <g
                id="layer1"
                class="svg-icon"
                inkscape:label="Guides"
                inkscape:groupmode="layer"
                transform="translate(0,-288.53332)"
              >
                <path
                  id="path1214"
                  style=""
                  d="m 5.2415297,289.06247 v 0.10333 0.45344 c -0.600215,0.23952 -1.023576,0.82835 -1.023576,1.52318 0,0.89904 0.7213414,1.63961 1.6194524,1.63961 0.8888539,0 1.6194528,-0.73976 1.6194524,-1.63961 0,-0.69387 -0.426265,-1.28194 -1.0227218,-1.52229 v -0.55763 z m -1.2054119,0.0849 -0.4251386,0.0954 0.098175,0.46659 c -0.2637199,-0.10452 -0.5433229,-0.16483 -0.8280809,-0.16551 -1.2980706,4e-5 -2.35190154,1.10524 -2.35191944,2.45547 6.556e-4,0.4851 0.1413859,0.95949 0.4003814,1.36299 l 0.36452604,-0.24512 c -0.2117474,-0.32988 -0.32557615,-0.71967 -0.32611024,-1.11787 1.49e-5,-1.1127 0.85593324,-2.00548 1.91312224,-2.00551 0.2243469,4.9e-4 0.4450734,0.0461 0.6539277,0.12603 l -0.4473341,0.24162 0.2031783,0.39654 0.8827171,-0.56901 z M 5.445562,289.269 h 0.7845424 v 0.28537 c -0.1251288,-0.0317 -0.2549655,-0.0506 -0.3892833,-0.0508 h -0.00341 c -0.1354734,0 -0.2662372,0.0191 -0.3918441,0.0498 z m 0.3918441,0.44206 c 0.047133,0 0.094011,0.002 0.1400056,0.008 0.00722,5e-4 0.014118,0.002 0.021343,0.003 0.030421,0.003 0.060682,0.008 0.090491,0.0135 0.070235,0.0136 0.1390497,0.0302 0.2057396,0.0534 0.5554136,0.19139 0.9586956,0.7209 0.9586956,1.35423 0,0.78663 -0.63929,1.43389 -1.4162742,1.43389 -0.787557,0 -1.4145665,-0.64645 -1.4145665,-1.43389 0,-0.63357 0.3957212,-1.16175 0.9527198,-1.35336 5.245e-4,-1.7e-4 0.00118,-7.1e-4 0.0017,-8.8e-4 0.06772,-0.0234 0.1375365,-0.0401 0.2091546,-0.0534 0.026933,-0.005 0.053639,-0.0102 0.0811,-0.0119 0.010473,-0.001 0.020998,-0.003 0.031588,-0.003 0.04548,-0.003 0.091586,-0.008 0.1382978,-0.008 z m -0.0017,0.21185 a 0.10214342,0.10340108 0 0 0 -0.019634,0.003 c -0.6516045,0.0119 -1.1670992,0.54401 -1.1789474,1.19404 a 0.10253338,0.10379584 0 0 0 0,0.0464 c 0.012125,0.64203 0.5153928,1.16857 1.1558979,1.19227 a 0.10214342,0.10340108 0 0 0 8.742e-4,0 0.10214342,0.10340108 0 0 0 0.090491,0 c 0.6393257,-0.0251 1.1567519,-0.56294 1.1567519,-1.21592 0,-0.66106 -0.5304497,-1.2042 -1.1806551,-1.21679 a 0.10214342,0.10340108 0 0 0 -0.024757,-0.003 z m -0.1015893,0.21448 c 7.867e-4,-10e-5 0.00179,5e-5 0.00258,0 v 0.19171 a 0.10214342,0.10340108 0 1 0 0.2031782,0 v -0.19171 c 0.4676605,0.0488 0.8430066,0.42815 0.8912539,0.90164 H 6.6416093 a 0.10253338,0.10379584 0 0 0 0,0.20748 h 0.1895196 c -0.048235,0.47345 -0.4235899,0.8528 -0.8912539,0.90164 v -0.19171 a 0.10214342,0.10340108 0 0 0 -0.1041502,-0.10503 0.10214342,0.10340108 0 0 0 -0.099028,0.10503 v 0.19171 c -0.4758939,-0.0473 -0.8391113,-0.42705 -0.8869853,-0.90164 h 0.1861046 a 0.10253338,0.10379584 0 0 0 0,-0.20748 H 4.8497115 c 0.047807,-0.47382 0.409673,-0.85333 0.8844239,-0.90164 z m 0.1015893,0.37816 a 0.10214342,0.10340108 0 0 0 -0.099028,0.10503 v 0.48147 a 0.10214342,0.10340108 0 0 0 0.0017,0.0569 0.10214342,0.10340108 0 0 0 0.054636,0.0718 l 0.3807465,0.38518 a 0.10235778,0.10361806 0 1 0 0.1442737,-0.14619 L 5.9398488,291.0872 v -0.46659 a 0.10214342,0.10340108 0 0 0 -0.1041502,-0.10503 z m 1.7338471,1.77179 -0.3713556,0.23811 c 0.1969431,0.32248 0.3038908,0.69865 0.3039139,1.08198 -1.4e-5,1.11269 -0.856789,2.00461 -1.9139758,2.00464 -0.2424328,-6.2e-4 -0.4805695,-0.0513 -0.7042953,-0.14449 l 0.4430659,-0.23897 -0.2031787,-0.39743 -0.885278,0.56899 0.1365906,1.0426 0.4259922,-0.0962 -0.096467,-0.47096 c 0.2788402,0.11943 0.5771864,0.18568 0.881009,0.18646 h 0.00258 c 1.2980688,-5e-5 2.3493413,-1.1044 2.3493584,-2.4546 -2.82e-5,-0.46712 -0.127146,-0.9258 -0.3679409,-1.32009 z m -5.0990984,0.7966 c -0.9117269,0 -1.65274644,0.75811 -1.65274644,1.69302 0,0.93489 0.74101954,1.69388 1.65274644,1.69388 0.9117277,0 1.6510391,-0.75899 1.6510391,-1.69388 0,-0.93491 -0.7393114,-1.69302 -1.6510391,-1.69302 z m 0,0.18734 c 0.8126398,0 1.4674954,0.67237 1.4674954,1.50568 0,0.83327 -0.6548556,1.50654 -1.4674954,1.50654 -0.812639,0 -1.4692028,-0.67327 -1.4692028,-1.50654 0,-0.83331 0.6565638,-1.50568 1.4692028,-1.50568 z m 0,0.23197 c -0.6823412,0 -1.242121,0.57401 -1.242121,1.27371 0,0.69968 0.559779,1.27281 1.242121,1.27281 0.6823428,0 1.2412673,-0.57313 1.2412673,-1.27281 0,-0.6997 -0.5589253,-1.27371 -1.2412673,-1.27371 z m 0,0.1891 c 0.5821942,0 1.0568699,0.48761 1.0568699,1.08461 0,0.59699 -0.4746762,1.08547 -1.0568699,1.08547 -0.5821925,0 -1.0585773,-0.48848 -1.0585773,-1.08547 0,-0.597 0.4763839,-1.08461 1.0585773,-1.08461 z m 0.00428,0.22147 -8.741e-4,0.002 c -0.024831,-2.6e-4 -0.049772,0.007 -0.045246,0.0227 v 0.14789 c -0.1149573,0.0169 -0.1969213,0.051 -0.2543999,0.11824 -0.06569,0.0673 -0.098174,0.15212 -0.098174,0.253 0,0.0757 0.02435,0.14331 0.057197,0.20221 0.030461,0.0374 0.070207,0.0698 0.1254924,0.0945 0.029626,0.0119 0.08969,0.0303 0.1382984,0.0446 0.00947,0.002 0.022449,0.007 0.029879,0.008 0.049165,0.0136 0.062553,0.0136 0.093052,0.0185 0.027283,0.003 0.062056,0.0136 0.092199,0.028 0.012689,0.007 0.025102,0.0119 0.035002,0.0183 0.010835,0.007 0.019739,0.0136 0.024757,0.021 9.616e-4,9e-4 0.00245,0.002 0.00341,0.002 0.00175,0.002 0.00258,0.003 0.00428,0.007 0.031523,0.0322 0.042153,0.0716 0.036707,0.12772 0.00131,0.0474 -0.00865,0.0852 -0.027318,0.11553 0,0 0,9e-4 0,9e-4 0,0 -8.742e-4,9e-4 -8.742e-4,9e-4 -0.00538,0.008 -0.011889,0.0169 -0.018782,0.0236 -9.179e-4,9.5e-4 -0.00162,9.5e-4 -0.00258,0.003 -5.245e-4,4.5e-4 -0.00114,0.001 -0.0017,0.002 -0.00323,0.003 -0.00586,0.007 -0.00939,0.0102 -0.00402,0.003 -0.0091,0.007 -0.013659,0.008 -0.00232,0.001 -0.0044,0.003 -0.00683,0.003 -0.009,0.007 -0.018362,0.0102 -0.02817,0.0136 -0.00127,4.4e-4 -0.00214,4.3e-4 -0.00341,9e-4 -0.028695,0.0102 -0.05381,0.0136 -0.070856,0.0174 -0.00497,8.8e-4 -0.00849,9.3e-4 -0.013659,0.003 v -9e-4 c -0.027751,9e-4 -0.051866,0.002 -0.090492,0 v 9e-4 c -0.021142,0 -0.042258,3.5e-4 -0.062319,-9e-4 -0.031392,-0.003 -0.067473,-0.0136 -0.1041503,-0.0271 -0.00487,-10e-4 -0.0083,-0.003 -0.012807,-0.007 -0.038962,-0.0136 -0.076816,-0.0324 -0.1058579,-0.0561 -6.994e-4,-4.4e-4 -0.00101,-10e-4 -0.0017,-0.002 -0.024634,-0.0169 -0.049837,-0.0334 -0.058051,-0.042 -0.020006,0.0395 -0.00768,0.13722 -0.00768,0.19347 0.041056,0.0252 0.097892,0.0507 0.1553715,0.0674 0.057479,0.0169 0.1233017,0.0254 0.1972027,0.0254 v 0.23286 c -0.0091,0.0224 0.1008939,0.0252 0.090492,0 v -0.24073 c 0.1067448,-0.008 0.1887101,-0.0508 0.2543999,-0.11824 0.06569,-0.0673 0.090491,-0.15178 0.090491,-0.25298 0,-0.0927 -0.016146,-0.15958 -0.057197,-0.21011 -0.029547,-0.0303 -0.063418,-0.0564 -0.1024429,-0.0771 -0.018257,-0.0119 -0.058931,-0.0222 -0.1075652,-0.0324 -0.050098,-0.0102 -0.1099041,-0.021 -0.1664701,-0.0376 -0.04673,-0.0136 -0.089504,-0.0322 -0.1254925,-0.0569 -0.00433,-0.002 -0.00822,-0.007 -0.01195,-0.008 -0.0035,-0.002 -0.00868,-0.003 -0.01195,-0.007 -0.00223,-0.002 -0.00385,-0.003 -0.00598,-0.007 -6.556e-4,-4.4e-4 -0.00192,-5.4e-4 -0.00258,-8.9e-4 -0.00101,-9e-4 -0.00162,-0.002 -0.00258,-0.003 -0.031532,-0.0324 -0.049705,-0.0742 -0.044392,-0.12874 0.00262,-0.0708 0.028782,-0.12299 0.070003,-0.15754 0.041218,-0.0346 0.096224,-0.0522 0.1570792,-0.0552 0.074815,-0.003 0.1570071,0.0136 0.2330577,0.0473 0.00166,4.6e-4 0.00437,0.001 0.00598,0.002 0.00101,4.5e-4 0.0024,10e-4 0.00341,0.002 0.044244,0.0205 0.086185,0.0434 0.1220779,0.0727 0.015246,-0.0434 0.00598,-0.13111 0.00598,-0.18383 -0.032843,-0.0169 -0.082526,-0.034 -0.1400052,-0.0508 -0.05748,-0.0169 -0.1064297,-0.0254 -0.1639087,-0.0254 v -0.14788 c 0.00479,-0.0136 -0.019564,-0.0222 -0.044392,-0.0227 z"
                  inkscape:connector-curvature="0"
                />
              </g>
            </svg>
          </figure>

          <a href="https://pensive-jackson-2a7810.netlify.app">
            <svg
              class="h-3 w-4 justify-self-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div class="figure flex justify-between items-center border-b-2">
          <figcaption class="flex flex-col justify-between">
            <span class="text-sm font-light">02</span>
            <h4 class="font-thin text-xs sm:text-sm">SPOTIFY OAUTH</h4>
          </figcaption>

          <figure class="self-center">
            <svg
              class="h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="880.000000pt"
              height="920.000000pt"
              viewBox="0 0 880.000000 920.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                class="svg-icon"
                transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M4235 8793 c-784 -34 -1516 -288 -2168 -751 -372 -264 -732 -637
-994 -1032 -626 -941 -822 -2084 -547 -3183 120 -479 296 -867 585 -1293 276
-406 671 -793 1089 -1069 511 -337 1042 -534 1705 -632 174 -26 813 -26 995 0
652 93 1197 298 1725 650 386 257 757 617 1027 997 411 580 647 1208 723 1925
19 176 22 581 5 755 -70 741 -341 1446 -784 2036 -178 238 -466 537 -693 718
-576 462 -1244 748 -1977 846 -134 18 -511 42 -591 38 -16 -1 -61 -3 -100 -5z
m-60 -2113 c1032 -60 1963 -298 2860 -730 157 -75 216 -124 261 -212 28 -56
42 -150 33 -223 -14 -113 -117 -252 -229 -311 -48 -25 -66 -29 -140 -29 -94 0
-78 -5 -370 130 -717 332 -1532 539 -2340 595 -188 13 -764 13 -950 0 -328
-24 -689 -76 -1007 -147 -227 -51 -319 -52 -415 -5 -148 73 -226 226 -199 392
22 134 108 257 214 306 95 43 529 131 879 178 171 23 479 52 628 59 163 8 621
6 775 -3z m-62 -1600 c851 -52 1679 -270 2397 -630 155 -78 204 -116 245 -191
27 -49 30 -63 30 -145 0 -88 -2 -95 -43 -175 -59 -117 -134 -206 -202 -242
-80 -42 -116 -34 -340 73 -604 288 -1109 435 -1810 527 -113 15 -213 18 -610
18 -476 0 -517 -2 -795 -41 -148 -21 -389 -68 -559 -110 -185 -45 -259 -46
-344 -3 -97 48 -152 124 -173 235 -28 153 61 382 175 449 137 80 918 216 1366
238 162 8 506 6 663 -3z m200 -1520 c630 -74 1239 -260 1745 -533 126 -68 155
-98 194 -205 18 -47 22 -80 22 -187 1 -128 0 -131 -30 -185 -35 -61 -101 -113
-167 -131 -81 -22 -129 -8 -363 104 -530 253 -934 372 -1486 434 -215 24 -714
24 -923 0 -259 -30 -489 -74 -718 -138 -167 -46 -229 -49 -302 -15 -55 25
-119 90 -141 142 -53 126 0 375 102 476 41 42 109 67 309 117 301 75 585 120
920 145 28 2 187 2 355 1 231 -3 348 -9 483 -25z"
                />
              </g>
            </svg>
          </figure>

          <a href="https://spotify-1-seven.vercel.app/">
            <svg
              class="case-study-list-item__icon h-3 w-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!--  -->
    </section>

    <!-- Ideas Section -->
    <section
      class="flex flex-col max-w-md self-start px-12 sm:px-4 md:self-center md:max-w-3xl"
    >
      <!-- Heading -->
      <!-- Heading -->
      <div class="flex flex-col">
        <h6
          class="from-neutral-500 font-light font-serif text-lg sm:text-sm md:text-lg lg:text-lg xl:text-sm"
        >
          connection
        </h6>

        <h1
          split-by="letter"
          letter-animation="hover"
          class="text-[#ff9e80] font-light font-thin font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-3"
        >
          What's next?
          <br />
        </h1>

        <!-- Paragraph -->
        <p class="text-sm font-normal w-full">
          My inbox is always open, whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
        <!-- Connect Link -->
        <a class="text-sm py-6" href="mailto:ricklefsmatthew1003@gmail.com"
          >say hello</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  transition: {
    appear: true,
    css: false,
    beforeEnter(el) {
      this.$gsap.set(el.children, {
        y: -100,
        scale: 0.1,
        opacity: 0,
        duration: 1,
      })
    },
    enter(el, done) {
      this.$gsap.to(el.children, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.75,
        ease: 'power2.inOut',
        onComplete: done,
        stagger: 0.5,
      })
    },
  },
  data() {
    return {
      logos: {
        left: {
          vue: require('../assets/images/logos/logo.png'),
          react: require('../assets/images/logos/react-logo.svg'),
          aws: require('../assets/images/logos/aws-logo.png'),
          express: require('../assets/images/logos/express-logo.png'),
        },
        right: {
          nuxt: require('../assets/images/logos/nuxt.png'),
          next: require('../assets/images/logos/next-logo.svg'),
          mongo: require('../assets/images/logos/mongodb-logo.svg'),
          node: require('../assets/images/logos/node-logo.svg'),
        },
      },
      icons: {
        ui: require('../assets/images/icons/icon01.svg'),
        front: require('../assets/images/icons/icon02.svg'),
        back: require('../assets/images/icons/icon03.svg'),
        ux: require('../assets/images/icons/icon04.svg'),
        coins: require('../assets/images/icons/coins.svg'),
        spotify: require('../assets/images/icons/spotify.svg'),
      },
    }
  },
  mounted() {
    // this.beforeEnter()
    // this.enter()
  },
  methods: {
    beforeEnter() {
      const figure = document.querySelectorAll('.figure')

      this.$gsap.set(figure, {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 1,
      })
    },
    enter(done) {
      const figure = document.querySelectorAll('.figure')

      this.$gsap.to(figure, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: done,
        stagger: 0.3,
        delay: 0.3,
      })
    },
  },
}
</script>
