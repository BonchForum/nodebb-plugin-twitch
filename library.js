(function(module) {
	"use strict";
	var Twitch = {},
		embed = '<iframe src="http://player.twitch.tv/?channel=$1" frameborder="0" scrolling="no" height="378" width="620"></iframe>',

	var	regularUrl = /(https:\/\/www\.twitch\.tv\/)(\w+)/g;

	Twitch.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}

		if (data.postData.content.match(regularUrl)) {
      /*var twitchUrls = data.postData.content.match(regularUrl);
      var twitchChanels = twitchUrls.forEach(function(url) {
        return url.substr('https://www.twitch.tv/'.length);
      });*/
			
      data.postData.content = data.postData.content.replace(regularUrl, embed));
		}		

		callback(null, data);
	};

	module.exports = Twitch;
}(module));