
// Function to compare users' survey results, return most similar user.
const compare = function (tableData) {
    let newestFriend = tableData[tableData.length - 1];
    let scores1 = newestFriend.scores;
    let differenceArray = [];
    for (let i = 0; i < tableData.length - 1; i++) {
        let scores2 = tableData[i].scores;
        let sum = 0;
        for (let j = 0; j < newestFriend.scores.length; j++) {
            sum += Math.abs(scores1[j] - scores2[j]);
        } differenceArray.push(sum);
    } let min = Math.min(...differenceArray);
    let match = differenceArray.indexOf(min);
    return tableData[match];
};

module.exports.compare = compare;