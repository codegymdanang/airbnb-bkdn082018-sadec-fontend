import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  getUrl() {
    return "url('https://www.google.com/search?q=background+images+%C4%91%E1%BA%B9p&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi66fSkwOzjAhVVJHIKHaaWCuoQ_AUIESgB&biw=1536&bih=763#imgrc=uCnHbIZIcy2LIM:')";
  }
}