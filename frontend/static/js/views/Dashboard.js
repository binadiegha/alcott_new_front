import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <div class="dash-main">
           
        <div class="search-section">
            <div class="search">
                 <input type="text" class="search-input">
            </div>

            <a href="/Dashboard/Newshipment" class="btn-space new_shipment" data-link>
                <span class="mdi mdi-plus ic"></span>
                 New Shippment
            </a>
        </div>

        <!-- cards section -->
        <div class="cards-box">
            <!-- cards box section -->
            <div class="card-box">
                <div class="card-box-content">
                    <div class="card-icon">
                        <span class="mdi mdi-arrow-top-right ico"></span>
                    </div>

                    <div class="card-title">
                        Pending
                    </div>

                    <div class="card-sub">
                     All time total imports
                    </div>

                    <div class="card-number">
                        259
                    </div>
                </div>
            </div>
            <!-- end of card box secton -->

            <!-- cards box section -->
            <div class="card-box">
             <div class="card-box-content">
                 <div class="card-icon">
                     <span class="mdi mdi-arrow-top-right ico"></span>
                 </div>

                 <div class="card-title">
                     Pending
                 </div>

                 <div class="card-sub">
                  All time total imports
                 </div>

                 <div class="card-number">
                     370
                 </div>
             </div>
         </div>
         <!-- end of card box secton -->

         <!-- cards box section -->
         <div class="card-box">
             <div class="card-box-content">
                 <div class="card-icon">
                     <span class="mdi mdi-arrow-top-right ico"></span>
                 </div>

                 <div class="card-title">
                     Pending
                 </div>

                 <div class="card-sub">
                  All time total imports
                 </div>

                 <div class="card-number ">
                     147
                 </div>
             </div>
         </div>
         <!-- end of card box secton -->

         <audio id="sound" >
             <source src="../assets/sound/water.mp3" type="audio/mpeg"></source>
             <source src="../assets/sound/water.mp3" type="audio/mpeg"></source>
         </audio>


         <!-- longcard section -->
         <div class="long-card">
             <div class="long-card-content">
                 <div class="long-data">

                     <div class="lng-crd-left">
                         <div class="lng-crd-left-top">
                             <div class="lng-crd-title mo">
                                 <span class="mdi mdi-wallet ico sr-2 "></span>Web Wallet
                             </div>
                         </div>
                         
                         <div class="lng-crd-left-buttom">
                             <div class="naira-symbol"> <div class="naira">&#8358;</div>Balance</div>

                             <div class="amount-bal">
                                 <div class="naira">
                                     &#8358;
                                 </div>

                                <span class="current_balance">0.00</span> 
                             </div>
                         </div>
                     </div>

                     <div class="lng-crd-right">
                         <div class="small-circ"></div>
                         <div class="tiny-circ"></div>
                     </div>
                 </div>
             </div>
         </div>
        </div>

        <!-- end of card section -->


        <!-- table section -->

        <div class="table-section">
             <div class="table-title-area">
                 <div class="sub-title"> 
                     Recents
                 </div>
             </div>

             <div class="table-a">
                 <table id="d-table">
                     <th >
                         <td class="ini no-display tgrey"><span class="mdi mdi-arrow-top-right"></span></td>
                         <td class="tgrey">S/n</td>
                         <td class="tgrey">Shipping Id</td>
                         <td class="tgrey">Shipping type</td>
                         <td class="tgrey">Pickup</td>
                         <td class="tgrey">Dropoff</td>
                         <td class="tgrey">Status</td>
                         <td class="tgrey">Date</td>
                     </th>

                     <!-- <tr class="ntxt">
                         <td class="ini"><span class="mdi mdi-arrow-top-right"></span></td>
                         <td>#1</td>
                         <td>1523349678495</td>
                         <td>Export</td>
                         <td>Villenile, Canada</td>
                         <td>Lagos, Nigeria</td>
                         <td>Pending</td>
                         <td>12/01/2021</td>
                     </tr> -->
                 </table>
             </div>

        </div>
    </div>



<script>
let formslate = document.querySelector('.flex-form-slate');
let formNext = document.querySelector('.formNext');
let backk = document.querySelector('.backk');
let backk2 = document.querySelector('.backk2');
let proceedd = document.querySelector('.proceedd');
let lastItem = document.querySelector('.lst-itm');
let lastItem2 = document.querySelector('.lst-itm2');

formNext.addEventListener('click', pusher);
backk.addEventListener('click', pusher);
backk2.addEventListener('click', pusher200);
lastItem.addEventListener('keydown', keycheck);
lastItem2.addEventListener('keydown', keycheck2);
proceedd.addEventListener('click', pusher200)

function pusher(){
    formslate.classList.toggle('pushm100');
};

function pusher200(){
    formslate.classList.toggle('pushm200');
}


function keycheck(e){
    // console.log(event.keyCode);
    if (e.keyCode == 9 ){
        pusher();
    }
}
function keycheck2(e){
    // console.log(event.keyCode);
    if (e.keyCode == 9 ){
        pusher200();
    }
}




</script>

        `;
    }

    
}