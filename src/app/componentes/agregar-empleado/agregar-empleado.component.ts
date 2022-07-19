import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

	formularioEmpleados:FormGroup;


  constructor(public formulaio:FormBuilder,
	private CrudService:CrudService,
	private ruteador:Router
	) {
	this.formularioEmpleados = this.formulaio.group({
		nombre:[''],
		correo:['']
	});
   }

  ngOnInit(): void {
  }

  enviarDatos():any {
	this.CrudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe(respuesta => {
		this.ruteador.navigateByUrl('/listar-empleado');
	});
}

}
