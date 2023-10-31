import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document/user/document.service';

@Component({
  selector: 'app-dialog-document',
  templateUrl: './dialog-document.component.html',
  styleUrls: ['./dialog-document.component.scss']
})
export class DialogDocumentComponent implements OnInit {

  document_detail?: any;
  num: number;

  text_docType:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private documents: DocumentService) { }

  ngOnInit(): void {

    this.num = this.data.index;
    console.log(this.num)
    this.retrieveUserAlls()
  }

  retrieveUserAlls(): void {
    this.documents.getByID(this.num)
      .subscribe({
        next: (data) => {
          this.document_detail = data;
          console.log(this.document_detail.type_doc)
          if (this.document_detail.type_doc == '0') {
            this.text_docType ='เอกสารการลา'
          }
          if (this.document_detail.type_doc == '1') {
            this.text_docType ='เอกสารรายงาน'
          }
          if (this.document_detail.type_doc == '2') {
            this.text_docType ='เอกสารการแลกเปลี่ยนเวร'
          }
        },
        error: (e) => console.error(e)
      });
  }

}
