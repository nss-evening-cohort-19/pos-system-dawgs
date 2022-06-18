import renderToDom from './utilities/renderToDom';

const domBuilder = () => {
  const domString = `
<div id="navBar"></div>
<div id="main-container">
  <div id="filterBtn-container"></div>
  <div id="form-container"></div>
  <div id="card-container"></div>
  <div id="buttons-container"></div>
</div>
`;
  renderToDom('#app', domString);
};
export default domBuilder;
