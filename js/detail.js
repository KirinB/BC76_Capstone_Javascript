//get param url and call api
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  //call api
  fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`)
    .then((res) => res.json())
    .then((data) => {
      const productName = document.getElementById("product_name");
      const reviewName = document.getElementById("review_name");
      productName.innerHTML = data.content.name;
      reviewName.innerHTML = data.content.name;

      const productDescription = document.getElementById("product_description");
      productDescription.innerHTML = data.content.description;

      const productPrice = document.getElementById("product_price");
      productPrice.innerHTML = data.content.price;

      const productImage = document.getElementById("product_image");
      productImage.src = data.content.image;

      const productSize = document.getElementById("product_size");
      const arrSize = data.content.size;
      let result = `<option selected>Select size</option>`;
      for (size of arrSize) {
        result += `<option value="${size}">${size}</option>`;
      }
      productSize.innerHTML = result;

      const relatedList = document.getElementById("related_List");
      let resultRelated = ``;
      const arrRelated = data.content.relatedProducts;
      for (related of arrRelated) {
        const { name, price, image, id } = related;
        resultRelated += `
        <div class="wrapper_shoe">
            <a href="./?id=${id}">
              <div class="shoe_thumbnail">
                <img class="img-fluid" src="${image}" alt="" />
              </div>
              <div class="shoe_content">
                <div class="list_shoe">
                  <div>
                    <img class="img-fluid" src="./../src/1.jpg" alt="" />
                  </div>
                  <div>
                    <img class="img-fluid" src="./../src/2.jpg" alt="" />
                  </div>
                  <div>
                    <img class="img-fluid" src="./../src/3.jpg" alt="" />
                  </div>
                  <div>
                    <img class="img-fluid" src="./../src/1.jpg" alt="" />
                  </div>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <div class="d-flex flex-column">
                    <a href="#" class="text-uppercase">${name}</a>
                    <p>Men shoes, Nike, Jordan</p>
                  </div>
  
                  <div class="shoe_price">
                    <span>£ ${price}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `;
      }
      relatedList.innerHTML = resultRelated;
    })
    .catch((err) => {
      console.log(err);
    });
};
