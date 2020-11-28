import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../../../models/product';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.css']
})
export class AdminProductUpdateComponent implements OnInit {

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
  product:IProduct;

  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }

  constructor(private productService:ProductService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private toastr: ToastrService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getProductById();
  }

  formUpdate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      price: ['',[Validators.required]],
      productTypeId: ['',[Validators.required]],
      productBrandId: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  getProductById(){
    this.productService.getProductbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(product=>{
        this.product=product,
          error=>console.log(error)
      })
  }

  onSubmit() {
    if(this.form.valid){
      // @ts-ignore
      this.formData.append('Name', this._name.value);
      this.formData.append('Price', this._price.value);
      this.formData.append('ProductTypeId', this._productTypeId.value);
      this.formData.append('ProductBrandId', this._productBrandId.value);
      this.formData.append('Description', this._description.value);
      this.productService.editProduct(this.product.id,this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/product']);
        this.toastr.success('Product is updated');
      },error=>this.toastr.error(error));
    }
  }

  handleFileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
  }
}
