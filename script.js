const data = [
  {
    name: "Beutiful Home",
    image:
      "https://images.unsplash.com/photo-1710958607983-204d60423b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Man in Forest",
    image:
      "https://images.unsplash.com/photo-1710958607983-204d60423b2a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beutiful Home in ice",
    image:
      "https://images.unsplash.com/photo-1710958607988-c1747bbf0daa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Something Beautiful",
    image:
      "https://images.unsplash.com/photo-1710780953043-4dc3f98d2d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
  },
  {
    name: "Man with Lamp",
    image:
      "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    name: "Peace full nature",
    image:
      "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    name: "Scooba divinging",
    image:
      "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Cute Dog",
    image:
      "https://images.unsplash.com/photo-1710756115964-f949e92b97fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
];

const input = document.getElementById("searchinput");

const images = [];
const showCards = () => {
  for (let index = 0; index < 50; index++) {
    images.push("https://source.unsplash.com/random");
  }
  let cards = "";
  images.forEach((image) => {
    document.getElementById("container").innerHTML = cards;
    console.log(image);
    cards += `<div class="box">
        <img
          src=${image}
          alt=""
        />
        <p class="caption">${name}</p>
      </div>`;
  });
};

showCards();

const searchImage = (e) => {
  const searchValue = e.target.value;
  const filteredData = data.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
  let cards = "";
  filteredData.forEach(({ name, image }) => {
    cards += `<div class="box">
    <img
      src=${image}
      alt=${name}
    />
    <p class="caption">${name}</p>
  </div>`;
  });
  document.getElementById("container").innerHTML = cards;
};

input.addEventListener("keyup", (e) => searchImage(e));

input.addEventListener("focus", (e) => {
  document.querySelector(".overlay").classList.remove("hidden");
});

input.addEventListener("focusout", (e) => {
  document.querySelector(".overlay").classList.add("hidden");
});
