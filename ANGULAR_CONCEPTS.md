# Angular Concepts

## Dynamic Text
- Dùng khi muốn hiển thị dữ liệu từ component trong template.
- Thích hợp cho các giá trị đơn giản như chuỗi, số, hoặc biểu thức tính toán.
- Sử dụng `{{ }}` để chèn nội dung động.

## Property Binding
- Dùng khi cần gán giá trị cho thuộc tính của phần tử HTML hoặc input của component con.
- Thích hợp cho các thuộc tính như `disabled`, `value`, `src`, `checked`.
- Việc binding sẽ cập nhật property DOM, không phải attribute HTML.

## Attribute Binding
- Dùng khi cần gán attribute HTML rõ ràng hoặc attribute không có property tương ứng.
- Thích hợp cho `aria-*`, `role`, `data-*`.
- Cú pháp: `[attr.name]="..."`.

## innerHTML
- Dùng khi cần chèn HTML theo chuỗi vào template.
- Thích hợp cho nội dung HTML động đã được tin cậy.
- Không dùng nếu dữ liệu không kiểm soát được do nguy cơ XSS.

## Class / Style Binding
- Dùng khi muốn bật/tắt class hoặc thay đổi style dựa trên trạng thái.
- Thích hợp cho UI thay đổi giao diện theo điều kiện.
- Cú pháp: `[class.className]="..."`, `[style.property]="..."`.

## Event Binding
- Dùng để lắng nghe sự kiện DOM hoặc sự kiện custom từ component con.
- Thích hợp cho click, input, submit, hoặc bất kỳ event nào cần phản hồi.
- Cú pháp: `(eventName)="handler()"`.

## Component Input / Output
- `@Input()`: dùng khi component con cần nhận dữ liệu từ component cha.
- `@Output()`: dùng khi component con cần phát sự kiện lên component cha.
- Dùng để tách trách nhiệm UI và logic, giữ cấu trúc component rõ ràng.

## Standalone Component và imports
- Với component standalone, cần khai báo `imports` trong decorator `@Component`.
- Dùng khi component này sử dụng component khác hoặc directive từ các module khác.
- Nếu thiếu import, template sẽ không nhận diện component con.

## Khi nào dùng điều nào
- Dùng Dynamic Text để hiển thị nội dung thay đổi.
- Dùng Property Binding để điều khiển trạng thái thuộc tính của DOM/component.
- Dùng Attribute Binding để gán attribute đặc biệt hoặc khi attribute không thể bind trực tiếp.
- Dùng Event Binding để phản hồi tương tác người dùng.
- Dùng Input/Output để giao tiếp giữa component cha và con.
- Dùng Class/Style Binding để thay đổi giao diện theo điều kiện.

## Lưu ý
- Template phải tham chiếu đúng tên biến/phương thức trong component.
- Nếu đổi tên method, phải cập nhật cùng trong template.
- Với standalone component, import component con vào `imports`; với module, thêm vào `declarations`.