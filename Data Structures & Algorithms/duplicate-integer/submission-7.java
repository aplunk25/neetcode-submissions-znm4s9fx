

class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> numCount = new HashSet<Integer>();

        for(int i = 0; i < nums.length; i++){
            if(numCount.contains(nums[i]))
                return true; 
            numCount.add(nums[i]);
        }
        return false; 
    }
}