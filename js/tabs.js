function tabsFunc() {
  const tabBtn = document.querySelectorAll(".tab-button");
  const contentDOM = document.querySelectorAll(".content");
  const tabsButton = document.querySelector(".tab-list");
  tabsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      tabBtn.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      contentDOM.forEach((content) => content.classList.remove("active"));
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  console.log(tabBtn);
  console.log(contentDOM);
}
export default tabsFunc();
