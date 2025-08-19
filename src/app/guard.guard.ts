import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './data.service';

export const guardGuard: CanActivateFn = (route, state) => {
let dataService=inject(DataService);
let router =inject(Router);
let logined;
dataService.islogined.subscribe((x)=>{
logined=x;
})
if(logined==true){
  return true;
}else{
   router.navigate(['/login']);
  return false;
}



  return true;
};
