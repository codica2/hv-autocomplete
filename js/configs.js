var data = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: 'Cote D"Ivoire', code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: 'Korea, Democratic People"S Republic of', code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: 'Lao People"S Democratic Republic', code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suri", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZB" }
];

var categories = {
  junior_frontend_developer: {
    title: "Junior front-end developer",
    data: [
      { name: "Page Warner" },
      { name: "Essie Richards" },
      { name: "Ruby Cummings" },
      { name: "Noemi Mooney" },
      { name: "Golden Curtis" },
      { name: "Wallace Frazier" },
      { name: "Yesenia Mcconnell" },
      { name: "Davidson Saunders" },
      { name: "Ball Jacobson" },
      { name: "Lott Hinton" },
      { name: "Gwen Holloway" },
      { name: "Beasley Chen" },
      { name: "Mccarthy Vaughan" },
      { name: "Lang Oneal" },
      { name: "Kristi Moore" },
      { name: "Hewitt Mejia" },
      { name: "Maude Conner" },
      { name: "Holloway Boone" },
      { name: "Bobbi Mcclain" },
      { name: "Jean Cobb" },
      { name: "Barber Mcneil" },
      { name: "Jo Munoz" },
      { name: "Coffey Yang" },
      { name: "Morales Ward" },
      { name: "Franklin Marquez" },
      { name: "Harrell Ellison" },
      { name: "Gilliam Cohen" },
      { name: "Anderson Fischer" },
      { name: "Beard Bowen" },
      { name: "Mejia Estrada" },
      { name: "Sargent Montoya" },
      { name: "Leon Norton" },
      { name: "King Meyer" },
      { name: "Strickland Santos" },
      { name: "Stephenson Everett" },
      { name: "Hughes Rodriquez" },
      { name: "Tracie Fowler" },
      { name: "Hernandez Lopez" },
      { name: "Hale Solomon" },
      { name: "Galloway Pugh" },
      { name: "Moran Key" },
      { name: "Iris Fernandez" },
      { name: "Owens Armstrong" },
      { name: "Rivers Grant" },
      { name: "Angelica Parrish" },
      { name: "Eugenia Mcdowell" },
      { name: "Vang Mcdonald" },
      { name: "Morton Boyer" },
      { name: "Bush Short" },
      { name: "Lolita Sparks" },
      { name: "Haney Carlson" },
      { name: "Blanca Vega" },
      { name: "Peck Newman" },
      { name: "Nolan Taylor" },
      { name: "Jodie Brewer" },
      { name: "Johnnie Payne" },
      { name: "Mcgowan Burgess" },
      { name: "Solomon Stein" },
      { name: "Desiree Jenkins" },
      { name: "Welch Tyson" },
      { name: "Knapp Howard" },
      { name: "Elliott Simmons" },
      { name: "Christensen Rodriguez" },
      { name: "Allyson Schultz" },
      { name: "Georgia Crosby" },
      { name: "Clara Garza" },
      { name: "Nellie Reid" },
      { name: "Sadie Foley" },
      { name: "Woodard Wood" },
      { name: "Staci Burton" },
      { name: "Eloise Bowers" },
      { name: "Christie Nunez" },
      { name: "Sims English" },
      { name: "Jimenez Adkins" },
      { name: "Dunn Marks" },
      { name: "Kaitlin Bell" },
      { name: "Cherry Hooper" },
      { name: "Josefina Morrow" },
      { name: "Rosetta Caldwell" },
      { name: "Kimberly Vincent" },
      { name: "Spence Kent" },
      { name: "Carole Black" },
      { name: "Candice Gilliam" },
      { name: "Maxwell Padilla" },
      { name: "Tiffany Richard" },
      { name: "Flores Serrano" },
      { name: "Velma Garner" },
      { name: "Eula Chapman" },
      { name: "James Patton" },
      { name: "Nanette Reese" },
      { name: "Gonzalez Mckee" },
      { name: "Dean Hyde" },
      { name: "Shields Vasquez" },
      { name: "Savannah Harris" },
      { name: "Pat Holman" },
      { name: "Esther Crawford" },
      { name: "Marisol Hampton" },
      { name: "Bonita Hodge" },
      { name: "Chambers Gardner" },
      { name: "Cochran Vazquez" },
      { name: "Miriam Wiggins" },
      { name: "Blackwell Kramer" },
      { name: "Alexandria Edwards" },
      { name: "Olga Snow" },
      { name: "Crosby Odom" },
      { name: "Amy Guerra" },
      { name: "Stella Kerr" },
      { name: "Theresa Allen" },
      { name: "Reva Noble" },
      { name: "Harriett Church" },
      { name: "Oconnor Burks" },
      { name: "Woods Puckett" },
      { name: "Cooley Fleming" },
      { name: "Louisa Leonard" },
      { name: "English Berger" },
      { name: "Weaver Case" },
      { name: "Justice Barker" },
      { name: "Lucy Hester" },
      { name: "Woodward Delaney" },
      { name: "Mamie Camacho" },
      { name: "Angeline Goodwin" },
      { name: "Susie Gordon" },
      { name: "Adrian Richmond" },
      { name: "Castro Neal" },
      { name: "Leona Manning" },
      { name: "Evangelina Sampson" },
      { name: "Earlene Hurley" },
      { name: "Nannie Beck" },
      { name: "Williams Lynn" },
      { name: "Hart Small" },
      { name: "Meyer Wooten" },
      { name: "Santos Cherry" },
      { name: "Reese Mccray" },
      { name: "Mollie Lawson" },
      { name: "Nell Guy" },
      { name: "Frost Gentry" },
      { name: "Leblanc Holt" },
      { name: "Fitzpatrick Giles" },
      { name: "Macias Frost" },
      { name: "Tracey Sargent" },
      { name: "Diann Mcpherson" },
      { name: "Leah Sosa" },
      { name: "Dickson Head" },
      { name: "Tran Hewitt" },
      { name: "Kennedy Valdez" },
      { name: "Kris Duncan" },
      { name: "Margaret Pollard" },
      { name: "Cantu Robles" },
      { name: "Clark May" },
      { name: "Knox Ellis" },
      { name: "Norris Ryan" },
      { name: "Margret Bass" },
      { name: "Cole Washington" },
      { name: "Campos Houston" },
      { name: "Hamilton Atkins" },
      { name: "Cervantes Clemons" },
      { name: "Maldonado Logan" },
      { name: "Yang Monroe" },
      { name: "Queen Garrison" },
      { name: "Bowen Horne" },
      { name: "Stein Johns" },
      { name: "Ferrell Waters" },
      { name: "Janette Weaver" },
      { name: "Liza Conley" },
      { name: "Claudette Cannon" },
      { name: "Gayle Rivera" },
      { name: "Marcy Young" },
      { name: "Burks Hensley" },
      { name: "Thompson Bray" },
      { name: "Medina Kane" },
      { name: "Randi Mcintyre" },
      { name: "Angelita Patrick" },
      { name: "Slater Little" },
      { name: "Robyn Barr" },
      { name: "George Stewart" },
      { name: "Antoinette Reed" },
      { name: "Hardy Cruz" },
      { name: "Goldie Boyle" }
    ]
  },
  middle_frontend_developer: {
    title: "middle front-end developer",
    data: [
      { name: "Isabella Richardson" },
      { name: "Beverley Burris" },
      { name: "Tessa Duke" },
      { name: "Hunt Cervantes" },
      { name: "Danielle Mcmillan" },
      { name: "Wilcox Branch" },
      { name: "Blake Mccall" },
      { name: "Wilma Alston" },
      { name: "Jessica Vang" },
      { name: "Krista Mcgee" },
      { name: "Beck Hatfield" },
      { name: "Bruce Bernard" },
      { name: "Martha Malone" },
      { name: "Katelyn Leblanc" },
      { name: "Brandy Patel" },
      { name: "Carolina Hicks" },
      { name: "Priscilla Page" },
      { name: "Montoya Rosario" },
      { name: "Hendrix Walton" },
      { name: "Tara Scott" },
      { name: "Bartlett Terry" },
      { name: "Coleman Kaufman" },
      { name: "Debra Fulton" },
      { name: "Carney Duffy" },
      { name: "Adriana Davidson" },
      { name: "Carmen Workman" },
      { name: "Bonnie Solis" },
      { name: "Pacheco Valencia" },
      { name: "Christina Massey" },
      { name: "Cornelia Parker" },
      { name: "Bentley Emerson" },
      { name: "Blair Mccarthy" },
      { name: "Pansy Kemp" },
      { name: "Lela Ashley" },
      { name: "Bobbie Hammond" },
      { name: "Audrey Terrell" },
      { name: "Nichols Griffin" },
      { name: "Herminia Kline" },
      { name: "Santana Moses" },
      { name: "Sandy Lamb" },
      { name: "Dotson Vaughn" },
      { name: "Orr Ramos" },
      { name: "Doris Hamilton" },
      { name: "Emily Rosa" },
      { name: "Lucile Mann" },
      { name: "Jane Evans" },
      { name: "Cannon Rice" },
      { name: "Nancy Mcbride" },
      { name: "Fleming Shepard" },
      { name: "Adele Roberts" },
      { name: "Alexis Franco" },
      { name: "Fitzgerald Williams" },
      { name: "Roslyn Shelton" },
      { name: "Bernice Owens" },
      { name: "Fanny Sawyer" },
      { name: "Jeannine Keith" },
      { name: "Janell Obrien" },
      { name: "Velez Kim" },
      { name: "Wilkins Garcia" },
      { name: "Carolyn Jefferson" },
      { name: "Merle Casey" },
      { name: "Duffy Roth" },
      { name: "Debbie Spence" },
      { name: "Levine William" },
      { name: "Alisa Hebert" },
      { name: "Stone Sutton" },
      { name: "Acosta Morris" },
      { name: "Hodge Davenport" },
      { name: "Mcintosh Cash" },
      { name: "Mia Woods" },
      { name: "Baird Pickett" },
      { name: "Larson Bridges" },
      { name: "Montgomery Newton" },
      { name: "Abigail Gay" },
      { name: "Hannah Love" },
      { name: "Kelly Hudson" },
      { name: "Eliza Horton" },
      { name: "Elnora Ochoa" },
      { name: "Wright Hendricks" },
      { name: "Padilla Berg" },
      { name: "Elise Bishop" },
      { name: "Brennan Cox" },
      { name: "Nina Knowles" },
      { name: "Pollard Beasley" },
      { name: "Lila Stanton" },
      { name: "Prince Lloyd" },
      { name: "Cherie Robinson" },
      { name: "Simpson Larsen" },
      { name: "Adkins Mckay" },
      { name: "Torres Sandoval" },
      { name: "Berry Ratliff" },
      { name: "Emma Price" },
      { name: "Willa Mccormick" },
      { name: "Catherine Wong" },
      { name: "Zelma Reeves" },
      { name: "Rivera Stone" },
      { name: "Knight Luna" },
      { name: "Mcbride Sears" },
      { name: "Tammie Copeland" },
      { name: "Blanchard Weber" },
      { name: "Underwood Flores" },
      { name: "Byrd Kidd" },
      { name: "Ward Tucker" },
      { name: "Delacruz Mcmahon" },
      { name: "Rebecca Colon" },
      { name: "Allison Mcleod" },
      { name: "Rios Russo" },
      { name: "Nash Christian" },
      { name: "Edwards Romero" },
      { name: "Sheena Dillard" },
      { name: "Sonja Blake" },
      { name: "Scott Dotson" },
      { name: "Bass Oneill" },
      { name: "Hollie Eaton" },
      { name: "Martin Moran" },
      { name: "Chang Leon" },
      { name: "Park Farrell" },
      { name: "Rosanne Baird" },
      { name: "Dena Harmon" },
      { name: "Margo Bennett" },
      { name: "Rosemary Dickson" },
      { name: "Alston Clements" },
      { name: "Carey Kirby" },
      { name: "Aida Weiss" },
      { name: "Cunningham Boyd" },
      { name: "Dolly York" },
      { name: "Jenkins Nixon" },
      { name: "Phyllis Jacobs" },
      { name: "Velazquez Wall" },
      { name: "Florence Hartman" },
      { name: "Henry Hunter" },
      { name: "Lindsay Stafford" },
      { name: "Ramona Miles" },
      { name: "Christy Schneider" },
      { name: "Dillon Langley" },
      { name: "Katrina Raymond" },
      { name: "Tricia Peterson" },
      { name: "Finch Glenn" },
      { name: "Laurel Potter" },
      { name: "Brittney Sharpe" },
      { name: "Leonor Ayala" },
      { name: "Gaines Hill" },
      { name: "Cote Buckner" },
      { name: "Luna Moss" },
      { name: "Lawson Morse" },
      { name: "April Oliver" },
      { name: "Mayer Carter" },
      { name: "Mccullough Glass" },
      { name: "Jefferson Benson" },
      { name: "Walls Fletcher" },
      { name: "Nicole Hood" },
      { name: "Roman Leach" },
      { name: "Donna Powers" },
      { name: "Ellis Barry" },
      { name: "Millicent Carr" },
      { name: "Kirsten Best" },
      { name: "Joyner Park" },
      { name: "Dionne Hogan" },
      { name: "Daniels Tran" },
      { name: "Noreen Norman" },
      { name: "Lottie Perez" },
      { name: "Thomas Mclean" },
      { name: "Beulah Rocha" },
      { name: "Black Alvarez" },
      { name: "Pope Gill" },
      { name: "Alicia Fitzgerald" },
      { name: "Louella Carson" },
      { name: "Carrie Schwartz" },
      { name: "Betsy Skinner" },
      { name: "Haynes Osborn" },
      { name: "Kelley Hull" },
      { name: "Dona Compton" },
      { name: "Lacy Greer" }
    ]
  },
  senior_frontend_developer: {
    title: "senior front-end developer",
    data: [
      { name: "Downs Burns" },
      { name: "Duncan Bradshaw" },
      { name: "Cruz Burke" },
      { name: "Gould Nieves" },
      { name: "Agnes Mendez" },
      { name: "Miranda Golden" },
      { name: "Nicholson Hahn" },
      { name: "Jessie Craft" },
      { name: "Weber Johnson" },
      { name: "Bethany Cunningham" },
      { name: "Sasha Dalton" },
      { name: "Cheryl Farmer" },
      { name: "Walton Contreras" },
      { name: "Juanita Goodman" },
      { name: "Roberta Bright" },
      { name: "Susan Chaney" },
      { name: "Mills Landry" },
      { name: "Perez Paul" },
      { name: "Delaney Mckinney" },
      { name: "Short Wiley" },
      { name: "Avery Wilcox" },
      { name: "Fern Perry" },
      { name: "Cameron England" },
      { name: "Renee Morin" },
      { name: "Lena Humphrey" },
      { name: "Estelle Benton" },
      { name: "Robbins Erickson" },
      { name: "Alyson Mccarty" },
      { name: "Guerrero Hernandez" },
      { name: "Mendez Mccullough" },
      { name: "Andrea Cote" },
      { name: "Mcmahon Henson" },
      { name: "Kelli Ortiz" },
      { name: "Dyer Buchanan" },
      { name: "Deirdre Hickman" },
      { name: "Olivia Dean" },
      { name: "Ella Fuller" },
      { name: "Marion Holcomb" },
      { name: "Rachel Gray" },
      { name: "Trina Watson" },
      { name: "Tyler Rhodes" },
      { name: "Alison Barrera" },
      { name: "Lauren Hawkins" },
      { name: "Mcdaniel Gross" },
      { name: "Veronica Bates" },
      { name: "Erna Peters" },
      { name: "Conway Chan" },
      { name: "Jennie Olsen" },
      { name: "Kane Rosales" },
      { name: "Fowler Allison" },
      { name: "Letha Austin" },
      { name: "Joyce Chandler" },
      { name: "Dunlap Gilmore" },
      { name: "Jayne Butler" },
      { name: "Rosalinda Pennington" },
      { name: "Josefa Stout" },
      { name: "Morrison Rios" },
      { name: "Kirkland Ortega" },
      { name: "Moon Cortez" },
      { name: "Dennis Watkins" },
      { name: "Donaldson Morales" },
      { name: "Marks Gonzales" },
      { name: "Meadows Banks" },
      { name: "Mercer Bradford" },
      { name: "Young Walters" },
      { name: "Luisa Klein" },
      { name: "Powers Juarez" },
      { name: "Weiss Stark" },
      { name: "Amanda Stokes" },
      { name: "Sweeney Stevens" },
      { name: "Horton Forbes" },
      { name: "Booker Orr" },
      { name: "Bowers Reyes" },
      { name: "Brewer Rollins" },
      { name: "Phelps Salas" },
      { name: "Mona Huber" },
      { name: "Stefanie Woodward" },
      { name: "Odonnell Holmes" },
      { name: "Harriet Floyd" },
      { name: "Margarita Koch" },
      { name: "Crystal Stephens" },
      { name: "Mccall Benjamin" },
      { name: "Socorro Witt" },
      { name: "Gillespie Collins" },
      { name: "Hinton Blair" },
      { name: "Baxter Campbell" },
      { name: "Emilia Rush" },
      { name: "Chaney Clay" },
      { name: "Carpenter Joyce" },
      { name: "Gina Cleveland" },
      { name: "Alyssa Lott" },
      { name: "Ora Bond" },
      { name: "Corina Hancock" },
      { name: "Burt Trevino" },
      { name: "Alyce Bonner" },
      { name: "Meagan Peck" },
      { name: "Rosario Morrison" },
      { name: "Stanley Chang" },
      { name: "Jeanne Mcknight" },
      { name: "Rosalind Carey" },
      { name: "Bertha Reilly" },
      { name: "Della Warren" },
      { name: "Leticia Daugherty" },
      { name: "Christine Nash" },
      { name: "Angelique Velasquez" },
      { name: "Ortega Christensen" },
      { name: "Smith Maxwell" },
      { name: "Helena Barnett" },
      { name: "Silvia Ferguson" },
      { name: "Lana Thomas" },
      { name: "Kemp Madden" },
      { name: "Hickman Watts" },
      { name: "Rosa Graham" },
      { name: "Sheri Finch" },
      { name: "Marquez Hardy" },
      { name: "Willis Clarke" },
      { name: "Jackie Pitts" },
      { name: "Leila Nicholson" },
      { name: "Combs Hunt" },
      { name: "Bernard Sheppard" },
      { name: "Jones Cook" },
      { name: "Ramirez Knox" },
      { name: "Mcfarland Alvarado" },
      { name: "Kaufman Moody" },
      { name: "Simone Guerrero" },
      { name: "Dudley Mccoy" },
      { name: "Ross Snider" },
      { name: "Maryann Clayton" },
      { name: "Pace Soto" },
      { name: "Kari Lane" },
      { name: "French Guzman" },
      { name: "Warren Dunn" },
      { name: "Gutierrez Haley" },
      { name: "Walsh Mcclure" },
      { name: "Lucille Castro" },
      { name: "Waller Combs" },
      { name: "Lakisha Fry" },
      { name: "Bianca Sweeney" },
      { name: "Imogene Figueroa" },
      { name: "Janie Cantu" },
      { name: "Julia Craig" },
      { name: "Olson Downs" },
      { name: "Eve Knapp" },
      { name: "Trevino Atkinson" },
      { name: "Monroe Travis" },
      { name: "Jeri Shepherd" },
      { name: "Barbara Ford" },
      { name: "Clarke Abbott" },
      { name: "Lowe Salazar" }
    ]
  }
};

var options = {
  data: data,
  input: document.querySelector("#main")
};

new HVAutocomplete(options);
