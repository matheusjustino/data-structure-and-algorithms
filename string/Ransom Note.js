/** https://leetcode.com/problems/ransom-note/description/ */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomNoteFreq = {};
  const magazineFreq = {};
  ransomNote.split('').forEach((v) => {
      ransomNoteFreq[v] = (ransomNoteFreq[v] || 0) + 1;
  });
  magazine.split('').forEach((v) => {
      magazineFreq[v] = (magazineFreq[v] || 0) + 1;
  });

  for (let [key, value] of Object.entries(ransomNoteFreq)) {
      if ((magazineFreq[key] || 0) < value) {
          return false;
      }
  }

  return true;
};