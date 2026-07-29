import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from '../shared/types/responseData';
import { BlogItem, Product } from '../shared/types/product';

@Injectable({
  providedIn: 'root' // Đăng ký service ở root level để dùng chung toàn ứng dụng
})
export class BlogService {
  // Inject HttpClient trong Service
  constructor(private http: HttpClient) {}

  // Định nghĩa hàm lấy danh sách Blog
  getBlogs(): Observable<ResponseData<Product[]>> {
    return this.http.get<any>(`https://ninedev-api.vercel.app/blogs`);
  }

  detailBlog(id: string): Observable<ResponseData<Product>> {
    return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
  }

  // Phương thức gửi yêu cầu POST để tạo bài viết / sản phẩm mới
  postBlock(blogItem: BlogItem): Observable<ResponseData<Product>> {
    return this.http.post<any>(`https://ninedev-api.vercel.app/blogs`,blogItem);
  }

  // Phương thức gửi yêu cầu DELETE xóa sản phẩm theo ID
  deleteBlock(id: string): Observable<ResponseData<Product>> {
    return this.http.delete<any>(`https://nine-dev-api.vercel.app/blogs/${id}`);
  }
}