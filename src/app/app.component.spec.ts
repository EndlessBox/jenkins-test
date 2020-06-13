import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'test app is running!'
    );
  });

  it('should have Resources h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h2Element = fixture.debugElement.query(By.css('h2'));

    expect(h2Element.nativeElement.textContent).toBe('Resources');

  });

  it ('should containe a single footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const footElem = fixture.debugElement.queryAll(By.css('footer'));

    expect(footElem.length == 1).toBeTruthy()
  })

  it ('should containe at least a content div', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const div = fixture.debugElement.queryAll(By.css('div'))
    let content = div.filter(element => element.nativeElement.className == 'content')
    expect(content.length == 1).toBeTruthy()
  })
});
