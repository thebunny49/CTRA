// import React from 'react'
import '../styles/Section9.css'
import P1 from '../assets/logo/pho1.svg'
// import P2 from '../assets/logo/pho2.svg'
import P3 from '../assets/logo/pho3.svg'
import P4 from '../assets/logo/pho4.svg'
import P5 from '../assets/logo/pho5.svg'
import P6 from '../assets/logo/pho6.svg'
import P7 from '../assets/logo/pho7.svg'
import P8 from '../assets/logo/pho8.svg'
import P9 from '../assets/logo/pho9.svg'
import P10 from '../assets/logo/pho10.svg'
import P11 from '../assets/logo/pho11.svg'
// import P12 from '../assets/logo/pho12.svg'
// import contact from '../assets/contact.png'
import PopupX from "../pages/PopupX"


const Section9 = () => {
  return (
    <>
      <div className="query">
         <PopupX/>
        {/* <div className="container querymain">

          <div className="queryleft">


          </div>
          <div className="queryright">
            <div className="contact">
              <h4>Are you looking for ---------?</h4>
              <p>Tell Us About Your Project</p>
              <br />

              <div className="form__group field">

                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Name</label>

              </div>
              <div className="form__group field">

                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Email</label>

              </div>
              <div className="form__group field">

                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Mobile Number</label>

              </div>
              <div className="form__group field">


                <label for="name" className="form__label">Select Country</label>
                <select className="form-control form__field form_control_select select2country_popup valid" name="country" id="footer_popup_country" aria-label="Country" aria-invalid="false">

                  <option value="Afghanistan" id="AF">Afghanistan</option>
                  <option value="Albania" id="AL">Albania</option>
                  <option value="Algeria" id="DZ">Algeria</option>
                  <option value="American Samoa" id="AS">American Samoa</option>
                  <option value="Andorra" id="AD">Andorra</option>
                  <option value="Angola" id="AO">Angola</option>
                  <option value="Anguilla" id="AI">Anguilla</option>
                  <option value="Antarctica" id="AQ">Antarctica</option>
                  <option value="Antigua and Barbuda" id="AG">Antigua and Barbuda</option>
                  <option value="Argentina" id="AR">Argentina</option>
                  <option value="Armenia" id="AM">Armenia</option>
                  <option value="Aruba" id="AW">Aruba</option>
                  <option value="Australia" id="AU">Australia</option>
                  <option value="Austria" id="AT">Austria</option>
                  <option value="Azerbaijan" id="AZ">Azerbaijan</option>
                  <option value="Bahamas" id="BS">Bahamas</option>
                  <option value="Bahrain" id="BH">Bahrain</option>
                  <option value="Bangladesh" id="BD">Bangladesh</option>
                  <option value="Barbados" id="BB">Barbados</option>
                  <option value="Belarus" id="BY">Belarus</option>
                  <option value="Belgium" id="BE">Belgium</option>
                  <option value="Belize" id="BZ">Belize</option>
                  <option value="Benin" id="BJ">Benin</option>
                  <option value="Bermuda" id="BM">Bermuda</option>
                  <option value="Bhutan" id="BT">Bhutan</option>
                  <option value="Bolivia" id="BO">Bolivia</option>
                  <option value="Bosnia and Herzegovina" id="BA">Bosnia and Herzegovina</option>
                  <option value="Botswana" id="BW">Botswana</option>
                  <option value="Bouvet Island" id="BV">Bouvet Island</option>
                  <option value="Brazil" id="BR">Brazil</option>
                  <option value="British Indian Ocean Territory" id="IO">British Indian Ocean Territory</option>
                  <option value="Brunei Darussalam" id="BN">Brunei Darussalam</option>
                  <option value="Bulgaria" id="BG">Bulgaria</option>
                  <option value="Burkina Faso" id="BF">Burkina Faso</option>
                  <option value="Burundi" id="BI">Burundi</option>
                  <option value="Cambodia" id="KH">Cambodia</option>
                  <option value="Cameroon" id="CM">Cameroon</option>
                  <option value="Canada" id="CA">Canada</option>
                  <option value="Cape Verde" id="CV">Cape Verde</option>
                  <option value="Cayman Islands" id="KY">Cayman Islands</option>
                  <option value="Central African Republic" id="CF">Central African Republic</option>
                  <option value="Chad" id="TD">Chad</option>
                  <option value="Chile" id="CL">Chile</option>
                  <option value="China" id="CN">China</option>
                  <option value="Christmas Island" id="CX">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands" id="CC">Cocos (Keeling) Islands</option>
                  <option value="Colombia" id="CO">Colombia</option>
                  <option value="Comoros" id="KM">Comoros</option>
                  <option value="Congo" id="CG">Congo</option>
                  <option value="Congo, the Democratic Republic of the" id="CD">Congo, the Democratic Republic of the</option>
                  <option value="Cook Islands" id="CK">Cook Islands</option>
                  <option value="Costa Rica" id="CR">Costa Rica</option>
                  <option value="Cote D'Ivoire" id="CI">Cote D'Ivoire</option>
                  <option value="Croatia" id="HR">Croatia</option>
                  <option value="Cuba" id="CU">Cuba</option>
                  <option value="Cyprus" id="CY">Cyprus</option>
                  <option value="Czech Republic" id="CZ">Czech Republic</option>
                  <option value="Denmark" id="DK">Denmark</option>
                  <option value="Djibouti" id="DJ">Djibouti</option>
                  <option value="Dominica" id="DM">Dominica</option>
                  <option value="Dominican Republic" id="DO">Dominican Republic</option>
                  <option value="Ecuador" id="EC">Ecuador</option>
                  <option value="Egypt" id="EG">Egypt</option>
                  <option value="El Salvador" id="SV">El Salvador</option>
                  <option value="Equatorial Guinea" id="GQ">Equatorial Guinea</option>
                  <option value="Eritrea" id="ER">Eritrea</option>
                  <option value="Estonia" id="EE">Estonia</option>
                  <option value="Ethiopia" id="ET">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)" id="FK">Falkland Islands (Malvinas)</option>
                  <option value="Faroe Islands" id="FO">Faroe Islands</option>
                  <option value="Fiji" id="FJ">Fiji</option>
                  <option value="Finland" id="FI">Finland</option>
                  <option value="France" id="FR">France</option>
                  <option value="French Guiana" id="GF">French Guiana</option>
                  <option value="French Polynesia" id="PF">French Polynesia</option>
                  <option value="French Southern Territories" id="TF">French Southern Territories</option>
                  <option value="Gabon" id="GA">Gabon</option>
                  <option value="Gambia" id="GM">Gambia</option>
                  <option value="Georgia" id="GE">Georgia</option>
                  <option value="Germany" id="DE">Germany</option>
                  <option value="Ghana" id="GH">Ghana</option>
                  <option value="Gibraltar" id="GI">Gibraltar</option>
                  <option value="Greece" id="GR">Greece</option>
                  <option value="Greenland" id="GL">Greenland</option>
                  <option value="Grenada" id="GD">Grenada</option>
                  <option value="Guadeloupe" id="GP">Guadeloupe</option>
                  <option value="Guam" id="GU">Guam</option>
                  <option value="Guatemala" id="GT">Guatemala</option>
                  <option value="Guinea" id="GN">Guinea</option>
                  <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                  <option value="Guyana" id="GY">Guyana</option>
                  <option value="Haiti" id="HT">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands" id="HM">Heard Island and Mcdonald Islands</option>
                  <option value="Holy See (Vatican City State)" id="VA">Holy See (Vatican City State)</option>
                  <option value="Honduras" id="HN">Honduras</option>
                  <option value="Hong Kong" id="HK">Hong Kong</option>
                  <option value="Hungary" id="HU">Hungary</option>
                  <option value="Iceland" id="IS">Iceland</option>
                  <option value="India" id="IN">India</option>
                  <option value="Indonesia" id="ID">Indonesia</option>
                  <option value="Iran, Islamic Republic of" id="IR">Iran, Islamic Republic of</option>
                  <option value="Iraq" id="IQ">Iraq</option>
                  <option value="Ireland" id="IE">Ireland</option>
                  <option value="Israel" id="IL">Israel</option>
                  <option value="Italy" id="IT">Italy</option>
                  <option value="Jamaica" id="JM">Jamaica</option>
                  <option value="Japan" id="JP">Japan</option>
                  <option value="Jordan" id="JO">Jordan</option>
                  <option value="Kazakhstan" id="KZ">Kazakhstan</option>
                  <option value="Kenya" id="KE">Kenya</option>
                  <option value="Kiribati" id="KI">Kiribati</option>
                  <option value="North Korea" id="KP">North Korea</option>
                  <option value="South Korea" id="KR">South Korea</option>
                  <option value="Kuwait" id="KW">Kuwait</option>
                  <option value="Kyrgyzstan" id="KG">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic" id="LA">Lao People's Democratic Republic</option>
                  <option value="Latvia" id="LV">Latvia</option>
                  <option value="Lebanon" id="LB">Lebanon</option>
                  <option value="Lesotho" id="LS">Lesotho</option>
                  <option value="Liberia" id="LR">Liberia</option>
                  <option value="Libyan Arab Jamahiriya" id="LY">Libyan Arab Jamahiriya</option>
                  <option value="Liechtenstein" id="LI">Liechtenstein</option>
                  <option value="Lithuania" id="LT">Lithuania</option>
                  <option value="Luxembourg" id="LU">Luxembourg</option>
                  <option value="Macao" id="MO">Macao</option>
                  <option value="Macedonia, the Former Yugoslav Republic of" id="MK">Macedonia, the Former Yugoslav Republic of</option>
                  <option value="Madagascar" id="MG">Madagascar</option>
                  <option value="Malawi" id="MW">Malawi</option>
                  <option value="Malaysia" id="MY">Malaysia</option>
                  <option value="Maldives" id="MV">Maldives</option>
                  <option value="Mali" id="ML">Mali</option>
                  <option value="Malta" id="MT">Malta</option>
                  <option value="Marshall Islands" id="MH">Marshall Islands</option>
                  <option value="Martinique" id="MQ">Martinique</option>
                  <option value="Mauritania" id="MR">Mauritania</option>
                  <option value="Mauritius" id="MU">Mauritius</option>
                  <option value="Mayotte" id="YT">Mayotte</option>
                  <option value="Mexico" id="MX">Mexico</option>
                  <option value="Micronesia, Federated States of" id="FM">Micronesia, Federated States of</option>
                  <option value="Moldova, Republic of" id="MD">Moldova, Republic of</option>
                  <option value="Monaco" id="MC">Monaco</option>
                  <option value="Mongolia" id="MN">Mongolia</option>
                  <option value="Montserrat" id="MS">Montserrat</option>
                  <option value="Morocco" id="MA">Morocco</option>
                  <option value="Mozambique" id="MZ">Mozambique</option>
                  <option value="Myanmar" id="MM">Myanmar</option>
                  <option value="Namibia" id="NA">Namibia</option>
                  <option value="Nauru" id="NR">Nauru</option>
                  <option value="Nepal" id="NP">Nepal</option>
                  <option value="Netherlands" id="NL">Netherlands</option>
                  <option value="Netherlands Antilles" id="AN">Netherlands Antilles</option>
                  <option value="New Caledonia" id="NC">New Caledonia</option>
                  <option value="New Zealand" id="NZ">New Zealand</option>
                  <option value="Nicaragua" id="NI">Nicaragua</option>
                  <option value="Niger" id="NE">Niger</option>
                  <option value="Nigeria" id="NG">Nigeria</option>
                  <option value="Niue" id="NU">Niue</option>
                  <option value="Norfolk Island" id="NF">Norfolk Island</option>
                  <option value="Northern Mariana Islands" id="MP">Northern Mariana Islands</option>
                  <option value="Norway" id="NO">Norway</option>
                  <option value="Oman" id="OM">Oman</option>
                  <option value="Pakistan" id="PK">Pakistan</option>
                  <option value="Palau" id="PW">Palau</option>
                  <option value="Palestinian Territory, Occupied" id="PS">Palestinian Territory, Occupied</option>
                  <option value="Panama" id="PA">Panama</option>
                  <option value="Papua New Guinea" id="PG">Papua New Guinea</option>
                  <option value="Paraguay" id="PY">Paraguay</option>
                  <option value="Peru" id="PE">Peru</option>
                  <option value="Philippines" id="PH">Philippines</option>
                  <option value="Pitcairn" id="PN">Pitcairn</option>
                  <option value="Poland" id="PL">Poland</option>
                  <option value="Portugal" id="PT">Portugal</option>
                  <option value="Puerto Rico" id="PR">Puerto Rico</option>
                  <option value="Qatar" id="QA">Qatar</option>
                  <option value="Reunion" id="RE">Reunion</option>
                  <option value="Romania" id="RO">Romania</option>
                  <option value="Russian Federation" id="RU">Russian Federation</option>
                  <option value="Rwanda" id="RW">Rwanda</option>
                  <option value="Saint Helena" id="SH">Saint Helena</option>
                  <option value="Saint Kitts and Nevis" id="KN">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia" id="LC">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon" id="PM">Saint Pierre and Miquelon</option>
                  <option value="Saint Vincent and the Grenadines" id="VC">Saint Vincent and the Grenadines</option>
                  <option value="Samoa" id="WS">Samoa</option>
                  <option value="San Marino" id="SM">San Marino</option>
                  <option value="Sao Tome and Principe" id="ST">Sao Tome and Principe</option>
                  <option value="Saudi Arabia" id="SA">Saudi Arabia</option>
                  <option value="Senegal" id="SN">Senegal</option>
                  <option value="Serbia and Montenegro" id="CS">Serbia and Montenegro</option>
                  <option value="Seychelles" id="SC">Seychelles</option>
                  <option value="Sierra Leone" id="SL">Sierra Leone</option>
                  <option value="Singapore" id="SG">Singapore</option>
                  <option value="Slovakia" id="SK">Slovakia</option>
                  <option value="Slovenia" id="SI">Slovenia</option>
                  <option value="Solomon Islands" id="SB">Solomon Islands</option>
                  <option value="Somalia" id="SO">Somalia</option>
                  <option value="South Africa" id="ZA">South Africa</option>
                  <option value="South Georgia and the South Sandwich Islands" id="GS">South Georgia and the South Sandwich Islands</option>
                  <option value="Spain" id="ES">Spain</option>
                  <option value="Sri Lanka" id="LK">Sri Lanka</option>
                  <option value="Sudan" id="SD">Sudan</option>
                  <option value="Suriname" id="SR">Suriname</option>
                  <option value="Svalbard and Jan Mayen" id="SJ">Svalbard and Jan Mayen</option>
                  <option value="Swaziland" id="SZ">Swaziland</option>
                  <option value="Sweden" id="SE">Sweden</option>
                  <option value="Switzerland" id="CH">Switzerland</option>
                  <option value="Syrian Arab Republic" id="SY">Syrian Arab Republic</option>
                  <option value="Taiwan, Province of China" id="TW">Taiwan, Province of China</option>
                  <option value="Tajikistan" id="TJ">Tajikistan</option>
                  <option value="Tanzania, United Republic of" id="TZ">Tanzania, United Republic of</option>
                  <option value="Thailand" id="TH">Thailand</option>
                  <option value="Timor-Leste" id="TL">Timor-Leste</option>
                  <option value="Togo" id="TG">Togo</option>
                  <option value="Tokelau" id="TK">Tokelau</option>
                  <option value="Tonga" id="TO">Tonga</option>
                  <option value="Trinidad and Tobago" id="TT">Trinidad and Tobago</option>
                  <option value="Tunisia" id="TN">Tunisia</option>
                  <option value="Turkey" id="TR">Turkey</option>
                  <option value="Turkmenistan" id="TM">Turkmenistan</option>
                  <option value="Turks and Caicos Islands" id="TC">Turks and Caicos Islands</option>
                  <option value="Tuvalu" id="TV">Tuvalu</option>
                  <option value="Uganda" id="UG">Uganda</option>
                  <option value="Ukraine" id="UA">Ukraine</option>
                  <option value="United Arab Emirates" id="AE">United Arab Emirates</option>
                  <option value="United Kingdom" id="GB">United Kingdom</option>
                  <option value="United States" id="US">United States</option>
                  <option value="United States Minor Outlying Islands" id="UM">United States Minor Outlying Islands</option>
                  <option value="Uruguay" id="UY">Uruguay</option>
                  <option value="Uzbekistan" id="UZ">Uzbekistan</option>
                  <option value="Vanuatu" id="VU">Vanuatu</option>
                  <option value="Venezuela" id="VE">Venezuela</option>
                  <option value="Viet Nam" id="VN">Viet Nam</option>
                  <option value="Virgin Islands, British" id="VG">Virgin Islands, British</option>
                  <option value="Virgin Islands, U.s." id="VI">Virgin Islands, U.s.</option>
                  <option value="Wallis and Futuna" id="WF">Wallis and Futuna</option>
                  <option value="Western Sahara" id="EH">Western Sahara</option>
                  <option value="Yemen" id="YE">Yemen</option>
                  <option value="Zambia" id="ZM">Zambia</option>
                  <option value="Zimbabwe" id="ZW">Zimbabwe</option>
                </select>
              </div>
              <div className="form__group field">

                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Subject</label>

              </div>
              <br /><br />
              <div className="wrap">
                <button className="s9button">Submit</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className='container s10main' style={{ padding: 0 }}>

        <header className="text-center pb-5 text-white" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="display-4">Get Access To
            Business & Crypto Media</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <p className="font-italic det mb-1"  >With a robust and adaptable technology foundation, we empower our teams and clients to push boundaries, embrace creativity, and pioneer the future. Join us on this exciting journey, where innovation knows no bounds, and together, {"we'll"} shape a world defined by limitless possibilities.</p>

          </div>
        </header>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src={P1} className='s9i' alt="" />
          <img src={P11} className='s9i' alt="" />
          <img src={P3} className='s9i' alt="" />
          <img src={P5} className='s9i' alt="" />
          <img src={P4} className='s9i' alt="" />
          <br />
          <img src={P6} className='s9i' alt="" />
          <img src={P7} className='s9i' alt="" />
          <img src={P8} className='s9i' alt="" />
          <img src={P9} className='s9i' alt="" />
          <img src={P10} className='s9i' alt="" />
        </div>

      </div>
    </>
  )
}

export default Section9