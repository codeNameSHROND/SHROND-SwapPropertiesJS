window.onload = () => {
  box1.style.margin = "10px";
  box1.style.height = root.dimension;
  box1.style.width = root.dimension;
  box1.style.background = root.primaryColor;

  box2.style.margin = "10px";
  box2.style.height = box2.style.width = root.dimension;
  box2.style.width = root.dimension;
  box2.style.background = root.secondaryColor;

  // tinuyo ni sir para ma hide and delay sa bg sa circle nako hehe
  setTimeout(function () {
    const circlesDiv = document.querySelector(".css");
    circlesDiv.style.transform = "scale(1)";
  }, 1500);
};

////////// box
const buttons = document.querySelectorAll("button");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

const root = {
  primaryColor: "#0b4199",
  secondaryColor: "#17202e",
  dimension: "200px",
  hoverColor: "navy",
};

buttons.forEach(function (button) {
  button.style.padding = "10px";
  button.style.padding = "10px";
  button.style.color = "black";

  button.addEventListener("mouseover", function () {
    button.style.background = root.hoverColor;
    button.style.color = "white";
  });

  button.addEventListener("mouseout", function () {
    button.style.background = "";
    button.style.color = "black";
  });
});

// diari sir kay ge swap ra ang mga properties
let lastBox = "first box";
function updateBox(box) {
  if (box === "first box" && lastBox != "first box") {
    lastBox = box;
    const temp = {
      margin: box1.style.margin,
      height: box1.style.height,
      width: box1.style.width,
      background: box1.style.background,
    };
    box1.style.margin = box2.style.margin;
    box1.style.height = box2.style.height;
    box1.style.width = box2.style.width;
    box1.style.background = box2.style.background;

    box2.style.margin = temp.margin;
    box2.style.height = temp.height;
    box2.style.width = temp.width;
    box2.style.background = temp.background;
  } else if (box === "second box" && lastBox !== "second box") {
    lastBox = box;
    const temp = {
      margin: box2.style.margin,
      height: box2.style.height,
      width: box2.style.width,
      background: box2.style.background,
    };
    box2.style.margin = box1.style.margin;
    box2.style.height = box1.style.height;
    box2.style.width = box1.style.width;
    box2.style.background = box1.style.background;

    box1.style.margin = temp.margin;
    box1.style.height = temp.height;
    box1.style.width = temp.width;
    box1.style.background = temp.background;
  }
}

////////// circle
document.querySelector(".circle1").classList.add("update");
document.querySelector(".circle1").classList.add("updateBorder");
let locator = 2;
function updateCircle() {
  console.log(locator);
  if (locator == 1) {
    locator = 2;
    document.querySelector(".circle1").classList.add("update");
    document.querySelector(".circle1").classList.add("updateBorder");
    document.querySelector(".circle2").classList.remove("update");
    document.querySelector(".circle2").classList.remove("updateBorder");
  } else if (locator == 2) {
    locator = 1;
    document.querySelector(".circle1").classList.remove("update");
    document.querySelector(".circle1").classList.remove("updateBorder");
    document.querySelector(".circle2").classList.add("update");
    document.querySelector(".circle2").classList.add("updateBorder");
  }
}
