const parseCode = (str) => {
  let ans = {};
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      ans["firstName"] = str.slice(0, i);
      index = i;
      break;
    }
  }

  let index2 = index;

  for (let i = index; i < str.length; i++) {
    if (('a' <= str[i] && str[i] <= 'z') || ('A' <= str[i] && str[i] <= 'Z')) {
      index2 = i;
		break; 
    }
  }

  let index3 = index2;

  for (let i = index2; i < str.length; i++) {
    if (('a' <= str[i] && str[i] <= 'z') || ('A' <= str[i] && str[i] <= 'Z')) {
      ans["lastName"] = str.slice(index2, i+1);
      index3 = i;
    }  
  }
  let index4 = index3+1;

  for (let i = index3; i < str.length; i++) {
    if (str[i]>='1' && str[i] <= '9'){
		index4 = i; 
		break;
	}
	  
  }
  for (let i = index4; i < str.length; i++) {
    if ('0' <= str[i] && str[i] <= '9') {
      ans["id"] = str.slice(index4, str.length);
    } 
  }

  return ans;
}; 
  
// Example usage:
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
