# Angular Concepts

## Dynamic Text
- Dùng để hiển thị dữ liệu từ component trong template.
- Thích hợp cho giá trị đơn giản như chuỗi, số, hoặc biểu thức toán học.
- Cú pháp: `{{ value }}`.
- Không trùng lặp với Property Binding vì chỉ hiển thị nội dung, không gán giá trị cho thuộc tính DOM.

## Property Binding
- Dùng khi cần gán giá trị cho thuộc tính của phần tử HTML hoặc component con.
- Thích hợp cho `disabled`, `value`, `src`, `checked`.
- Cú pháp: `[property]="expression"`.
- Trường hợp này cập nhật property DOM, không phải attribute HTML.

## Attribute Binding
- Dùng khi cần gán attribute HTML rõ ràng hoặc attribute không có property tương ứng.
- Thích hợp cho `aria-*`, `role`, `data-*`.
- Cú pháp: `[attr.name]="expression"`.
- Khác với Property Binding ở chỗ nó thao tác trực tiếp lên attribute.

## Class / Style Binding
- Dùng để bật/tắt class hoặc thay đổi style theo điều kiện.
- Cú pháp: `[class.className]="condition"` và `[style.property]="expression"`.
- Dùng khi muốn điều khiển giao diện dựa trên trạng thái.

## Event Binding
- Dùng để lắng nghe sự kiện DOM hoặc custom event từ component con.
- Cú pháp: `(eventName)="handler()"`.
- Ví dụ: `(click)="doSomething()"`.

## Two-way Binding
- Dùng khi muốn truyền dữ liệu vào và nhận giá trị thay đổi từ input.
- Cú pháp: `[(ngModel)]="value"`.
- Thường dùng với forms và cần import `FormsModule`.

## Component Input / Output
- `@Input()`: nhận dữ liệu từ component cha.
- `@Output()`: phát sự kiện lên component cha bằng `EventEmitter`.
- Dùng để giao tiếp giữa component cha và con mà không trùng lặp với Event Binding nội bộ.

## Pipes
- Dùng để biến đổi dữ liệu ngay trong template trước khi hiển thị.
- Ví dụ built-in: `currency`, `date`, `uppercase`, `json`.
- Cú pháp: `{{ value | pipeName:arg }}`.
- Pipe giúp tách logic hiển thị khỏi component.
- Với custom pipe, tạo class `PipeTransform` và đăng ký trong module hoặc standalone component.

## Directives
- Directive là class mở rộng hành vi hoặc cấu trúc DOM.
- Structural directive: thay đổi cấu trúc DOM, thêm/bớt/thay đổi phần tử.
  - Ví dụ: `*ngIf`, `*ngFor`.
- Attribute directive: thay đổi giao diện hoặc hành vi của phần tử hiện có.
  - Ví dụ: `ngClass`, `ngStyle`, custom directive.
- Giữ nguyên mỗi phần chỉ một ví dụ để tránh trùng lặp.

## Standalone Component và imports
- Với standalone component, cần khai báo `imports` trong decorator `@Component`.
- Dùng khi component này sử dụng component khác, pipes hoặc directives từ các module khác.
- Nếu thiếu import, template sẽ không nhận diện component con hoặc pipe/directive.

## Life Cycle
- Dự án này dùng `HomeComponent` và `ProductItemComponent` để minh họa life cycle.
- Life cycle giúp biết khi nào component được tạo, nhận dữ liệu mới, chạy kiểm tra và bị xóa.
- Các hook được dùng trong code:
  - `constructor()`: khởi tạo component. `HomeComponent` log khi tạo, `DetailComponent` dùng `ActivatedRoute` để đọc tham số `id`.
  - `ngOnInit()`: `HomeComponent` dùng để khởi tạo dữ liệu và gọi API giả lập qua `fetchData()`.
  - `ngDoCheck()`: `HomeComponent` log mỗi lần change detection chạy, phù hợp để debug hoặc tự kiểm tra trạng thái.
  - `ngOnChanges(changes)`: `ProductItemComponent` dùng để phát hiện thay đổi của `@Input() products` và xem giá trị trước/sau.
  - `ngOnDestroy()`: `ProductItemComponent` log khi component con bị gỡ bỏ; dùng để huỷ subscription, clear timer hoặc dọn dẹp tài nguyên.
- Trong dự án này, chưa sử dụng các hook `ngAfterContentInit`, `ngAfterContentChecked`, `ngAfterViewInit`, `ngAfterViewChecked`, nên chỉ nêu các hook đã áp dụng thực tế.

## Khi nào dùng điều nào
- Dùng Dynamic Text để hiển thị nội dung thay đổi.
- Dùng Property Binding để điều khiển trạng thái thuộc tính DOM/component.
- Dùng Attribute Binding để gán attribute đặc biệt.
- Dùng Event Binding để phản hồi tương tác người dùng.
- Dùng Two-way Binding khi cần đồng bộ dữ liệu hai chiều với input.
- Dùng Input/Output để giao tiếp giữa component cha và con.
- Dùng Pipes để chuyển đổi dữ liệu hiển thị.
- Dùng Directives để thay đổi cấu trúc hoặc hành vi DOM.

## Lưu ý
- Template phải tham chiếu đúng tên biến/phương thức trong component.
- Nếu đổi tên method, phải cập nhật cùng trong template.
- Với standalone component, import component con/pipes/directives vào `imports`; với module, thêm vào `declarations`.