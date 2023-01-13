function threeSum(nums, target) {
  nums.sort((a,b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;
