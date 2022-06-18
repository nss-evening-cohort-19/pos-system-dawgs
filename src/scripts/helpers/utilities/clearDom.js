const clearDom = () => {
  document.querySelector('#filterBtn-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#buttons-container').innerHTML = '';
};

export default clearDom;
