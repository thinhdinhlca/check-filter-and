
window.function = function (filter, category, delimiter) {
  
  filter = filter.value ?? "";
  category = category.value ?? "";
  delimiter = delimiter.value ?? ',';

  let filter_arr = filter.value.split(delimiter);
  let cat_arr = category.value.split(delimiter);
  
  const isInCategory = (filter) => {
    for (let i = 0; i < cat_arr.length; i++) {
      if (filter == cat_arr[i]) {
        return true;
        break;
      } else return false;
    }
  
  let res = filter_arr.every(isInCategory);
    
  return res;

}
