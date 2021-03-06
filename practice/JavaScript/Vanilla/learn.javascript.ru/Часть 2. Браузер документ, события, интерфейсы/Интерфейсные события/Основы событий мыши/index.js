/**
 * Выделяемый список
важность: 5

Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

    При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
    Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

Демо:

P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.
 */

ul.addEventListener("click", evt => {
  if (!evt.target.closest("LI")) return;

  if (!evt.ctrlKey && !evt.metaKey) {
    for (const li of ul.children) {
      li.classList.remove("selected");
    }
  }

  evt.target.classList.add("selected");
});
