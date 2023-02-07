import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-unique-letter',
  templateUrl: './search-unique-letter.component.html',
  styleUrls: ['./search-unique-letter.component.css'],
})
export class SearchUniqueLetterComponent implements OnInit, DoCheck {
  constructor(private formBuilder: FormBuilder) {}

  answer: string = '';
  form = this.formBuilder.group({
    text: [
      `The Tao gave birth to machine language.  Machine language gave birth
    to the assembler.
    The assembler gave birth to the compiler.  Now there are ten thousand
    languages.
    Each language has its purpose, however humble.  Each language
    expresses the Yin and Yang of software.  Each language has its place within
    the Tao.
    But do not program in COBOL if you can avoid it.
            -- Geoffrey James, "The Tao of Programming"`,
      [Validators.required],
    ],
  });

  getFirstUniqueLetter() {
    const wordsArray = this.form.controls.text.value
      ?.split(/[,"\s\.-]/)
      .filter((w) => w);
    const arrayUniqueFirstLetters: string[] = wordsArray
      ? wordsArray.map((word) => {
          const arrayLetters = word.split('');
          for (let i = 0; i < arrayLetters.length; i += 1) {
            const cutArray = arrayLetters.slice(i + 1);
            if (cutArray.every((el) => arrayLetters[i] !== el)) {
              return arrayLetters[i];
            }
          }
          return '';
        })
      : [];

    for (let i = 0; i <= arrayUniqueFirstLetters.length; i += 1) {
      const cutArray = arrayUniqueFirstLetters.slice(i + 1);
      if (cutArray.every((el) => arrayUniqueFirstLetters[i] !== el)) {
        return arrayUniqueFirstLetters[i];
      }
    }
    return '';
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.answer = this.getFirstUniqueLetter();
  }
}
