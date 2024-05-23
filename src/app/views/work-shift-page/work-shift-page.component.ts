import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountComponent } from 'src/app/shared/components/account/account.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailWorkShiftComponent } from 'src/app/shared/components/detail-work-shift/detail-work-shift.component';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { text } from 'body-parser';
import { style } from '@angular/animations';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-work-shift-page',
  templateUrl: './work-shift-page.component.html',
  styleUrls: ['./work-shift-page.component.scss'],
})
export class WorkShiftPageComponent implements OnInit {

  pdfObj: any;

  products = [
    {
      code: 5,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 6,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 7,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 8,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 9,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 10,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 11,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 12,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 13,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 14,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 15,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 16,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DetailWorkShiftComponent, {

      panelClass: 'custom-modalbox',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  generatePdf() {
    pdfMake!.fonts = {
      THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew-Bold.ttf',
        italics: 'THSarabunNew-Italic.ttf',
        bolditalics: 'THSarabunNew-BoldItalic.ttf'
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      },
    }
   

    const docDefinition: TDocumentDefinitions = {
      content: [
          {
              text: 'Your Company Name',
              fontSize: 18,
              bold: true,
              alignment: 'center',
              margin: [0, 0, 0, 20] // left, top, right, bottom
          },
          {
              text: 'Date: May 16, 2024',
              alignment: 'right',
              margin: [0, 0, 0, 20]
          },
          {
              text: 'Recipient Name',
              margin: [0, 0, 0, 10]
          },
          {
              text: 'Recipient Address Line 1',
              margin: [0, 0, 0, 5]
          },
          {
              text: 'Recipient Address Line 2',
              margin: [0, 0, 0, 15]
          },
          {
              text: 'Dear Recipient Name,',
              margin: [0, 0, 0, 10]
          },
          {
              text: 'แมวเอ๋ยแมวเหมียว รูปร่างประเปรียวเป็นหนักหนา ร้องเรียกเหมียวเหมียวเดี๋ยวก็มา เคล้าแข้งเคล้าขาน่าเอ็นดู รู้จักเอารักเข้าต่อตั้ง ค่ำค่ำซ้ำนั่งระวังหนู ควรนับว่ามันกตัญญู พอดูอย่างไว้ใส่ใจเอย',
              margin: [0, 0, 0, 10]
          },
          {
              text: 'Yours sincerely,',
              margin: [0, 20, 0, 10]
          },
          {
              text: 'Your Name',
              alignment: 'right',
              margin: [0, 0, 45, 10]
          },
          // {
          //     text: 'Your Position',
          //     alignment: 'right',
          //     margin: [0, 0, 40, 10]
          // },
          // {
          //     text: 'Your Contact Information',
          //     alignment: 'right',
          //     margin: [0, 0, 30, 10]
          // }
      ],
      defaultStyle: {
        font: 'THSarabunNew',
          fontSize: 18,
          alignment: 'justify'
      }
  };

    this.pdfObj = pdfMake.createPdf(docDefinition).open();
  }

  dowlodePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
  }


}
