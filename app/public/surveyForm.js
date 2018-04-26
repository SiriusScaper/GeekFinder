$('#submitBtn').on('click', function() {
	function validateForm() {
		var isValid = true;
		$('.validate').each(function() {
			if ($(this).val() === '') {
				isValid = false;
			}
		});
		$('.browser-default').each(function() {
			if ($(this).val() === '') {
				isValid = false;
			}
		});
		return isValid;
	}
	if (validateForm() == true) {
		var geekFriend = {
			name: $('#name')
				.val()
				.trim(),
			profilePic: $('#photo')
				.val()
				.trim(),
			scores: [
				$('#q1').val(),
				$('#q2').val(),
				$('#q3').val(),
				$('#q4').val(),
				$('#q5').val(),
				$('#q6').val(),
				$('#q7').val(),
				$('#q8').val(),
				$('#q9').val(),
				$('#q10').val()
			]
		};
		var currentURL = window.location.origin;
		$.post(currentURL + '/api/friends', geekFriend, function(data) {
			$('#matchName').text(data.name);
			$('#matchPic').attr('src', data.profilePic);
		});

		$('.modal').modal();
		$('#name').val('');
		$('#photo').val('');
		$('#q1').val('');
		$('#q2').val('');
		$('#q3').val('');
		$('#q4').val('');
		$('#q5').val('');
		$('#q6').val('');
		$('#q7').val('');
		$('#q8').val('');
		$('#q9').val('');
		$('#q10').val('');
	} else {
		alert('Please fill out ALL fields before submitting survey!');
	}
});
