import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven-form.component.html',
  styleUrl: './model-driven-form.component.css'
})
export class ModelDrivenFormComponent {

  userName: FormControl = new FormControl();
  password: FormControl = new FormControl();

  signupForm = new FormGroup({
    userName: new FormControl('Dinesh', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  
 
  signup() {
    console.log(this.signupForm.value);
  }





  formGroup: any;
  countries: string[] = ['India', 'Canada', 'USA', 'UK', 'Australia', 'New Zealand', 'France'];
  languages: string[] = ['English', 'French', 'German', 'Hindi', 'Urdu'];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: [''],
      fname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      languages: new FormArray([], [Validators.required]),
      // mobileNumbers: new FormArray([new FormControl(1234567890, Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]))]),
      mobileNumbers: this.formBuilder.array([[1234567890, Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])]]),
      accept: [false, Validators.requiredTrue]
    });

    this.trakFname();
    this.trakAll();

    this.trackFnameStatus();
    this.trackFormStatus();
  }

  // ngOnInit() {
  //   this.formGroup = new FormGroup({
  //     id: new FormControl(''),
  //     fname: new FormControl(''),
  //     lname: new FormControl(''),
  //     email: new FormControl(''),
  //     mobile: new FormControl('1234567890')
  //   })
  // }

  get f() {
    return this.formGroup.controls;
  }

  trakFname() {
    this.formGroup.get('fname')?.valueChanges.subscribe((value: any) => {
      console.log('fname : ', value);
    })
  }

  trakAll() {
    this.formGroup.valueChanges.subscribe((data: any) => {
      console.log('data : ', data);
    })
  }

  trackFnameStatus() {
    this.formGroup.get('fname')?.statusChanges.subscribe((status: any) => {
      console.log('fname status : ', status);
    })
  }

  trackFormStatus() {
    this.formGroup.statusChanges.subscribe((status: FormGroup) => {
      console.log('form status : ', status);
    })
  }

  register() {
    console.log(this.formGroup.value);
    console.log(this.formGroup.valid);

    console.log(this.formGroup.get('fname')?.value);
    console.log(this.formGroup.get('email')?.value);
  }

  fill(all: boolean = true) {
    if (all) {
      this.formGroup.setValue({
        id: 1,
        fname: 'Dinesh',
        lname: 'None',
        email: 'd@gmail.com',
        gender: 'Male',
        country: 'India',
        Languages: ['English', 'Hindi'],
        // mobileNumbers: ['1234567890']
        mobileNumbers: (this.formGroup.get('mobileNumbers') as FormArray).controls.map((item, index, array) => {
          let num: number = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
          item.setValue(num);
          return item.value;
        }),
        accept: true
      });
    } else {
      this.formGroup.patchValue({
        fname: 'Dinesh',
        email: 'd@gmail.com',
      });
    }
  }

  reset(all: boolean = true) {
    if (all) {
      this.formGroup.reset();
    } else {
      this.formGroup.reset({
        fname: this.formGroup.get('fname')?.value
      });
    }
  }

  removeMobileNumber(value: number) {
    this.formGroup.get("mobileNumbers").removeAt(value);
  }

  addMobileNumber() {
    this.formGroup.get("mobileNumbers").push(new FormControl('', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])));
  }

  onChange(e: any) {
    let checkedValue = e.target.value;
    let checked = e.target.checked;

    console.log(checkedValue, checked);

    let checkedArray = this.formGroup.get("languages") as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      let i: number = 0;
      checkedArray.controls.forEach((item) => {
        if (item.value == checkedValue) {
          checkedArray.removeAt(i);
        }
        i++;
      });


      // checkedArray.controls.forEach((item, index) => {
      //   if (item.value == checkedValue) {
      //     checkedArray.removeAt(index);
      //   }
      // });

      //ckeckedArray.removeAt(this.languages.indexOf(checkedValue));
    }
  }
}
