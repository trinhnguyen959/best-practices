function Validator(formSelector) {
	var formRules = {};

	formElement = document.querySelector(formSelector);

	var validationRules = {
		required: value => (value ? undefined : 'Vui lòng nhập trường này'),
		email: value => {
			const regex =
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(value) ? undefined : 'Trường này phải là email';
		},
		min: min => {
			return value =>
				value.length >= min
					? undefined
					: `Vui lòng nhập tối thiểu ${min} kí tự`;
		},
		max: max => {
			return value =>
				value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
		},
	};

	if (formElement) {
		var inputs = formElement.querySelectorAll('[name][rules]');
		for (const input of inputs) {
			var ruleInfo;
			var rules = input.getAttribute('rules').split('|');

			for (var rule of rules) {
				var isIncludeValue = rule.includes(':');
				if (isIncludeValue) {
					ruleInfo = rule.split(':');
					rule = ruleInfo[0];
				}

				var ruleFunc = validationRules[rule];

				if (isIncludeValue) {
					ruleFunc = ruleFunc(ruleInfo[1]);
				}

				if (Array.isArray(formRules[input.name])) {
					formRules[input.name].push(ruleFunc);
				} else {
					formRules[input.name] = [ruleFunc];
				}
			}

			// Lắng nghe sự kiện để validate blur, change
			input.onblur = handleValidate;
			input.oninput = handleClearErrors;
		}

		function handleValidate(e) {
			var erorMessage;
			var rules = formRules[e.target.name];

			for (var rule of rules) {
				erorMessage = rule(e.target.value);
				if (erorMessage) break;
			}

			if (erorMessage) {
				var formGroup = e.target.closest('.form-group');
				if (formGroup) {
					var formMessage = formGroup.querySelector('.form-message');
					formGroup.classList.add('invalid');

					if (formMessage) {
						formMessage.innerText = erorMessage;
					}
				}
			}
			return !erorMessage;
		}

		function handleClearErrors(e) {
			var formGroup = e.target.closest('.form-group');
			if (formGroup.classList.contains('invalid')) {
				formGroup.classList.remove('invalid');

				var formMessage = formGroup.querySelector('.form-message');

				if (formMessage) {
					formMessage.innerText = '';
				}
			}
		}
	}

	formElement.onsubmit = e => {
		e.preventDefault();

		var inputs = formElement.querySelectorAll('[name][rules]');
		var isValid = true;

		for (const input of inputs) {
			if (!handleValidate({ target: input })) {
				isValid = false;
			}
		}

		// Khi không có lỗi thì submit
		if (isValid) {
			if (typeof this.onSubmit.bind(Validator) === 'function') {
				var enabledInputs = document.querySelectorAll('input[name]');
				var formValues = Array.from(enabledInputs).reduce((values, input) => {
					switch (input.type) {
						case 'radio':
							values[input.name] = formElement.querySelector(
								`input[name="${input.name}"]:checked`
							).value;
							break;
						case 'checkbox':
							if (!input.matches(':checked')) {
								values[input.name] = [];
								return values;
							}
							if (!Array.isArray(values[input.name])) {
								values[input.name] = [];
							}
							values[input.name].push(input.value);
							break;
						case 'file':
							values[input.name] = input.files;
							break;
						default:
							values[input.name] = input.value;
					}
					return values;
				}, {});

				return this.onSubmit.bind(Validator)(formValues);
			}

			formElement.submit();
		}
	};
}
