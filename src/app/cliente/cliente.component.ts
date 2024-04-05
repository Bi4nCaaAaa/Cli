import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ClienteService) {
    this.clienteFormGroup = formBuilder.group({
      id:[''],
      nome:[''],
      descricao:['']

    });
  }

  ngOnInit(): void {
   this.service.getCliente().subscribe({
       next: data =>this.clientes = data
   });
  }

  save(){
    this.clientes.push(this.clienteFormGroup.value);
  }
}

