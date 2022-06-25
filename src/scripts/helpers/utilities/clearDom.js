const clearDom = () => {
  document.querySelector('#buttons-container').innerHTML = '';
  document.querySelector('#filterBtn-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
};

export default clearDom;
