import {Component} from '@angular/core';

@Component({
     template: `<h1>Contact Us</h1>
                              
          <div class="grid-container" id="CoursesTemplate">
               <div id="MyCourse" class="grid-item" >
                    <img  src="./assets/imgs/ismail.png" />
                    <h3>Ismail AIT ALI </h3>
                    <h4>Software Quality MSc. (MQL) Student</h4>

                    <h4>Tel : +212 6 90 35 11 20 </h4>
                    <h4>E-mail : aitali.ismael@gmail.com </h4>
               </div>
               <div id="MyCourse" class="grid-item" >
               <img  src="./assets/imgs/soussi.png" />
                    <h3>Mohamed SOUSSI</h3>
                    <h4>Software Quality MSc. (MQL) Student </h4>
                    <h4>Tel : +212 6 90 35 11 20 </h4>
                    <h4>E-mail : aitali.ismael@gmail.com </h4>
               </div>

          </div>
          `
})
export class ContactComponent {
}