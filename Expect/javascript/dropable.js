let dragSource = document.getElementById("drag_source_basic");
let dropTarget = document.getElementById("target_container")
let dragSources_multiple = document.getElementById("drag_source_multiple")
let dropTargets_multiple = document.querySelectorAll('[data-role="drag_drop_container"]');

dragSource.addEventListener('dragstart', dragStart);
dragSource.addEventListener('dragend', dragEnd);

dropTarget.addEventListener('drop', droped);
dropTarget.addEventListener('dragenter', cancelDefault);
dropTarget.addEventListener('dragover', dragover);
dropTarget.addEventListener('dragleave', dragLeave);

dragSources_multiple.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

dropTargets_multiple.forEach(item => {
    item.addEventListener('drop', droped);
    item.addEventListener('dragenter', cancelDefault);
    item.addEventListener('dragover', dragover);
    item.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    this.classList.add('dragging'); // 加入 dragging 自定義樣式
}

function dragEnd(e) {
    this.classList.remove('dragging'); // 移除 dragging 自定義樣式
}

function droped(e) {
    cancelDefault(e);
    let id = e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.querySelector(`#${id}`));
    this.classList.remove('hover'); // 移除 hover 自定義樣式
}

function dragover(e) {
    cancelDefault(e);
    this.classList.add('hover'); // 加入 hover 自定義樣式
}

function dragLeave(e) {
    this.classList.remove('hover'); // 移除 hover 自定義樣式
}

function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false; // 可加可不加
}