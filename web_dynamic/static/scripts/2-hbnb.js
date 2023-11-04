document.ready(function () {
	const amen = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amen[this.dataset.name] = this.dataset.id;
		} else {
			delete amen[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amen).sort().join(", "));
	});

        $.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
