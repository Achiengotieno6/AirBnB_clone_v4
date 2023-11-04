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
});
