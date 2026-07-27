import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Đăng ký service ở root level để dùng chung toàn ứng dụng
})
export class BlogService {

  private apiUrl = 'https://ninedev-api.vercel.app/blogs';

  // Inject HttpClient trong Service
  constructor(private http: HttpClient) {}

  // Định nghĩa hàm lấy danh sách Blog
  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}