//頁面顯示卦象
const yao1 = document.querySelector(".yao1");
const yao2 = document.querySelector(".yao2");
const yao3 = document.querySelector(".yao3");
const yao4 = document.querySelector(".yao4");
const yao5 = document.querySelector(".yao5");
const yao6 = document.querySelector(".yao6");
const hexMonji = document.querySelector(".hexMonji");

//卦象
const yaoComment = [];

//卦象中文
const hexView = [];
const hexUp = document.querySelector("#hexUp");
const hexDown = document.querySelector("#hexDown");
const hexMeaning = document.querySelector("#hexMeaning");

//變卦囉
const hexChange = () => {
  if (yaoComment.length == 6) {
    for (let index = 0; index < yaoComment.length; index++) {
      if (yaoComment[index] == "1-old") {
        yaoComment[index] = "0";
      }
      if (yaoComment[index] == "0-old") {
        yaoComment[index] = "1";
      }
    }
    hexagram();
  }
  if (yaoComment.length < 6) {
    window.confirm("卦象尚未有六爻");
  }
};

//卦象重製
const hexClean = () => {
  for (let i = 0; i < yaoComment.length; i++) {
    yao = document.querySelector(`.yao${i + 1}`);
    yao.style.display = "none";
  }
  yaoComment.length = 0;
  hexMonji.style.display = "none";
};

//填入卦象
const hexagram = (a) => {
  if (yaoComment.length < 6) {
    if (a == 1) {
      yaoComment.push("1");
    } else if (a == 2) {
      yaoComment.push("1-old");
    } else if (a == 3) {
      yaoComment.push("0");
    } else if (a == 4) {
      yaoComment.push("0-old");
    }
  }

  let yao;
  for (let i = 0; i < yaoComment.length; i++) {
    yao = document.querySelector(`.yao${i + 1}`);
    if (yaoComment[i] == "1") {
      yao.innerHTML = "<img src='./img/1.png'/>";
      yao.style.display = "flex";
    } else if (yaoComment[i] == "1-old") {
      yao.innerHTML = "<img src='./img/1-old.png'/>";
      yao.style.display = "flex";
    } else if (yaoComment[i] == "0") {
      yao.innerHTML = "<img src='./img/0.png'/>";
      yao.style.display = "flex";
    } else if (yaoComment[i] == "0-old") {
      yao.innerHTML = "<img src='./img/0-old.png'/>";
      yao.style.display = "flex";
    }
  }

  if (yaoComment.length == 3) {
    //前四象
  }
  if (yaoComment.length == 6) {
    if (yaoComment[0] === "1" || yaoComment[0] === "1-old") {
      if (yaoComment[1] === "1" || yaoComment[1] === "1-old") {
        if (yaoComment[2] === "1" || yaoComment[2] === "1-old") {
          hexView.push("天");
        } else {
          hexView.push("澤");
        }
      }
      if (yaoComment[1] === "0" || yaoComment[1] === "0-old") {
        if (yaoComment[2] === "1" || yaoComment[2] === "1-old") {
          hexView.push("火");
        } else {
          hexView.push("雷");
        }
      }
    }
    if (yaoComment[0] === "0" || yaoComment[0] === "0-old") {
      if (yaoComment[1] === "1" || yaoComment[1] === "1-old") {
        if (yaoComment[2] === "1" || yaoComment[2] === "1-old") {
          hexView.push("風");
        } else {
          hexView.push("水");
        }
      }
      if (yaoComment[1] === "0" || yaoComment[1] === "0-old") {
        if (yaoComment[2] === "1" || yaoComment[2] === "1-old") {
          hexView.push("山");
        } else {
          hexView.push("地");
        }
      }
    }
    hexDown.innerHTML = hexView[0];
    //後四象
    if (yaoComment[3] === "1" || yaoComment[3] === "1-old") {
      if (yaoComment[4] === "1" || yaoComment[4] === "1-old") {
        if (yaoComment[5] === "1" || yaoComment[5] === "1-old") {
          hexView.push("天");
        } else {
          hexView.push("澤");
        }
      }
      if (yaoComment[4] === "0" || yaoComment[4] === "0-old") {
        if (yaoComment[5] === "1" || yaoComment[5] === "1-old") {
          hexView.push("火");
        } else {
          hexView.push("雷");
        }
      }
    }
    if (yaoComment[3] === "0" || yaoComment[3] === "0-old") {
      if (yaoComment[4] === "1" || yaoComment[4] === "1-old") {
        if (yaoComment[5] === "1" || yaoComment[5] === "1-old") {
          hexView.push("風");
        } else {
          hexView.push("水");
        }
      }
      if (yaoComment[4] === "0" || yaoComment[4] === "0-old") {
        if (yaoComment[5] === "1" || yaoComment[5] === "1-old") {
          hexView.push("山");
        } else {
          hexView.push("地");
        }
      }
    }
    hexMonji.style.display = "flex";
    hexUp.innerHTML = hexView[1];
    hexView.length = 0;
  }
};
