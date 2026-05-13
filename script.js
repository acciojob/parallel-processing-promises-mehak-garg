//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
const output = document.getElementById("output");
const loading = document.getElementById("loading");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
  loading.innerText = "Loading...";
  error.innerText = "";
  output.innerHTML = "";

  let promise1 = new Promise((resolve, reject) => {
    let img1 = new Image();

    img1.src = images[0].url;

    img1.onload = () => {
      resolve(images[0].url);
    };

    img1.onerror = () => {
      reject("Failed to load image 1");
    };
  });

  let promise2 = new Promise((resolve, reject) => {
    let img2 = new Image();

    img2.src = images[1].url;

    img2.onload = () => {
      resolve(images[1].url);
    };

    img2.onerror = () => {
      reject("Failed to load image 2");
    };
  });

  let promise3 = new Promise((resolve, reject) => {
    let img3 = new Image();

    img3.src = images[2].url;

    img3.onload = () => {
      resolve(images[2].url);
    };

    img3.onerror = () => {
      reject("Failed to load image 3");
    };
  });

  Promise.all([promise1, promise2, promise3])
    .then((res) => {
      loading.innerText = "";

      output.innerHTML = `
        <img src="${res[0]}">
        <img src="${res[1]}">
        <img src="${res[2]}">
      `;
    })
    .catch((err) => {
      loading.innerText = "";
      error.innerHTML = `${err}`;
    });
});
