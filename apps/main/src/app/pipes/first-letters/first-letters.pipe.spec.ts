import { Component, DebugElement } from '@angular/core';
import { FirstLettersPipe } from './first-letters.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  selector: 'df-joke-first-letters',
  standalone: true,
  template: `
    <ng-container>{{ 'some joke' | firstLetters }}</ng-container>
  `,
  styles: [],
  imports: [FirstLettersPipe],
})
export class MockComponent {
 
}

describe('FirstLettersPipe', () => {

  let fixture: ComponentFixture<MockComponent>;
  let componentDebugElm: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockComponent],
    });

    fixture = TestBed.createComponent(MockComponent);
    fixture.detectChanges();

    componentDebugElm = fixture.debugElement;
  });

  it('should display joke lettert', () => {
    expect(componentDebugElm.nativeElement.textContent).toBe('s,j');
  });
});
