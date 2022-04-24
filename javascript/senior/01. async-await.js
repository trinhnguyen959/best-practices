const handlerRequest = promise =>
	promise.then(data => [undefined, data]).catch(err => [err, undefined]);

let error, result;
[error, result] = await handlerRequest('a');

if (error) {
	console.error('error 1: ', error);
}
