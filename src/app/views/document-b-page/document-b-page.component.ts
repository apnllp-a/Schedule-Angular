import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogDocumentComponent } from 'src/app/shared/components/dialog-document/dialog-document.component';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { notifiCations } from 'src/app/models/document/document.model';
import { DocumentService } from 'src/app/services/document/user/document.service';
import { da } from 'date-fns/locale';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-document-b-page',
  templateUrl: './document-b-page.component.html',
  styleUrls: ['./document-b-page.component.scss']
})
export class DocumentBPageComponent implements OnInit {
  selected = 'option2';
 
  document:notifiCations[];

  notifi_!: notifiCations[]; 
  id_noti!:string;

  constructor( public dialog: MatDialog,private documents:DocumentService) { }

  ngOnInit(): void {
    this.retrieveNotifications()
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogDocumentComponent, {
      panelClass: 'custom-modalbox',
      enterAnimationDuration: '12000ms',
      exitAnimationDuration: '2000ms',
      data: {
        index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  counter(i: number) {
    return new Array(i);
}

retrieveNotifications(): void {
  this.documents.getAll()
    .subscribe({
      next: (data) => {
          
                this.document = data;
                console.log(data)
      },
      error: (e) => console.error(e)
    });
}


// createPdf() {
//   pdfMakeConfig.fonts = {
//     THSarabunNew: {
//       normal: 'THSarabunNew.ttf',
//       bold: 'THSarabunNew Bold.ttf',
//       italics: 'THSarabunNew Italic.ttf',
//       bolditalics: 'THSarabunNew BoldItalic.ttf'
//       },
//     Roboto: {
//       normal: 'Roboto-Regular.ttf',
//       bold: 'Roboto-Medium.ttf',
//       italics: 'Roboto-Italic.ttf',
//       bolditalics: 'Roboto-MediumItalic.ttf'
//     },
    

//   }

//   var docDefinition = {
//     watermark: { text: 'TEST watermark', fontSize: 20 },

//     content: [
//       // {
//       //   image: 'strawberries'
//       // },
//       { text: this.getBynotifiCationsget.type_doc, style: 'logo' },
//       // { text: this.getBynotifiCationsget.type_doc, style: 'header' },
//       { text: this.getBynotifiCationsget.updatedAt, alignment: 'right' },

//       { text: 'From' + ' ' + 'กรานต์', style: 'subheader' },


//       { text: this.getBynotifiCationsget.desc, style: 'story', margin: [0, 20, 0, 20] },


//       { text: 'Apinan', style: 'subheadero' },
//       // {
//       //   ul: [
//       //     'Bacon',
//       //     'Rips',
//       //     'BBQ',
//       //   ]
//       // }
//     ],
//     defaultStyle: {
//       font: 'THSarabunNew'
//     },
//     styles: {
//       logo: {
//         fontSize: 18,
//         bold: true,
//         alignment: 'center'
//       },
//       // header: {
//       //   fontSize: 18,
//       //   bold: true,
//       // },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 15, 0, 0]
//       },

//       subheadero: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 15, 0, 0],
//         alignment: 'right'
//       },
//       story: {
//         italic: true,
//         alignment: 'justify',
//         width: '100%',

//       }
//     },

//     // images: {
//     //   strawberries: {
//     //     url: '',
//     //     headers: {
//     //       myheader: '123',
//     //       myotherheader: 'abc',
//     //     }
//     //   }
//     // }
//   }
  
//   this.pdfObj = pdfMake.createPdf(docDefinition);
//   this.downloadPdf()
// }

// downloadPdf() {
//   if (this.plt.is('cordova')) {
//     this.pdfObj.getBuffer((buffer) => {
//       var blob = new Blob([buffer], { type: 'application/pdf' });

//       // Save the PDF to the data Directory of our App
//       this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
//         // Open the PDf with the correct OS tools
//         this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
//       })
//     });
//   } else {
//     // On a browser simply use download!
//     this.pdfObj.download();
//   }
// }
}
