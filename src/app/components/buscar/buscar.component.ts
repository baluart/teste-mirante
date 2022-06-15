import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';


@Component({
  selector: 'app-buscar',
  templateUrl:'./buscar.component.html',
  styleUrls:['./buscar.component.css']
    
})
export class BuscarComponent implements OnInit {

  creds: Credenciais={
    cpf:''
  }

  cpf= new FormControl(null,[Validators.minLength(11)]);

  constructor(private toast: ToastrService, private router: Router  ) { }

  ngOnInit(): void {
  }

  logar(): boolean{
    if(this.cpf.valid){
      return true;
    }else{
      return false;
    }
  }
    
  validaCampos(){
    if(this.cpf.valid ){
      this.toast.success('CPF valido', 'Consulta CPF')
      this.router.navigate(['buscar/infor'])
      
    }else{
      this.toast.error('CPF invalido', 'Consulta CPF')
    }
  }

}
