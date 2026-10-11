
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    const charIndex = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charIndex.has(char) && charIndex.get(char) >= left) {
            left = charIndex.get(char) + 1;
        }

        charIndex.set(char, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};