import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Dashboard | New Shipment");
    };


    

    async getHtml() {

        
        return `
        <section class="dashmain-holder">
        <div class="dash-main">
            
            <div class="search-section">
                <div class="search">
                     <input type="text" class="search-input">
                </div>
 
                <div class="btn-space new_shipment">
                    <span class="mdi mdi-plus ic"></span>
                     New Shippment
                </div>
            </div>
 
           
 
            <!-- table section -->
 
           <div class="shipment-form">
             <div class="section-title title2">
                 New Shipment
             </div>
 
             <form action="#" class="flex-form " >
                 <div class="flex-form-slate">
                      <div class="form-tab">
 
                         <div class=" title3 ">
                             Sender Details
                         </div>
                         <!-- sender details -->
                         <div class="form-line">
                             <div class="form-holder pos-rel w49 sr">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
             
                             <div class="form-holder pos-rel w49 sl">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                         </div>
 
                         <!-- single form line -->
                         <div class="form-line">
                             <div class="form-holder pos-rel w49 sr">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
             
                             <div class="form-holder pos-rel w49 sl">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                         </div>
 
                         <!-- single form line -->
                         <div class="form-line">
                             <div class="form-holder pos-rel w79 sr">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
             
                             <div class="form-holder pos-rel w19 sl">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                         </div>
 
                         <!-- single form line -->
                         <div class="form-line">
                             <div class="form-holder pos-rel w100">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                         </div>
 
                          <!-- single form line -->
                          <div class="form-line">
                             <div class="form-holder pos-rel w100">
                                 <div class="custom-input custom-select">
                             
                                     <select class="input-main numm csb" type="text"  pattern="[0-9]">
                                         <option value="0">Nigeria</option>
                                         <option value="1">Canada</option>
                                         <option value="2">London</option>
                                         <option value="3">Cyprus</option>
                                         <option value="4">Sweden</option>
                                         <option value="5">Greece</option>
 
                                     </select>
                                    
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                         </div>
 
                         
 
                         <!-- single form line -->
                         <div class="form-line">
                             <div class="form-holder pos-rel w33 sr">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
 
                             <div class="form-holder pos-rel w33 ">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
 
                             <div class="form-holder pos-rel w33 sl">
                                 <div class="custom-input">
                             
                                     <input class="input-main numm lst-itm" type="text"  pattern="[0-9]">
                                     <div class="placeholder">Enter weight (Kg)</div>
                                 </div>
                             </div>
                             
                         </div>
                         
                         
                 
                         <div class="btn btn-p btn-large mtb-2 formNext">
                             Next
                         </div>
                         <!-- stop -->
                 </div>
 
                 <div class="form-tab">
 
                     <div class="spanto100">
                         <div class=" title3 ">
                             Receiver Details
                         </div>
                         <div class="backk">
                             <span class="mdi mdi-arrow-left"></span>Back
                         </div>
                         
                     </div>
                    
 
                     <!-- sender details -->
                     <div class="form-line">
                         <div class="form-holder pos-rel w49 sr">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
         
                         <div class="form-holder pos-rel w49 sl">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
                     </div>
 
                     <!-- single form line -->
                     <div class="form-line">
                         <div class="form-holder pos-rel w49 sr">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
         
                         <div class="form-holder pos-rel w49 sl">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
                     </div>
 
                     <!-- single form line -->
                     <div class="form-line">
                         <div class="form-holder pos-rel w79 sr">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
         
                         <div class="form-holder pos-rel w19 sl">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
                     </div>
 
                     <!-- single form line -->
                     <div class="form-line">
                         <div class="form-holder pos-rel w100">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
                     </div>
 
                     <!-- single form line -->
                     <div class="form-line">
                         <div class="form-holder pos-rel w33 sr">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
 
                         <div class="form-holder pos-rel w33 ">
                             <div class="custom-input">
                         
                                 <input class="input-main numm" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
 
                         <div class="form-holder pos-rel w33 sl">
                             <div class="custom-input">
                         
                                 <input class="input-main numm lst-itm2" type="text"  pattern="[0-9]">
                                 <div class="placeholder">Enter weight (Kg)</div>
                             </div>
                         </div>
                         
                     </div>
                     
                     
             
                     <div class="span100">
                         <div class="btn btn-p btn-large mtb-2 proceedd">
                             Next
                         </div>
                     </div>
                     <!-- stop -->
             </div>
 
 
 
             <div class="form-tab">
 
                 <div class="spanto100">
                     <div class=" title3 ">
                         Shipment Summary
                     </div>
                     <div class="backk2">
                         <span class="mdi mdi-arrow-left"></span>Back
                     </div>
                     
                 </div>
                
 
 
                 <div class="shipment-summary">
                     <div class="item-desc">
                         <h3 class="titleSmall">Item Description</h3>
                         <p class="norm-value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse blanditiis iure eum! Exercitationem, quae beatae quos dolor doloribus quaerat fugiat molestias ex inventore vero, repellat saepe repellendus soluta non, debitis rerum vel similique? Eaque vero ullam quos sed dolore. Quo.</p>
                     </div>
 
                     <div class="params">
                         <div class="item-value b-right">
                             <div class="titleSmall">
                                 Item(s) value
                             </div>
                             <div class="big-bold-text">
                                 $14,500
                             </div>
                         </div>
 
                         <div class="item-value b-right">
                             <div class="titleSmall">
                                 Item(s) value
                             </div>
                             <div class="big-bold-text">
                                 13.7 kg
                             </div>
                         </div>
 
                         <div class="item-value">
                             <div class="titleSmall">
                                 Item(s) value
                             </div>
                             <div class="big-bold-text color1">
                                 $2,500
                             </div>
                         </div>
 
                     </div>
 
                     <div class="param-values">
                         <div class="param-sec-a">
 
                             <!-- item starts here -->
                             <div class="param-item">
                                 <div class="titleSmall">
                                     Sender name
                                 </div>
                                 <div id="sender_name" class="norm-value">
                                     John Doe
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div  class="titleSmall">
                                     Sender Phone
                                 </div>
                                 <div id="sender_phone" class="norm-value">
                                     +234 81224 2424
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Sender email
                                 </div>
                                 <div id="sender_email" class="norm-value mail-color">
                                     jbg4k.connect@gmail.com
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup Address
                                 </div>
                                 <div id="pickup_address" class="norm-value">
                                     26 Broad Street, Ikoyi
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup city
                                 </div>
                                 <div id="pickup_city" class="norm-value">
                                     26 Broad Street, Ikoyi
                                     
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup country
                                 </div>
                                 <div id="pickup_country" class="norm-value">
                                     Nigeria
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup ZIP
                                 </div>
                                 <div id="pickup_ZIP" class="norm-value">
                                     12234
                                 </div>
                             </div>
                             <!-- item ends here -->
                         </div>
 
                         <div class="param-sec-b">
                             <div class="shapee">
                                 <span class="mdi mdi-arrow-right shp-md">
 
                                 </span>
                             </div>
                         </div>
 
                         <div class="param-sec-c">
 
                                                         <!-- item starts here -->
                             <div class="param-item">
                                 <div class="titleSmall">
                                     Sender name
                                 </div>
                                 <div id="sender_name" class="norm-value">
                                     John Doe
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div  class="titleSmall">
                                     Sender Phone
                                 </div>
                                 <div id="sender_phone" class="norm-value">
                                     +234 81224 2424
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Sender email
                                 </div>
                                 <div id="sender_email" class="norm-value mail-color">
                                     jbg4k.connect@gmail.com
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup Address
                                 </div>
                                 <div id="pickup_address" class="norm-value">
                                     26 Broad Street, Ikoyi
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup city
                                 </div>
                                 <div id="pickup_city" class="norm-value">
                                     Lagos
                                     
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup country
                                 </div>
                                 <div id="pickup_country" class="norm-value">
                                     Nigeria
                                 </div>
                             </div>
                             <!-- item ends here -->
 
                              <!-- item starts here -->
                              <div class="param-item">
                                 <div class="titleSmall">
                                     Pickup ZIP
                                 </div>
                                 <div id="pickup_ZIP" class="norm-value">
                                     12234
                                 </div>
                             </div>
                             <!-- item ends here -->
                         </div>
                     </div>
                 </div>
         
                 <div class="span100">
                     <div class="btn btn-p btn-large mtb-2">
                         Proceed
                     </div>
                 </div>
                 <!-- stop -->
         </div>
 
 
 
         <!-- fghkhfkjjk -->
                 </div>
                
                 
 
             </form>
           </div>
        </div>
    </section>

   
        
    
        `;
    }
} 