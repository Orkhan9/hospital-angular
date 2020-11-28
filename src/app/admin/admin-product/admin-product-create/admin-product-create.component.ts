import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorService} from '../../../service/doctor.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  get _name(){
    return this.form.get('name');
  }

  get _price(){
    return this.form.get('price');
  }

  get _productTypeId(){
    return this.form.get('productTypeId');
  }

  get _productBrandId(){
    return this.form.get('productBrandId');
  }

  get _description(){
    return this.form.get('description');
  }



  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;

  constructor(private productService:ProductService,
              private route:Router,
              private toastr: ToastrService,
              private http:HttpClient,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      price: ['',[Validators.required]],
      productTypeId: ['',[Validators.required]],
      productBrandId: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if(this.file.nativeElement.files.length < 1){
      this.toastr.error('Photo is required,please select photo');
      return;
    }
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Price', this._price.value);
      this.formData.append('ProductTypeId', this._productTypeId.value);
      this.formData.append('ProductBrandId', this._productBrandId.value);
      this.formData.append('Description', this._description.value);
      this.productService.createProduct(this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/product']);
        this.toastr.success('Product is created');
      },error=>this.toastr.error(error));
    }
  }


  fileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
  }
}
