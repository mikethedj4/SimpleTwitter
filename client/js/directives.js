'use strict';

angular.module('nodeTwitter.directives', [])
	.directive('tweetLength', function() {
		return function(scope, element, attrs) {
			var maxLength = attrs.maxLength;
			if(!angular.isNumber(maxLength)) {
				maxLength = scope[maxLength];
			}
			scope.$watch(attrs.tweetLength, function(value) {
				if(value) {
					if(value.length > maxLength) {
						scope[attrs.tweetLength] = value.substr(0, maxLength);
					}
					scope[attrs.tweetLength+'CharsLeft'] = maxLength - value.length;
				}
				else {
					scope[attrs.tweetLength+'CharsLeft'] = maxLength;
				}
			});
			scope[attrs.tweetLength+'CharsLeft'] = maxLength;
		};
	})
;
