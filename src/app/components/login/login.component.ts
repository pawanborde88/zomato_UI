import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ZomatoserviceService } from 'src/app/zomatoservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  loginObj: any = {
    "userName": "",
    "password": ""
  }

  constructor(private serviceui: ZomatoserviceService, private router: Router, private msgerv:MessageService) { }

  onLogin() {
    this.serviceui.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('zomatoUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/foodCategory');
        this.msgerv.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      } else {
        alert(res.message);
      }
    })
  }
  loading: boolean = false;

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
