(function(module) {
		"use strict";
		var Twitch = {},
			embed = '<iframe src="http://player.twitch.tv/?channel=$1" frameborder="0" scrolling="no" height="378" width="620"></iframe>';

		var regularUrl = /<a href="https:\/\/www\.twitch\.tv\/(\w*)(.*)<\/a>/g;

		Twitch.parse = function(data, callback) {
			if (!data || !data.postData || !data.postData.content) {
				return callback(null, data);
			}

			console.log(data.postData.content);

			if (data.postData.content.match(regularUrl)) {
				data.postData.content = data.postData.content.replace(regularUrl, embed);
		}

		callback(null, data);
	};

	module.exports = Twitch;
}(module));