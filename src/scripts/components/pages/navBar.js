import renderToDom from '../../helpers/utilities/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="navbar-collapse" id="navbarNav">
  <a id="home" href="#">
    <img class="nav-logo" src="" alt="pizza-logo">
  </a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" id="view-orders">View Orders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="create-order">Create An Order</a>
      </li>
      <div class="search-logout">
      <form class="d-flex" id="search">
      <input class="form-control me-2" type="search" id="search-value" placeholder="Search Orders" aria-label="Search">
    </form>
      <div id="logout-button"></div>
    <div>
</nav>
`;

  renderToDom('#navBar', domString);
};

export default navBar;
