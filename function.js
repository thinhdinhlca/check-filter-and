
window.function = function (filter, category, delimiter) {
  
  filter = filter.value ?? "";
  category = category.value ?? "";
  delimiter = delimiter.value ?? ',';

  let filter_arr = filter.value.split(delimiter);
  let cat_arr = category.value.split(delimiter);
  let res = "";
  
  for (let i = 0; i < filter_arr.length; i++) {
    if(cat_arr.includes(filter_arr[i]) == false) {
        res = false;
        break;
    } else res = true;
  }
    
  return res;

}
