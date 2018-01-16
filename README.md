<h1>Worksample for HL-design</h1>

<p>This is an assignment I got from the company HL-design as a part of my interview at them.</p>

<p>The task is to create a start-page for a webshop and I had to follow this specific instructions:</p>
<ul>
  <li>A Header with logo and menus</li>
  <li>A carousel for images</li>
  <li>Fetch products from an API and also have a searchfield so the user can searh for products</li>
  <li>BanerAd that are clickable</li>
</ul> 

<p>To help me with the page overall structure I also recieved a design-template</p>

<h2>Workprocess</h2>
<p>For the overall styling I chose to not use any frameworks like bootstrap. Instead I went for a native solution. I solved the sites responsivnes whith the use of css flexbox. For the sites functionality like the slider I used vanilla javascript with a function that changes css styling for the different slider images. For my api request I went for jQuery since I find jQuerys built in ajax request easier to use.</p>

<p>I started with setting up a gulp installation for my production build. My gulp config is there to compile my scss code into css and the to minify my css and js files for my distribution build later when I'm finished.</p>

<p>After my gulp setup I started with a basic index page and to begin with a structure for it. I started with a "Hero"-section where I placed the header with the logo and the two menu-links. This is also where I placed my img-slider. After the "Hero"-section I continued with a "Products"-section. This is where I placed the search-field the user can use to search for products. All the products I placed under the search-field. On load the page shows you six products. When you use the search-field and type in a new product, these will then replace the original products. After the "Products"-section I placed a "Banner"-section. Here I placed the two banner-images that is to be there.</p>

<h2>The project</h2>

<p>For those of you who want to have a look at the finished product. You could either use the link below to get to a live demo. Or you could download the repo, be sure to run npm install and start the application in your desired terminal with gulp watch</p>

<a href="http://midjich.com/worksample" target="_blanck">A live demo</a>
