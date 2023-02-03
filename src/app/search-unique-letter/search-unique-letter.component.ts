import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-unique-letter',
  templateUrl: './search-unique-letter.component.html',
  styleUrls: ['./search-unique-letter.component.css'],
})
export class SearchUniqueLetterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form = this.formBuilder.group({
    text: ['', [Validators.required]],
  });

  ngOnInit(): void {}
}
