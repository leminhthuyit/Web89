let isCheck = false;
let btn = document.getElementsByClassName("btn-render");

function onclickRenderIcon(index) {
  isCheck = !isCheck;
  isCheck
    ? (btn[index].innerHTML = '<i class="bi bi-dash-square"></i>')
    : (btn[index].innerHTML = '<i class="bi bi-plus-square"></i>');
}

// let data = [
//   {
//     title: "Title câu hỏi thường gặp",
//     content: "Lorem Ipsum is simply dummy text of the printing and typesetting",
//   },
// ];

// data.map((item, index) => {
//   return (
//     <div class="col-12">
//       <div class="collapse_question">
//         <p>
//           <span>{item.title}</span>
//           <button
//             class="btn-render"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapseExample"
//             aria-expanded="false"
//             aria-controls="collapseExample"
//             onclick={`onclickRenderIcon(${index})`}
//           >
//             <i class="bi bi-plus-square"></i>
//           </button>
//         </p>
//         <div class="collapse" id="collapseExample">
//           <div class="card card-body card_question">{item.content}</div>
//         </div>
//       </div>
//     </div>
//   );
// });
