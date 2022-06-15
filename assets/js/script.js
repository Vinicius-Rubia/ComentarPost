const Inputname = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario')
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap';
    p.innerHTML = `<strong>${Inputname.value}:</strong> &nbsp ${textComment.value}`;
    commentPost.appendChild(p);
    Inputname.value = '';
    textComment.value = '';
    
    Inputname.focus();
});