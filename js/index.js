const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api/Product",
  timout: 30000,
});
function getShoesData() {
  let promise = http.get("");

  //  thành công .then \\ thất bại .catch
  promise
    .then((res) => {
      console.log(res.data);
      renderShoesData(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
getShoesData();

function renderShoesData(arr) {
  let content = "";

  for (i of arr) {
    let { name, id, price, image, quantity, size } = i;

    content += `
    <div class="col">
      <div class="card">
        <img class="card-img-top" src="${image}" alt="Title" />
        <div class="card-body px-0">
            <p class="card-text  m-0 fw-bold text-uppercase">${name}</p>
            <p class="card-text">Giá: $${price}</p>
        </div>
        <button class="btn bottom-0 start-50 translate-middle-x">Mua</button>
        </div>
    </div>
              `;
  }
  document.getElementById("product").innerHTML = content;
}
