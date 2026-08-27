class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = {};
        for(const str of strs){
            const sorted = str.split('').sort().join('');

            if(!res[sorted]){
                res[sorted] = [];
            }

            res[sorted].push(str);
        }
        return Object.values(res);
    }
}
