let isCheck = false;
let btn = document.getElementsByClassName("btn-render");

function onclickRenderIcon(index) {
  isCheck = !isCheck;
  isCheck
    ? (btn[index].innerHTML = '<i class="bi bi-dash-square"></i>')
    : (btn[index].innerHTML = '<i class="bi bi-plus-square"></i>');
}
