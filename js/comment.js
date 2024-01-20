const commentReviewsFunc = () => {
  const commentStarsDOM = document.querySelectorAll(
    ".comment-form-rating .star"
  );
  const commentStarsWrapper = document.querySelector(".comment-star");
  commentStarsDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();
      commentStarsDOM.forEach((star) => star.classList.remove("active"));
      item.classList.add("active");
    });
  });
};

const addNewComment = () => {
  let comments = [];

  let commentTextDOM = document.querySelector("#comment-text");
  let commentNameDOM = document.querySelector("#comment-name");
  let commentStarDOM = document.querySelectorAll(".comment-form-rating .star");
  console.log(commentStarDOM);
  const commentBtnDOM = document.querySelector(".form-submit input");
  const commentListWrapper = document.querySelector(".comment-list");
  let commentText = "";
  let commentName = "";
  let selectedStar = null;

  commentTextDOM.addEventListener("input", (e) => {
    commentText = e.target.value;
  });
  commentNameDOM.addEventListener("input", (e) => {
    commentName = e.target.value;
  });
  commentStarDOM.forEach((star) => {
    star.addEventListener("click", (e) => {
      selectedStar = e.target;
      commentStarDOM.forEach((event) => event.classList.remove("active"));
      selectedStar.classList.add("active");
    });
  });

  function addComment(e) {
    e.preventDefault();
    const commentStar = selectedStar ? selectedStar.outerHTML : "";
    console.log(commentStar);
    comments.push({
      text: commentText,
      name: commentName,
      review: commentStar,
    });
    console.log(comments);
    let result = "";

    comments.forEach((item) => {
      result += ` <li class="comment-item">
<div class="comment-avatar">
  <img
    src="./images/comment-avatar.webp"
    alt=""
  />
</div>
<div class="comment-text">
  <ul class="comment-star">
   ${item.review}
  </ul>
  <div class="comment-meta">
    <strong>${item.name}</strong> -
    <time>April 22, 2024</time>
  </div>
  <div class="comment-desc">
    <p>
    ${item.text}
    </p>
  </div>
</div>
</li>`;
    });
    commentListWrapper.innerHTML = result;
    commentTextDOM.value = "";
    commentNameDOM.value = "";
  }

  commentBtnDOM.addEventListener("click", addComment);
};

function commentFunc() {
  commentReviewsFunc();
  addNewComment();
}
export default commentFunc();
