/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let sList = [];
    let tList = [];

    if ( s.length != t.length ) {
        return false;
    }

    for (let i = 0;i < s.length;i++) {
        if (!sList[s[i]]) {
            sList[s[i]] = 1;
        }
        else {
            sList[s[i]] += 1;
        }
    }

    for (let i = 0;i < t.length;i++) {
        if (!tList[t[i]]) {
            tList[t[i]] = 1;
        }
        else {
            tList[t[i]] += 1;
        }
    }

    for (let key in sList) {
        if (!tList[key]) {
            return false;
        }

        if (tList[key] && tList[key] != sList[key]) {
            return false;
        }
    }

    return true;
};