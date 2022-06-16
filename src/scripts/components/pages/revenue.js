import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const viewRevenue = () => {
  clearDom();
  const domString = `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">REVENUE</h5>
  <h5 class="card-title">TOTAL REVENUE</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Total Tips:</li>
  <li class="list-group-item">Total Call in Orders:</li>
  <li class="list-group-item">Total Walk in Orders:</li>
</ul>
<div>
<h5 class="card-title">Payment Types:</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Cash - </li>
  <li class="list-group-item">Credit - </li>
  <li class="list-group-item">Mobile - </li>
</ul>
</div>
</div>
`;
  renderToDom('#card-container', domString);
};
export default viewRevenue;
