function RemoveItem(number){
    document.getElementById("child"+number).remove();
}
function CheckedItem(number){
   // alert(number);
    const parent = document.querySelector(`.li-item-val${number}`);
    parent.classList.add('checked');
    document.querySelector(`#editli${number}`).style.display="none";
    //document.querySelector(`#child${number} :nth-child(2)`).remove();
   
    
}
function EditItem(number){
   const input = document.querySelector(".input");
    input.focus();
    input.value='';
    input.setAttribute('placeholder',`Item: ${number} Insert new value...`);
    input.classList.add('focus');
    document.querySelector("#addbtn").style.display="none";
    document.querySelector("#editbtn").style.display="block";
    document.getElementById('current').value=number;
}
window.addEventListener('load', function () {
const btn = document.querySelector('.add');
const edit = document.querySelector('.edit');
const ul = document.querySelector('.ul-items');
const input = document.querySelector('.input');
const UlChild = document.querySelectorAll('.li-item');

btn.addEventListener('click',()=>{
    let childUlNum = ul.children.length;
    let input_val = input.value;
    if(!input_val){
        alert('Insert an item!');
        return false;
    }
    ul.innerHTML +=  `<div class="li-item" id="child${childUlNum+1}">
        <div class="li-item-val${childUlNum+1}">${input_val}</div>
        <div class="li-item-manage" >
            <span class="fa fa-check" onclick="CheckedItem(${childUlNum+1});"></span>&nbsp;
            <span class="fa fa-edit" id="editli${childUlNum+1}" onclick="EditItem(${childUlNum+1});"></span>&nbsp;
            <span class="fa fa-remove" onclick="RemoveItem(${childUlNum+1});"></span>&nbsp;
        </div>
    </div>`;
});
edit.addEventListener('click',()=>{
    let current = document.getElementById('current').value;
   const input = document.querySelector(".input");
    input.focus();
    input.classList.remove('focus');
    let input_val2 = input.value;
    if(!input_val2){
        alert('Insert an item!');
        return false;
    }
    document.querySelector(`.li-item-val${current}`).innerHTML = input_val2;
   // console.log(input_val2);
    document.querySelector("#addbtn").style.display="block";
    document.querySelector("#editbtn").style.display="none";
    input.value='';
    input.removeAttribute('placeholder');
});

});