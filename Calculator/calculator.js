const topInput = document.querySelector("#inputTop");
let downInput = document.querySelector("#input");
const button = document.querySelectorAll("button");
topInput.value = "";
downInput.value = 0;

button[0].addEventListener("click", () => {
    topInput.value = "";
    downInput.value = 0;
});

button[1].addEventListener("click", () => {
    downInput.value *= (-1);
});

button[2].addEventListener("click", () => {
    topInput.value = downInput.value + " * " + downInput.value + " =";
    downInput.value *= downInput.value;
});

button[3].addEventListener("click", () => {
    if (topInput.value == "" ) {
      topInput.value = downInput.value + " /";
    } else {
      if (topInput.value.includes("=")) {
        topInput.value = downInput.value + " /";
      } else if (topInput.value.includes("/") && downInput.value != "") {
        topInput.value = topInput.value.split(" ")[0] / downInput.value + " /";
      } else {
        topInput.value = topInput.value.slice(0, -2) + " /";
      }
    }
    downInput.value = "";
  });

  button[7].addEventListener("click", () => {
    if (topInput.value == "" ) {
      topInput.value = downInput.value + " *";
    } else {
      if (topInput.value.includes("=")) {
        topInput.value = downInput.value + " *";
      } else if (topInput.value.includes("*") && downInput.value != "") {
        topInput.value = topInput.value.split(" ")[0] * downInput.value + " *";
      } else {
        topInput.value = topInput.value.slice(0, -2) + " *";
      }
    }
    downInput.value = "";
  });

  button[11].addEventListener("click", () => {
    if (topInput.value == "" ) {
      topInput.value = downInput.value + " -";
    } else {
      if (topInput.value.includes("=")) {
        topInput.value = downInput.value + " -";
      } else if (topInput.value.includes("-") && downInput.value != "") {
        topInput.value = topInput.value.split(" ")[0] - downInput.value + " -";
      } else {
        topInput.value = topInput.value.slice(0, -2) + " -";
      }
    }
    downInput.value = "";
  });
  button[15].addEventListener("click", () => {
    if (topInput.value == "" ) {
      topInput.value = downInput.value + " +";
    } else {
      if (topInput.value.includes("=")) {
        topInput.value = downInput.value + " +";
      } else if (topInput.value.includes("+") && downInput.value != "") {
        topInput.value = parseFloat(topInput.value.split(" ")[0]) + parseFloat(downInput.value) + " +";
      } else {
        topInput.value = topInput.value.slice(0, -2) + " +";
      }
    }
    downInput.value = "";
  });

for (let i = 4; i < 17; i++) {
    button[i].addEventListener("click", () => {
      if ([4, 5, 6, 8, 9, 10, 12, 13, 14, 16].includes(i)) {
        if (downInput.value == 0 && !downInput.value.includes(".")) {
          downInput.value = button[i].textContent;
        } else {
          downInput.value += button[i].textContent;
        }
      }
    });
}

button[17].addEventListener("click", () => {
    if (downInput.value != "" && !downInput.value.includes(".")) {
      downInput.value += ".";
    }
});

button[18].addEventListener("click", () => {
    if (topInput.value == "" || topInput.value == downInput.value) {
        topInput.value = downInput.value + " =";
    } else if (topInput.value.includes("=") && topInput.value.split(" ").length > 2) {
        topInput.value = downInput.value;
      if (topInput.value.includes("/")) {
        downInput.value = topInput.value.split(" ")[0] / topInput.value.split(" ")[2];
      } else if (topInput.value.includes("*")) {
        downInput.value = topInput.value.split(" ")[0] * topInput.value.split(" ")[2];
      } else if (topInput.value.includes("-") && !topInput.value.includes("+")) {
        downInput.value = topInput.value.split(" ")[0] - topInput.value.split(" ")[2];
      } else if (topInput.value.includes("+")) {
        downInput.value = parseFloat(topInput.value.split(" ")[0]) + parseFloat(topInput.value.split(" ")[2]);
      }
    } else if (!topInput.value.includes("=") && downInput.value != ""){
        topInput.value = topInput.value + " " + downInput.value + " =";
      if (topInput.value.includes("/")) {
        downInput.value = topInput.value.split(" ")[0] / downInput.value;
      } else if (topInput.value.includes("*")) {
        downInput.value = topInput.value.split(" ")[0] * downInput.value;
      } else if (topInput.value.includes("-") && !topInput.value.includes("+")) {
        downInput.value = topInput.value.split(" ")[0] - downInput.value;
      } else if (topInput.value.includes("+") || topInput.value.includes("-")) {
        downInput.value = parseFloat(topInput.value.split(" ")[0]) + parseFloat(downInput.value);
      }
    }
  });

