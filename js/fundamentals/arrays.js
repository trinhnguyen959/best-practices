'use strict';
const friends = ['Micheal', 'Steven', 'Peter'];

/** push: thêm phần tử vào cuối array
 * params: phần tử cần thêm, nếu là mảng thì insert cả "[]"
 * return: length mới của mảng
 */
friends.push('John');

/** unshift: thêm phần tử vào đầu array
 * params: phần tử cần thêm, nếu là mảng thì insert cả "[]"
 * return: length mới của mảng
 */
friends.unshift('Jane');
friends;

/** shift: xoá phần tử ở cuối
 * params
 * return: phần tử đã xoá, array null thì ko modified và trả undefined
 */
friends.pop();
friends;

/** shift: xoá phần tử ở đầu
 * params
 * return: phần tử đã xoá, array null thì ko modified và trả undefined
 */
friends.shift();
friends;

/** index of: check index của phần tử trong mảng
 * params 1: phần tử cần check
 * params 2: index bắt đầu, mặc định là 0
 * return: 0, ko có là -1
 */
friends.indexOf('Micheal');

/** includes: check xem phần tử có tồn tại trong array
 * params 1: phần tử cần check
 * params 2: index bắt đầu, mặc định là 0
 * return: boolean
 */
friends.includes('Micheal');

/** splice: xoá vị trí trong array tuỳ chỉnh
 * params 1: vị trí index bắt đầu xoá
 * params 2: số lượng phần tử cần xoá
 * return: 1 array mới gồm các phần từ đã xoá khỏi mảng cũ, params trống thì trả về []
 */
friends.splice();
friends;

/** slice: copy array sang 1 array mới
 * params 1: vị trí index bắt đầu, mặc mặc định là 0
 * params 2: vị trí index kết thúc, mặc mặc định là đến cuối
 * return: 1 array mới đã được copy từ cái cũ
 */
friends.push('John', 'Daisy', 'Jonathan', 'King');
friends.slice(1, friends.length - 1);

/** join: nối các phần tử trong array
 * params: chuỗi string ngăn cách, mặc định là ","
 * return: 1 string mới
 */
const joinString = friends.join();
const join2String = friends.join('-');

/** values: tạo 1 array iterator
 * params:
 * return: tạo 1 array iterator mới
 */
const iteratorArray = friends.values();
iteratorArray.next();
iteratorArray.next();

/** concat: nối 1 hay nhiều mảng
 * params: 1  hoặc nhiều phần tử, 1 hoặc nhiều mảng
 * return: 1 array mới mà không modified array cũ
 */
const concatArray = friends.concat('Ali', 'Parker');

/** copyWithin: copy 1 phần của mảng sang chỗ khác trong mảng mà ko làm thay đổi độ dài
 * params 1: index target cần copy
 * params 2: index start để copy, nếu là âm thì tính từ cuối
 * params 3: index end để copy, mặc định là arr.length
 * return: modified array cũ mà không làm thay đổi độ dài
 */
friends;
friends.copyWithin(1, 6);
