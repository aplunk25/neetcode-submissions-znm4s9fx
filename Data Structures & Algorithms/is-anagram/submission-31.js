class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        let CountS = {};
        let CountT = {};

        for(let i = 0; i < s.length; i++){
            CountS[s[i]] = (CountS[s[i]] || 0) + 1;
            CountT[t[i]] = (CountT[t[i]] || 0) + 1;
        }

        for(const key in CountS){
            if(CountS[key] != CountT[key]){
                return false;
            }
        }
        return true;
    }
}
