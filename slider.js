let movies = [
  {
    names: "gas light",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "image/gaslight1.jpg",
  },
  {
    names: "pop kaun",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "image/popkaun1.jpg",
  },
  {
    names: "dil-bechara",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "image/dil-bechara.jpg",
  },
  {
    names: "Boston stranger",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "image/Boston.jpg",
  },
  {
    names: "The good wife",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "image/thegoodwife1.jpg",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("movie-des");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode("img"));
  h1.appendChild(document.createTextNode(movies[slideIndex].names));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createslide();
}

setInterval(() => {
  createslide();
}, 3000);

//video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mousehover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", function () {
    let video = item.children[1];
    video.pause();
  });
});
