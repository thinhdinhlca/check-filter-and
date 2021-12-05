
window.function = function (data, sort_keys, delimiter, final_delimiter) {
  if (data.value === undefined) return undefined;
  if (sort_keys.value === undefined) return undefined;
  
  delimiter = delimiter.value ?? ',';
  final_delimiter = final_delimiter.value ?? "\n";

  var data_arr = data.value.split(delimiter);
  var keys_arr = sort_keys.value.split(delimiter);
  var obj = {};
  for (i=0; i<data_arr.length; i++) {
    obj[data_arr[i]] = keys_arr[i];
  }

  var sorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});

  var joined = sorted.join(final_delimiter);

  return joined;

}
