<script setup>
</script>

<template>
  <div class="bg-black">
    <header>
      <nav class="bg-bagg border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-none">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img src="./assets/img/LogoWhite.png" class="h-9 sm:h-14" alt="Langkilde Larsen" />
          </a>
          <div class="flex items-center lg:order-2 space-x-3">
            <a href="https://dribbble.com/longkilos" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-dribbble" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2"></path>
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path>
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path>
              </svg></a>
            <a href="https://www.linkedin.com/in/longkilos/" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg></a>
            <a href="https://github.com/LangkildeLarsen" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                </path>
              </svg></a>
            <button data-collapse-toggle="mobile-menu-2" type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-neutral-400 dark:hover:bg-bagg dark:focus:ring-bg-bagg"
              aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#2"
                  class="block font-boody text-sm font-semibold py-2 pr-4 pl-3 text-neutral-800 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-neutral-400 lg:dark:hover:text-white dark:hover:bg-zinc-600 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-600">Portefølje</a>
              </li>
              <li>
                <a href="#3"
                  class="block font-boody text-sm font-semibold	 py-2 pr-4 pl-3 text-neutral-800 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-neutral-400 lg:dark:hover:text-white dark:hover:bg-zinc-600 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-600">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="bg-bagg body-font">
  <div class="container mx-auto max-w-screen-xl flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="./assets/img/emil1.png">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="font-headlines font-semibold sm:text-6xl text-5xl mb-8 text-white">Kreativ grafiker
        <br class="hidden lg:inline-block"> og webudvikler
      </h1>
      <p class="font-boody text-sm max-w-2xl mb-6 text-neutral-400 font-semibold">Hej 👋, mit navn er Emil Langkilde
            Larsen. Jeg er en passioneret webdesigner 🖌️ på jagt efter en spændende jobmulighed. 👔</p>
      <div class="flex justify-center">
        <a href="./assets/CV.pdf"
            class="inline-flex text-sm items-center justify-center px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
            Hent CV <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download ml-2" width="18"
              height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/watch?v=GvoADbSjwWE" target="_blank"
            class="inline-flex text-sm items-center justify-center px-5 py-3 ml-4 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
            Se Video CV <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled ml-2"
                width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  stroke-width="0" fill="currentColor"></path>
              </svg>
          </a>
      </div>
    </div>
  </div>
</section>

    <section id="2" class="text-gray-600 body-font bg-bagg">
      <div class="mx-auto p-4 max-w-screen-xl">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 class="font-headlines font-semibold max-w-2xl mr-2 text-6xl text-white md:items-start md:text-left items-center text-center">Portefølje</h1>
          </div>
          <p class="font-boody text-sm font-semibold lg:w-1/2 w-full leading-relaxed text-neutral-400 md:items-start md:text-left items-center text-center">Jeg er passioneret omkring
            webdesign og brænder for at skabe unikke og skræddersyede løsninger til mine kunder. Jeg er fortrolig med de
            seneste trends og teknologier inden for webdesign og vil sørge for at levere en hjemmeside, der er intuitiv,
            brugervenlig og iøjnefaldende.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/hs.png" alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Home Shoppen<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Ejer
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Etablering af succesfuld
                webshop med 15 mio i omsætning over 4 år. Fordobling af resultat 3 år i træk.</p>
              <a href="https://dribbble.com/shots/21255035-Home-Shoppen"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>

            </div>

          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/bv.png" alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Blåvand<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Ejer
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Webcam, Nyheder og
                Information om strandbyen Blåvand. Betaling pr. klik annoncer med 800.000 sidevisninger om året.</p>
              <a href="https://dribbble.com/shots/21254985-Bl-vand"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/an.png" alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">AirNet<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Freelance
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Komplet ny visuel
                identitet
                til www.AirNet.dk. Udvikling af ny hjemmeside samt nyt logo.</p>
              <a href="https://dribbble.com/shots/21254910-AirNet"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/sah.png"
                alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Shopathome<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Ejer
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Etablering af webshop som
                handler med Royal Copenhagen, Kay Bojesen, Kähler og mange flere. Omsætning på 300.000 kr.</p>
              <a href="https://dribbble.com/shots/21254826-Shopathome"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/lammhults.png"
                alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Lammhults Biblioteksdesign
                A/S<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Freelance
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Etablering af YouTube
                kanal
                med over 100 videoer med projektbilleder. 72.012 visninger.</p>
              <a href="#"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/bbq.png"
                alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Longhorn BBQ<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Skoleprojekt
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Komplet ny visuel
                identitet
                til Longhorn BBQ Competition. Udvikling af ny hjemmeside samt nyt logo.</p>
              <a href="#"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/ngo.png"
                alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Stop Childlabour<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Skoleprojekt
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Komplet ny visuel
                identitet
                til www.stopchildlabour.org. Udvikling af ny hjemmeside samt nyt logo.</p>
              <a href="#"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2">
            <div class="bg-bagg border-neutral-900 p-6 rounded-lg">
              <img class="h-70 rounded-lg w-full object-cover object-center mb-6" src="./assets/img/bc.png"
                alt="content">
              <h2 class="font-boody text-sm font-semibold text-gray-900 dark:text-white">Business Cards<span
                  class="bg-neutral-900 text-neutral-500 text-xs font-boody font-semibold inline-flex items-center px-2.5 py-0.5 rounded ml-4 mb-4 dark:bg-neutral-900 dark:text-neutral-600">
                  Personligt
                </span></h2>
              <p class="font-boody text-sm mb-4 font-medium text-gray-900 dark:text-neutral-400">Etablering af visuel identitet til mig personligt.</p>
              <a href="https://dribbble.com/shots/21255239-Business-Cards"
                class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
                Vis projekt <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye ml-2"
                  width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="3" class="bg-bagg dark:bg-bagg">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h2 class="font-boody mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Lad os tage en snak</h2>
          <p class="mb-6 font-boody font-semibold dark:text-neutral-400">Jeg er en dygtig webdesigner på udkig efter en
            spændende arbejdsplads, hvor jeg kan udnytte mine færdigheder og viden inden for webdesign til at skabe flotte
            og effektive hjemmesider.</p>
          <a href="tel:53535909"
            class="inline-flex text-sm items-center justify-center mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
            Ring til mig <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone ml-2"
              width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
              </path>
            </svg>
          </a>
          <a href="mailto: emil@langkildelarsen.dk"
            class="inline-flex text-sm items-center justify-center ml-4 mt-2 px-5 py-3 font-boody font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-700 dark:hover:border-white dark:hover:font-semibold">
            Send en mail <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail ml-2" width="18"
              height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <footer class="p-4 bg-white sm:p-6 dark:bg-bagg">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center">
              <img src="./assets/img/LogoWhite.png" class="h-9 sm:h-14" alt="Langkilde Larsen" />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="font-boody text-sm font-semibold mb-6 text-gray-900 dark:text-white">Hurtige links</h2>
              <ul class="font-boody text-sm font-semibold text-neutral-400 dark:text-neutral-400">
                <li class="mb-4">
                  <a href="#2" class="hover:text-white">Portefølje</a>
                </li>
                <li>
                  <a href="/" class="hover:text-white">Til toppen</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="font-boody text-sm font-semibold mb-6 text-gray-900 dark:text-white">Følg mig</h2>
              <ul class="font-boody text-sm font-semibold text-neutral-400 dark:text-neutral-400">
                <li class="mb-4">
                  <a href="https://www.linkedin.com/in/longkilos/" class="hover:text-white">LinkedIn</a>
                </li>
                <li>
                  <a href="https://dribbble.com/longkilos" class="hover:text-white">Dribbble</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="font-boody text-sm font-semibold mb-6 text-gray-900 dark:text-white">Det nødvendige</h2>
              <ul class="font-boody text-sm font-semibold text-neutral-400 dark:text-neutral-400">
                <li class="mb-4">
                  <a href="#" class="hover:text-white">Cookie- og privatlivspolitik</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white">Handelsbetingelser</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-neutral-900 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="font-boody text-sm font-medium text-gray-500 sm:text-center dark:text-neutral-700">© 2023 <a
              href="https://flowbite.com" class="hover:font-semibold">Langkildelarsen.dk</a>. Alle rettigheder
            forbeholdes.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://dribbble.com/longkilos" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-dribbble" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2"></path>
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path>
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path>
              </svg></a>
            <a href="https://www.linkedin.com/in/longkilos/" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg></a>
            <a href="https://github.com/LangkildeLarsen" class="text-white font-medium"><svg
                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                </path>
              </svg></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
