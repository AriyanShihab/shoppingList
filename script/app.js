function getID(el) {
    return document.getElementById(el);
}

const item = getID(`item`);
const quantity = getID(`quantiy`);
const note = getID(`note`);
const submitBtn = getID(`submitBtn`);
const content = getID(`content`);
const edit = getID(`edit`);
const form = getID(`form`);
const complite = getID(`complite`);

function checkFromValue() {
    if (item.value == "" || quantity.value == "") {
        alert(`Please fill up the item name and quantity Feild.. Short note feild is optional;`);


        content.removeChild(content.lastChild - 1);
    }
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    checkFromValue();

    let d = document.createElement(`div`);
    d.classList.add(`itemList`);
    d.innerHTML = ` <div class="itemflex learge">
    <p class="name"><span class="rr">Name:</span>${item.value}</p>
              <p class="quanttity"><span class="rr">Quantity:</span>${quantity.value}</p>
              <p class="notes"><span class="rr">Note:</span>${note.value}</p></div>

      <div class="itemflex">
                    <p onclick="vanis(this)" class="ok">
        <img class="small" src="./imges/icons8-check-all.svg" alt="" />
    </p>
    <p onclick="hide(this)" class="notOK">
     <img  class="small" src="./imges/icons8-delete.svg" alt="" />
    </p>
    <p onclick="undo(this)" class="x">  <img class="small" src="https://img.icons8.com/fluency/48/000000/recurring-appointment.png" alt=""> </p>
    
 
</div>`;

    content.appendChild(d);
    item.value = "";
    quantity.value = "";
    note.value = ""
});

function vanis(th) {
    complite.appendChild(th.parentElement.parentElement);
    th.parentElement.parentElement.style.display = `none`;

    let v = complite.getElementsByTagName(`div`);
    [].forEach.call(v, (childe) => {
        childe.style.display = `flex`;
    });
}

function hide(th) {
    th.parentElement.parentElement.style.display = `none`;
}
// undo
function undo(th) {
    const icon = complite.getElementsByClassName(`x`);
    [].forEach.call(icon, (ic) => {
        ic.addEventListener(`click`, () => {
            edit.appendChild(th.parentElement.parentElement);
        });
    });
}

// drop down
const select = getID(`select`);
const ul = getID(`ul`);

select.addEventListener(`click`, () => {
    ul.classList.toggle(`open`);
    select.classList.toggle(`border`);
});
const li = ul.getElementsByTagName(`li`);

[].forEach.call(li, (it) => {
    it.addEventListener(`click`, () => {
        item.value = it.innerText;
        ul.classList.remove(`open`);
    });
});