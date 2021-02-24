const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea')
textarea.focus();


textarea.addEventListener('keyup' , (e) =>{
    createTags(e.target.value)
    if (e.key == 'Enter'){
        setTimeout(()=>{
            e.target.value = '';
        },10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML ='';
    tags.forEach(tag => {
        tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag ;
        tagsEl.appendChild(tagEl);
    });

}
function randomSelect() {
    const times =30;
    const interval = setInterval(()=>{
        const randomTag = pickRndomTag();
        highlightTag(randomTag)
         setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
    },100)
    setTimeout(() =>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRndomTag()
            highlightTag(randomTag);
        },100)
    }, times*100)
}

function pickRndomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}