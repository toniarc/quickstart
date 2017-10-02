import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageHeaderService } from '../adminlte-components/page-header/page-header.service';
import { PageHeaderDto } from '../adminlte-components/page-header/pageheader.dto';
import { Pessoa } from './pessoa';

import { HttpUtilService } from '../../interage/util/httputil.service';

@Component({
  selector: 'pessoa-form',
  templateUrl: './pessoa.form.component.html'
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  editing: boolean = false;

  constructor(pgService: PageHeaderService, private httpUtil: HttpUtilService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  isEditing(){
    return this.editing;
  }

  onSubmit() {
    if(this.isEditing()){
      this.update();
      return;
    } 
    this.insert();
  }

  insert(){
    this.httpUtil
      .post('/pessoa/insert', this.pessoa)
      .subscribe(result => {
          this.router.navigate(['/main/pessoa-list']);
        }, (error: Response) => {
          console.log(error);
        }
      );
  }

  update(){
    this.httpUtil
      .post('/pessoa/update', this.pessoa)
      .subscribe(result => {
          this.router.navigate(['/main/pessoa-list']);
        }, (error: Response) => {
          console.log(error);
        }
      );
  }

  load(){
    let id = +this.activatedRoute.snapshot.params['id'];
    
    if(id != null && !Number.isNaN(id)){
      this.editing = true;

      this.httpUtil.get('/pessoa/load/'+ id).subscribe(result => {
        this.pessoa = result.json();
      }, error => {
        console.log(error);
      });
    }
  }

  ngOnInit() {
    this.load();
  }

}