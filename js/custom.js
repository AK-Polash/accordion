let acc = document.querySelectorAll(".accordion");
let myArr = Array.from(acc);

myArr.map((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    let panel = item.nextElementSibling;
    let panelStyle = panel.style;
    if (panelStyle.display === "block") {
      panelStyle.display = "none";
    } else {
      panelStyle.display = "block";
    }
  });
});
