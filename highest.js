function highest(data, num) {
    final_array = []
    count = 0
    sorted_keys = sort_keys(data)

    while (num > 0) { 
      high_number = highest_num(sorted_keys, count)
      final_array.push(error(data, high_number))
      count++
      num--
    }
    return final_array
}
  
    // sort the keys
    function sort_keys(data){
        keys = Object.keys(data)
        return keys.sort()
    }

    // go through sorted list of keys, find highest key for current loop iteration
    function highest_num(keys, count){
        last_num = keys.length
        subtract = 1 + count
        return keys[last_num - subtract]
    }
  
    // find key[value]. if it's not an object break with an error. if it's an object return an obj with score and id keys.
    function error(data, key) {
        if (typeof data[key] !== 'object') {
            throw 'invalid json format No JSON object could be decoded. THIS IS NOT JSON.'
        } else {
            return { 'score': key, 'id': data[key]['id'] }
        }
    }
  
//   if you input a num larger than the length of the file data, the code will error out 