
window.function = function (filter, category, delimiter) {
  
  filter = filter.value ?? "";
  category = category.value ?? "";
  delimiter = delimiter.value ?? ',';
  
  if(filter.length == 0) {
    return true;
  }

  let filter_arr = filter.split(delimiter).map(item => item.toLowerCase().trim());
  let cat_arr = category.split(delimiter).map(item => item.toLowerCase().trim());
  let res = "";
  
  for (let i = 0; i < filter_arr.length; i++) {
    if(cat_arr.includes(filter_arr[i]) == false) {
        res = false;
        break;
    } else res = true;
  }
    
  return res;

}
