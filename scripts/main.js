// Cash
let mode = document.querySelector("#mode"),
  modeIcon = document.querySelector("#mode i");

modeIcon.parentElement.addEventListener("click", () => {
  /* If The Mode Icon Data Dark = true 
            Make Dark Mode 
            Make Mode Icon Data Dark = false 
            Sava The Data Dark Value In The Local Sorage
        Else 
            Make The Light Mode
            Make Mode Icon Data Dark = true
            Sava The Data Dark Value In The Local Sorage*/
  if (modeIcon.dataset.dark == "true") {
    pageMode(
      "var(--blue-color)",
      "black",
      "white",
      "#758391",
      "#71c7f1",
      "#c9d3f1",
      "#8ef38e"
    );
    modeIcon.dataset.dark = "false";
    localStorage.setItem("isDarkMode", true);
  } else {
    pageMode(
      "blue",
      "white",
      "black",
      "#d3d3d352",
      "blue",
      "#746f6f52",
      "#23e923"
    );
    modeIcon.dataset.dark = "true";
    localStorage.setItem("isDarkMode", false);
  }
});

function pageMode(
  blueColorVar,
  bodyBg,
  bodyColor,
  mainColor,
  blueColor,
  fontColor,
  iconsColor
) {
  modeIcon.style.color = blueColorVar;
  document.body.style.backgroundColor = bodyBg;
  document.body.style.color = bodyColor;
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--blue-color", blueColor);
  document.documentElement.style.setProperty("--font-color", fontColor);
  document.documentElement.style.setProperty("--icons-color", iconsColor);
}
/*On Load The Page 
    Set The Mode Icon Data Dark 
    Make Click On The Mode Icon */
window.onload = () => {
  modeIcon.dataset.dark = localStorage.getItem("isDarkMode");
  modeIcon.click();
};
