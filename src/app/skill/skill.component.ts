import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { SkillService } from './../services/skill-service.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit {
  @ViewChild('bar') bar: ElementRef;
  @Input() title: string;
  @Input() svg: string;
  @Input() categorie: string;
  @Input() content: number;
  showSvg;
  color;
  private anim;
  private number = 0;
  private svgList = this.skillService.svgList;



  private animateBar(){
    this.anim = setInterval(() => {
      if (this.number <= this.content){
        this.bar.nativeElement.style.width = (this.number + 1) + "%";
        this.number++;
        console.log(this.bar.nativeElement.style.width);
      }else{
        clearInterval(this.anim);
      }
    }, 25);
  }

  constructor(private skillService: SkillService, private domSanitiser: DomSanitizer) {}

   ngOnInit(): void {
     this.showSvg = this.domSanitiser.bypassSecurityTrustHtml(this.svgList[this.svg]);

   }

  ngAfterViewInit(){
    this.animateBar();
    if(this.categorie == 'Développement'){
      this.color = '#518cca';
    }else if(this.categorie == 'Designer'){
      this.color = '#a03aab';
    }else{
      this.color = '#cb871d';
    }
    this.bar.nativeElement.style.backgroundColor = this.color;
  }

}
