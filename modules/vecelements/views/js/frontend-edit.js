/*!
 * V-Elements - Live page builder
 * Copyright 2020-2022 themevec.com
 */

document.addEventListener('DOMContentLoaded', function() {
	$('.elementor').each(function() {
		var uid = (this.className.match(/elementor-(\d+)/) || '')[1];
		if (uid) {
			$(this).addClass('ce-edit-wrapper');
			$('<a class="ce-edit-btn"><i class="ce-icon">').attr({
				href: ceFrontendEdit.editor_url + '&uid=' + uid,
				title: ceFrontendEdit.edit_title,
			}).appendTo(this);
			$('<div class="ce-edit-outline">').appendTo(this);
		}
	});
});