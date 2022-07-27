var url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

const storeArr = url.split("?")[1].split("&");
const parameter = storeArr[0].split("=");
const arr = [];
for (const item of storeArr) {
  const obj = {
    parameter: item.split("=")[0],
    value: item.split("=")[1],
  };
  arr.push(obj);
}
function getUrlParameterValue(url, parameter) {
  //Todo: complete this code
  arr.map((x) => {
    if (x.parameter === parameter) {
      console.log(x.value);
    }
  });
}

getUrlParameterValue(url, "utm_medium");
