import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../class/user';
import { LocalDate } from '../interface/localDate';


@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  searchText: string;

  private _users: User[];

  name: string;
  family: string;
  itemNum: number;
  birthday: LocalDate;
  editingIndex: number;



  constructor(private modalService: NgbModal, private formBuilder: FormBuilder ) {
    this._users = [
      new User('Ali', 'Delshad', 1),
      new User('Hamid', 'Sadeghi', 1),
      new User('Amir', 'Olfat', 1 ),
      new User('Keyvan', 'Nasr', 1)
    ]

  }



  ngOnInit() {
    // Validation form
     this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      family: ['', Validators.required],
      itemNum: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

 // return controls :  access to form fields
 get f() { return this.registerForm.controls; }



// Rest 
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}





// Function 
  get users(): User[] {
    return this._users;
  }


  delete(index: number) {

    alert("Are you sure you want to delete?");
    this._users.splice(index, 1);

  }

  setEditUser(index: number): void {
    this.editingIndex = index;
    this.name = this._users[index].name;
    this.family = this._users[index].family;
    this.itemNum = this._users[index].itemNum;
    this.birthday = this._users[index].birthday;
  }

  edit(): void {
    // validation form
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    //edit
    this._users[this.editingIndex] = new User(this.name, this.family, this.itemNum, this.birthday);
    this.editingIndex = undefined;
    /*this.name = "";
    this.family = "";
    this.itemNum = 0;
    this.birthday;*/
    this.onReset();
    this.closeModal();

  }

  add(): void {
    // validation form
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // add
    this._users.push(new User(this.name, this.family, this.itemNum, this.birthday));

    /*this.name = "";
    this.family = "";
    this.itemNum = 0 ;
    this.birthday ;*/

    this.onReset();
    this.closeModal();
    
  }


  cancel():void{
    this.onReset();
  }

// Call pop-Over 
  closeResult = '';

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  // close Modal
  private closeModal(): void {
    document.getElementById("closeBtn").click();
  }

 




}
