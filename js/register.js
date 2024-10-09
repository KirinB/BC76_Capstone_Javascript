document.getElementById("formReg").onsubmit = (e) => {
  e.preventDefault();
  const data = getValueForm();
  if (data) {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: data,
    })
      .then((res) => {
        renderThongBao(res.data.message, "success");
      })
      .catch((err) => {
        renderThongBao(err.response.data.message, "danger");
      });
  }
};

function getValueForm() {
  const arrField = document.querySelectorAll("#formReg input");
  let values = {};
  let flag = true;
  const radioGroups = {};
  for (let field of arrField) {
    let { value, id, type, name } = field;
    if (type === "radio") {
      if (field.checked) {
        if (name === "gender") {
          values[name] = value === "male" ? true : false;
        } else {
          values[name] = value;
        }
      }
      if (!radioGroups[name]) {
        radioGroups[name] = false;
      }
      if (field.checked) {
        radioGroups[name] = true;
      }
    } else {
      if (id !== "passwordConfirm") {
        values[id] = value;
      }
    }
    let theThongBao = field.parentElement.querySelector("span");
    if (!checkEmptyValue(theThongBao, value)) {
      flag = false;
    } else {
      let dataValue = field.getAttribute("data-validation");
      if (dataValue == "email" && !checkEmailValue(theThongBao, value)) {
        flag = false;
      } else if (
        dataValue == "containNoNumber" &&
        !checkContainsNoNumbers(theThongBao, value)
      ) {
        flag = false;
      } else if (
        dataValue == "password" &&
        (!checkPassword(theThongBao, value) ||
          !checkMinMaxValue(theThongBao, value, 6, 12))
      ) {
        flag = false;
      } else if (
        dataValue == "passwordcofirm" &&
        !checkConfirm(theThongBao, value, "password")
      ) {
        flag = false;
      } else if (
        dataValue == "phone" &&
        !checkNumberPhone(theThongBao, value)
      ) {
        flag = false;
      }
    }
  }
  for (let radioGroup in radioGroups) {
    if (!radioGroups[radioGroup]) {
      let theThongBao = document
        .querySelector(`input[name="${radioGroup}"]`)
        .parentElement.querySelector("span");
      theThongBao.innerHTML = "Vui lòng không bỏ trống";
      flag = false;
    }
  }
  return flag ? values : null;
}

function renderThongBao(content, error) {
  //success | danger
  const bgError = error == "success" ? "green" : "red";
  Toastify({
    text: content,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: bgError,
      borderRadius: "8px",
    },
    onClick: function () {},
  }).showToast();
}
