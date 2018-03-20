// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendsArray = [
    {
      name: "Tricia",
      photo: "Tricia@example.com",
      scores: [3, 2, 2, 4, 1, 3, 4, 5, 2, 5]
    },
    {
      name: "Tricia2",
      photo: "Tricia2@example.com",
      scores: [2, 4, 5, 1, 2, 3, 5, 4, 2, 1]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;