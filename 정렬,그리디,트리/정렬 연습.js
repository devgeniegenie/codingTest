const input = [9, 1, 6, 8, 4, 3, 2, 0]

const bubble = (nums) => {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 0; j < nums.length - 1 - i; j++){
            if(nums[j] > nums[j+1]) [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
        }
        console.log(`${i+1}회전 : ${nums}`)
    }
    return nums
}

const insertSort = (nums) => {
    for(let i = 1; i < nums.length; i++){
        for(let j = i; j > 0; j--){
            if(nums[j-1] > nums[j]) [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
        }
    }
    return nums
}

const selectionSort = (nums) => {
    for(let i = 0 ; i < nums.length - 1; i++){
        let index = i
        for(let j = i + 1; j < nums.length; j++){
            if(nums[index] > nums[j]) index = j
        }
        [nums[i], nums[index]] = [nums[index], nums[i]]
    }
    return nums
}
