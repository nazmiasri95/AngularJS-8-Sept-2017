app
	.service('perkataan', function() {

		this.panjang = function(x) {
			return x.length;
		}

		this.tambah = function(x, y) {
			return x.toString() + " - bergabung - " + y.toString();
		}

	})