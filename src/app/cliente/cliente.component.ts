import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  clienteFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clienteFormGroup = formBuilder.group({
      id:[''],
      nome:[''],
      descricao:['']

    });
  }

  save(){
    this.clientes.push(this.clienteFormGroup.value);
  }
}

