import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {AdminDoctorUpdateComponent} from "../admin/admin-doctor/admin-doctor-update/admin-doctor-update.component";

@Injectable()
export  class PreventUnsavedGuard implements CanDeactivate<AdminDoctorUpdateComponent> {
  canDeactivate(component: AdminDoctorUpdateComponent) {
    if (component.form.dirty && component.form.invalid) {
      return confirm("are you sure you want to continue,unsaved changes will be lost");
    }
    return true;
  }
}
