import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {AdminDepartmentUpdateComponent} from '../admin/admin-department/admin-department-update/admin-department-update.component';
import {AdminDoctorUpdateComponent} from '../admin/admin-doctor/admin-doctor-update/admin-doctor-update.component';
import {AdminServiceUpdateComponent} from '../admin/admin-service/admin-service-update/admin-service-update.component';

@Injectable()
export  class PreventUnsavedGuardDepartment implements CanDeactivate<AdminDepartmentUpdateComponent> {
  canDeactivate(component: AdminDepartmentUpdateComponent) {
    if (component.form.dirty && component.form.invalid) {
      return confirm("are you sure you want to continue,unsaved changes will be lost");
    }
    return true;
  }

}

export  class PreventUnsavedGuardDoctor implements CanDeactivate<AdminDoctorUpdateComponent> {
  canDeactivate(component: AdminDoctorUpdateComponent) {
    if (component.form.dirty && component.form.invalid) {
      return confirm("are you sure you want to continue,unsaved changes will be lost");
    }
    return true;
  }

}

export  class PreventUnsavedGuardService implements CanDeactivate<AdminServiceUpdateComponent> {
  canDeactivate(component: AdminServiceUpdateComponent) {
    if (component.form.dirty && component.form.invalid) {
      return confirm("are you sure you want to continue,unsaved changes will be lost");
    }
    return true;
  }

}



