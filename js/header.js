function sideBarFunc() {
  //! home sidebar start
  const btnOpenSideBar = document.querySelector(".header-mobile #open-nav-btn");
  const sideBar = document.querySelector("#side-bar");
  const btnCloseSideBar = document.querySelector("#close-nav-btn");
  btnOpenSideBar.addEventListener("click", () => {
    sideBar.style.left = "0";
  });
  btnCloseSideBar.addEventListener("click", () => {
    sideBar.style.left = "-100%";
  });

  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(sideBar) &&
      !e.composedPath().includes(btnOpenSideBar)
    ) {
      sideBar.style.left = "-100%";
    }
  });
  //! home sidebar end
}
function searchModalFunc() {
  //! search modal start
  const searchBtn = document.querySelector("#search-btn");
  const modalSearch = document.querySelector(".modal-search");
  const closeSearchBtn = document.querySelector("#close-search-btn");
  const modalSearchWrapper = document.querySelector(".modal-wrapper");
  searchBtn.addEventListener("click", () => {
    modalSearch.style.visibility = "visible";
    modalSearch.style.opacity = "1";
  });
  closeSearchBtn.addEventListener("click", () => {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
  });

  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(modalSearchWrapper) &&
      !e.composedPath().includes(searchBtn)
    ) {
      modalSearch.style.visibility = "hidden";
      modalSearch.style.opacity = "0";
    }
  });

  //! search modal end
}

function headerFunc() {
  sideBarFunc();
  searchModalFunc();
}

export default headerFunc;
