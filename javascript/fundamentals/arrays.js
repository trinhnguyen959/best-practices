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
 * params 3: ...args, các phần tử cần thêm vào vị trí xoá
 * return: 1 array mới gồm các phần từ đã xoá khỏi mảng cũ, params trống thì trả về []
 */
friends.splice(0, 2, 'Andrea', 'Angelo', 'Jack');
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

/** entries: tạo 1 array iterator
 * params:
 * return: tạo 1 array iterator mới bao gồm mỗi phần tử là key = index, value = value
 */
friends;
const friendsEntries = friends.entries();
friendsEntries.next().value;

/** values: tạo 1 array iterator
 * params:
 * return: tạo 1 array iterator mới với values là keys
 */
const friendsKeys = friends.keys();
friendsKeys.next();
friendsKeys.next();

/** values: tạo 1 array iterator
 * params:
 * return: tạo 1 array iterator mới
 */
const friendsValues = friends.values();
friendsValues.next();
friendsValues.next();


/** concat: nối 1 hay nhiều mảng
 * params: 1  hoặc nhiều phần tử, 1 hoặc nhiều mảng
 * return: 1 array mới mà không modified array cũ
 */
const concatArray = friends.concat('Ali', 'Parker');

/** copyWithin: copy 1 phần của mảng sang chỗ khác trong mảng mà ko làm thay đổi độ dài
 * params 1: index target cần copy
 * params 2: index start để copy, nếu là âm thì tính từ cuối -> kiểu như là move nguyên mảng lên
 * params 3: index end để copy, mặc định là arr.length
 * return: modified array cũ mà không làm thay đổi độ dài
 */
friends;
friends.copyWithin(1, 3);

/** flat: làm phẳng array chứa array con
 * params: number -> độ sâu muốn flat
 * return: 1 array mới đã được làm phẳng
 */
const arrayWithChild = [[[[[[2, 2, 3, 4, 5, 6, 7, 8]]]]]];
const flatArray = arrayWithChild.flat(6);

/** flatMap: làm phẳng array và map
 * params 1: callbackFn có 3 args
 * 	args 1: giá trị của element trong mảng
 * 	args 2: index của element trong mảng -> callbackFn trả ra - optional
 * 	args 3: array được map -> callbackFn trả ra - optional
 * params 2: arguments được truyền vào function
 * return: 1 array mới đã được làm phẳng và map
 */
const flatMapArr = flatArray.flatMap(el => el * 2);

/** reverse: đảo ngươc array
 * params: 
 * return: array cũ bị đảo ngược
 */
friends.reverse();

/** flatMap: làm phẳng array và map
 * params 1: callbackFn có 3 args
 * 	args 1: giá trị của element trong mảng
 * 	args 2: index của element trong mảng -> callbackFn trả ra - optional
 * 	args 3: array được find -> callbackFn trả ra - optional
 * params 2: arguments được truyền vào function
 * return: index đầu tiên của element trong mảng, ko tìm thấy là -1
 */
friends;
const firstIndex = friends.findIndex(el => el === 'King');