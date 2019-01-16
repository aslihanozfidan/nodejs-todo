class StatusDTO {
	constructor() {
		this.id = null;
		this.name = '';
	}

	getId() {
		return this.id;
	}

	setId(id) {
		this.id = id;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}
}

module.exports = StatusDTO;
