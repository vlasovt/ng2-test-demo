import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('Component: User', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should create the app', ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should use the username from user service', ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

   it('should display the username if the user is logged in', ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(app.user.name);
  });

   it('should not display the username if the user is not logged in', ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).not.toContain(app.user.name);
  });

   it('should display data successfully', async( ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app.data).toBe('Data');
    });
  }));

   it('should display data successfully with fake async', fakeAsync( ()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));
});
