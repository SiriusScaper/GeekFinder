//=================
//    Load Data  //
//=================

const friends = require('../data/friends');

//=================
//    Routing    //
//=================

module.exports = app => {
	app.get('./data/friends', (req, res) => {
		res.json(geeks);
	});

	app.post('./data/friends', (req, res) => {
		const geekScores = req.body.scores;
		const newFriendScores = req.body.scores;
		const scoresArray = [];
		const friendCount = 0;
		const bestMatch = 0;

		//runs through all current friends in list
		for (var i = 0; i < geeks.length; i++) {
			var scoresDiff = 0;
			//run through scores to compare friends
			for (var j = 0; j < newFriendScores.length; j++) {
				scoresDiff += Math.abs(
					parseInt(geeks[i].scores[j]) - parseInt(newFriendScores[j])
				);
			}

			//push results into scoresArray
			scoresArray.push(scoresDiff);
		}

		//after all friends are compared, find best match
		for (var i = 0; i < scoresArray.length; i++) {
			if (scoresArray[i] <= scoresArray[bestMatch]) {
				bestMatch = i;
			}
		}

		//return bestMatch data
		const gFriend = friendList[bestMatch];
		res.json(gFriend);

		//pushes new submission into the friendsList array
		geeks.push(req.body);
	});
};
