import {
  getCashOrders, getCreditOrders, getMobileOrders,
  getInpersonOrders, getPhoneOrders, getTotalRevenue, getTotalTips
} from '../../../api/paymentData';
import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const viewRevenue = async () => {
  clearDom();
  let totalRev = 0;
  await getTotalRevenue().then((res) => {
    totalRev = res;
  });
  let totalTips = 0;
  await getTotalTips().then((res) => {
    totalTips = res;
  });
  let phoneOrders = 0;
  await getPhoneOrders().then((res) => {
    phoneOrders = res;
  });
  let inpersonOrders = 0;
  await getInpersonOrders().then((res) => {
    inpersonOrders = res;
  });
  let cashOrders = 0;
  await getCashOrders().then((res) => {
    cashOrders = res;
  });
  let creditOrders = 0;
  await getCreditOrders().then((res) => {
    creditOrders = res;
  });
  let mobileOrders = 0;
  await getMobileOrders().then((res) => {
    mobileOrders = res;
  });
  const domString = `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">REVENUE</h5>
  <h5 class="card-title" id="total-revenue">TOTAL REVENUE: ${totalRev}</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item" id="total-tip">Total Tips: ${totalTips}</li>
  <li class="list-group-item">Total Call in Orders: ${phoneOrders}</li>
  <li class="list-group-item">Total Walk in Orders: ${inpersonOrders}</li>
</ul>
<div>
<h5 class="card-title">Payment Types:</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Cash - ${cashOrders}</li>
  <li class="list-group-item">Credit - ${creditOrders}</li>
  <li class="list-group-item">Mobile - ${mobileOrders}</li>
</ul>
</div>
</div>
`;
  renderToDom('#card-container', domString);
};
export default viewRevenue;
