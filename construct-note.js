// add whatever parameters you deem necessary
function constructNote(msg, input) {
  const inputFreq = {};
  const msgFreq = {};

  for (let char of input) {
    inputFreq[char] = ++inputFreq[char] || 1;
  }

  for (let char of msg) {
    msgFreq[char] = ++msgFreq[char] || 1;
  }

  for (let char in msgFreq) {
    if (!inputFreq[char]) {
      return false;
    }
    if (msgFreq[char] > inputFreq[char]) {
      return false;
    }
  }
  return true;
}
