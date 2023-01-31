function MostPopularNumber(numbers, length) {
    // Create a dictionary to store the frequency of each number
    let frequency = {};
    for (let i = 0; i < length; i++) {
        if (numbers[i] in frequency) {
            frequency[numbers[i]]++;
        } else {
            frequency[numbers[i]] = 1;
        }
    }

    // Find the number with the highest frequency
    let maxFrequency = 0;
    let maxNumber = 0;
    Object.keys(frequency).forEach(function(key) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
            maxNumber = key;
        } else if (frequency[key] === maxFrequency && key < maxNumber) {
            maxNumber = key;
        }
    });

    return maxNumber;
}



console.log(MostPopularNumber( [22,101,102,101,102,525,88], 7 ))