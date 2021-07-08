import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload.model';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload: FileUpload;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}