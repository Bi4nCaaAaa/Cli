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
  isEditing: boolean = false;

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

  loadCliente(){
    this.service.getCliente().subscribe({
       next: data =>this.clientes = data
  }
);

  save(){

    if(this.isEditing){
      this.service.update(this.clienteFormGroup.value).subscribe({
        next: () => {this.loadCliente();this .isEditing = false;this.clienteFormGroup.reset();}

      })
    }
  }

else{
  
}




    this. service.save(this.clienteFormGroup.value).subscribe(
      {
        next: data => this.clientes.push(data)
      }
    );
  }
  delete(cliente: Cliente){
    this.service.delete(cliente).subscribe({
      next: () => this.loadCliente()
    });
  }
}
update(cliente:Cliente){
  this.isEditing
  this.clienteFormGroup.setValue(cliente);
}

