/* ==========================================================
 * sco.ajax.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2012 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true */
/*global define:true, Spinner:true */

(function(factory) {
	"use strict";

    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery'
			,'../spin.js'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function($) {
	"use strict";

	$(document).on('click.scoajax', '[data-trigger="ajax"]', function(e) {
		var $this = $(this)
			,data = $this.data()
			;
		if (typeof data['target'] != 'undefined') {
			var spinner = new Spinner({color: '#3d9bce'}).spin(data['target']);
			$(data['target']).load($this.attr('href'), function() {
				spinner.stop();
			});
			return false;
		}
	});
}));
