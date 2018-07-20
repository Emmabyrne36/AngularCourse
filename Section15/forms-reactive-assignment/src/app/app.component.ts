import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  optionsForSelection = ['Stable', 'Critical', 'Finished'];
  selectedOption: 'Stable';
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
    this.projectForm.get('projectStatus').setValue('Stable');
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
