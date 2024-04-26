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

  cliente: Cliente[] = [];
  formGroupCliente: FormGroup;
  isEditing: boolean = false;



  ngOnInit(): void {
    this.loadCliente();
  }

  loadCliente() {
    this.service.getCliente().subscribe({
      next: data => this.cliente = data
    });

  }


  constructor(private formBuilder: FormBuilder,
    private service: ClienteService
  ) {
    this.formGroupCliente = formBuilder.group({
      id: [''],
      nome: [''],
      descricao: ['']
    });
 }


  save() {
    if (this.formGroupCliente.value) {
      if (this.isEditing) {
        this.service.update(this.formGroupCliente.value).subscribe({
          next: () => {
            this.loadCliente();
            this.isEditing = false;
             this.formGroupCliente.reset();
          }
        })
      }
      else {
        this.service.save(this.formGroupCliente.value).subscribe({
          next: data => {
            this.cliente.push(data);
            this.formGroupCliente.reset();
          }
        });
      }

    }
  }

  delete(cliente: any) {
    this.service.delete(cliente).subscribe({
      next: () => this.loadCliente()
    });
  }

  edit(cliente: Cliente) {
    this.formGroupCliente.setValue(cliente);
    this.isEditing = true;
  }

  get name(): any {
    return this.formGroupCliente.get("name");
  }

  get course(): any {
    return this.formGroupCliente.get("course");
  }


  update(cliente: Cliente) {
    this.isEditing = true;
    this.formGroupCliente.setValue(cliente);
  }


  get naame(): any {
    return this.formGroupCliente.get('name');
  }

  get coursee(): any {
    return this.formGroupCliente.get('course');
  }


}
