function openModal(card){
  const type = card.getAttribute('data-type');
  const src = card.getAttribute('data-src');
  const lb = document.getElementById('lightbox');
  const wrapper = document.getElementById('mediaWrapper');
  wrapper.innerHTML = '';
  if(type === 'video'){
    const v = document.createElement('video');
    v.controls = true;
    v.src = src;
    wrapper.appendChild(v);
  } else {
    const i = document.createElement('img');
    i.src = src;
    wrapper.appendChild(i);
  }
  lb.classList.add('active');
}
function closeModal(){
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('mediaWrapper').innerHTML='';
}