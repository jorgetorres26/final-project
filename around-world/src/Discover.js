import React from 'react';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css'
import _ from 'lodash';
import $ from "jquery";

var arts = [
    { name: "Louvre Museum", loc: "Paris, France", site: "https://www.google.com/maps/place/Louvre+Museum", photo: "http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg"}, 
    { name: "Millennium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millennium+Park+Chicago", photo: "https://www.cityofchicago.org/content/dam/city/depts/dca/Public%20Art/crownfountain.jpg" }, 
    { name: "Goreme Open Air Museum", loc: "Goreme, Turkey", site: "https://www.google.com/maps/place/Goreme+Open+Air+Museum+Turkey", photo: "http://www.goreme.com/images/goreme-open-air-museum-4.jpg"},
    { name: "Metropolitan Museum of Art", loc: "New York City, USA", site: "https://www.google.com/maps/place/Metropolitan+Museum+of+Art+New+York", photo: "http://d1smv7h0armdzg.cloudfront.net/wp-content/uploads/2011/07/Metropolitan_Museum_of_Art_at_1000_5th_Ave_.jpg"},
    { name: "Rijksmuseum", loc: "Amsterdam, Netherlands", site: "https://www.google.com/maps/place/Rijksmuseum+Amsterdam", photo: "http://www.europe-autos.com/wp-content/uploads/2013/10/rijksmuseum.jpg"},
    { name: "Museo Reina Sofia", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/Museo+Reina+Sofia+Madrid", photo: "https://upload.wikimedia.org/wikipedia/commons/9/97/MNCARS_05.jpg"}, 
    { name: "Santa Maria delle Grazie", loc: "Milan, Italy", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan", photo: "http://www.italia.it/fileadmin/src/img/cluster_gallery/siti_unesco/cenacolo/veduta_santamariadellegrazie.jpg" },
    { name: "Storm King Art Center", loc: "New York State, USA", site: "https://www.google.com/maps/place/Storm+King+Art+Center+New+York", photo: "http://photos2.meetupstatic.com/photos/event/e/5/4/4/600_419098692.jpeg"},
    { name: "Lakshman Temple", loc: "Khajuraho, India", site: "https://www.google.com/maps/place/Lakshman+Temple+India", photo: "http://www.templefolks.com/products/bimages/Lakshmana-Temple-Khajuraho-1132135.jpg"},
    { name: "Museo Nacional de Antropologia", loc: "Mexico City, Mexico", site: "https://www.google.com/maps/place/Museo+Nacional+de+Antropologia+Mexico", photo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Museo_Nacional_de_Antropologia_Mexico.JPG"}
  ] 

var beaches =  [
    { name: "Punta Cana", loc: "Punta Cana, Dominican Republic", site: "https://www.google.com/maps/place/punta+cana", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2e/01/punta-cana.jpg"}, 
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico" , photo: "http://www.hannahni.com/puerto%20rico/playa%20flamenco%203.jpg"}, 
    { name: "Playa del Carmen", loc: "Yucatan, Mexico", site: "https://www.google.com/maps/place/Playa+del+Carmen+Mexico" , photo: "http://www.planetware.com/photos-large/MEX/mexico-cancun-playa-del-carmen-tulum.jpg" },
    { name: "Maui Beach", loc: "Hawaii, USA", site: "https://www.google.com/maps/place/Maui+Hawaii" , photo: "https://i.ytimg.com/vi/1yuM_WDV25M/maxresdefault.jpg"},
    { name: "South Beach", loc: "Miami, USA", site: "https://www.google.com/maps/place/South+Beach+Miami" , photo: "http://images.miamiandbeaches.com/images/111152_13161_full.jpg" },
    { name: "Nai Harn Beach", loc: "Phuket Island, Thailand", site: "https://www.google.com/maps/place/Nai+Harn+Beach+Thailand" , photo: "http://static.asiawebdirect.com/m/phuket/portals/phuket-com/shared/teasersL/where-to-stay-in-nai-harn---editor-s-guide/teaserMultiLarge/image/Where-to-Stay-in-Nai-Harn-Beach.jpg"}, 
    { name: "Coronado Beach", loc: "San Diego, USA", site: "https://www.google.com/maps/place/Coronado+Beach+San+Diego" , photo: "https://coronadotimes.com/wp-content/uploads/2014/07/649-w_20140704_IMG_8500BRCR1.jpg"},
    { name: "Bondi Beach", loc: "Sydney, Australia", site: "https://www.google.com/maps/place/Bondi+Beach+Sydney+Australia", photo: "http://www.surfsidebackpackers.com.au/wp-content/uploads/2015/08/top-bondi-beach-australia.jpg"},
    { name: "Bora Bora", loc: "French Polynesia", site: "https://www.google.com/maps/place/bora+bora" , photo: "http://www.fourseasons.com/content/dam/fourseasons/images/web/BOR/BOR_100_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
    { name: "Palm Beach", loc: "Aruba", site: "https://www.google.com/maps/place/palm+beach+aruba" , photo: "https://i.ytimg.com/vi/7jWi2NyYfhg/maxresdefault.jpg"}
  ]

var cycling = [
    { name: "Serra da Estrela Mountains", loc: "Covilhã, Portugal", site: "https://www.google.com/maps/place/Serra+da+Estrela+Covilhã+Portugal", photo: "http://www.portugalnotavel.com/wp-content/uploads/2012/01/varanda-dos-carqueijais.jpg" }, 
    { name: "Lake Song-Kol", loc: "Kochkor, Kyrgyzstan", site: "https://www.google.com/maps/place/Lake+Song-Kol+Kyrgyzstan" , photo: "https://s-media-cache-ak0.pinimg.com/originals/6e/81/71/6e81712a69e11925171bbed517ecf8b8.jpg"}, 
    { name: "Mekong River", loc: "Phnom Penh, Cambodia", site: "https://www.google.com/maps/place/Mekong+River+Phnom+Penh+Cambodia", photo: "http://images.r.cruisecritic.com/features/2016/03/mekong-river-yunnan.jpg"},
    { name: "Tasmania Island", loc: "Australia", site: "https://www.google.com/maps/place/Tasmania+Island+Australia", photo: "http://www.tourist-destinations.net/wp-content/uploads/2015/08/Tasmania-1024x592.jpg"},
    { name: "Route 395", loc: "Oregon Coast, USA", site: "https://www.google.com/maps/place/Brookings+Oregon", photo: "http://1nf6ka4c1kt31v1rx41pzq9f-wpengine.netdna-ssl.com/wp-content/uploads/2013/06/bg13.jpg"},
    { name: "The Dolomites", loc: "Bolzano, Italy", site: "https://www.google.com/maps/place/The+Dolomites+Italy", photo: "http://www.travelviaitaly.com/wp-content/uploads/2015/08/dolomites-mountains-italy.jpg"}, 
    { name: "Shiraz to Yazd", loc: "Iran", site: "https://www.google.com/maps/place/Shiraz+Iran", photo: "http://photos3.meetupstatic.com/photos/event/6/2/9/1/600_435265233.jpeg"},
    { name: "Zagora to Tafraoute", loc: "Morocco", site: "https://www.google.com/maps/place/Zagora+Morocco", photo: "http://adgeco.com/wp-content/uploads/2014/08/Zagora-Morocco-doorway-to-Sahara-Desert.jpg"},
    { name: "Molesworth Road", loc: "Molesworth, New Zealand", site: "https://www.google.com/maps/place/Molesworth+New+Zealand", photo: "http://nzcycletrail.com/wp-content/uploads/2015/08/molesworth-muster_1980x725.jpg"},
    { name: "Turkey Interior", loc: "Bergama, Turkey", site: "https://www.google.com/maps/place/Bergama+Turkey", photo: "https://lh5.googleusercontent.com/-CR-Is6HFp3Y/U5a_Gxanb1I/AAAAAAAAus8/VHVw0W3d4gA/s645/bergama.jpg"}
  ]

var birding = [
    { name: "Manu National Park", loc: "Manu, Peru", site: "https://www.google.com/maps/place/Manu+National+Park+Peru", photo: "http://www.worldatlas.com/upload/03/8c/85/manu-national-park-71.jpg"}, 
    { name: "Cape May", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Cape+May+Birding+New+Jersey", photo: "http://www.njaudubon.org/portals/10/Centers/NCCM/Images/Osprey%20-%20July%2007%20-%20web2.jpg"}, 
    { name: "Kruger National Park", loc: "Kruger, South Africa", site: "https://www.google.com/maps/place/Kruger+National+Park+South+Africa", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/e7/68/9b/kruger-national-park.jpg"},
    { name: "Tandayapa Bird Lodge", loc: "Quito, Ecuador", site: "https://www.google.com/maps/place/Tandayapa+Bird+Lodge+Ecuador", photo: "http://www.pure-ecuador.com/wp-content/uploads/2012/01/Tandayapa-Bird-Lodge-lounge.jpg"},
    { name: "Coto Doñana National Park", loc: "Almonte, Spain", site: "https://www.google.com/maps/place/Coto+Doñana+Almonte+Spain", photo: "http://www.casa-andaluza.es/media/736980/laguna-con-flamencos.jpg"},
    { name: "Kalimantan", loc: "Borneo, Malaysia", site: "https://www.google.com/maps/place/Borneo+Birding+malaysia", photo: "http://www.endemicguides.com/images/DanumCA/Rainforest_Lodge.jpg"}, 
    { name: "Rondon Ridge", loc: "Mount Hagen, Papua New Guinea", site: "https://www.google.com/maps/place/Mount+Hagen+Papua+New+Guinea", photo: "http://farm3.static.flickr.com/2772/4124922616_c257c88e5f.jpg"},
    { name: "Atherton Tablelands", loc: "Cairns, Australia", site: "https://www.google.com/maps/place/Cairns+Australia", photo: "http://www.australia.com/content/australia/en/places/qld/kuranda/_jcr_content/image.adapt.985.medium.jpg"},
    { name: "Panama Canal", loc: "Panama City, Panama", site: "https://www.google.com/maps/place/Canopy+Tower+Panama" , photo: "http://www.canopytower.com/images/canopy-tower-21.jpg" },
    { name: "Jigme Dorji", loc: "Thimphu, Bhutan", site: "https://www.google.com/maps/place/Jigme+Dorji+Bhutan", photo: "http://www.indianapoliszoo.com/blog/SiteAssets/Lists/Posts/NewPost/Bhutan%20Dorji%20National%20Park-SLC.jpg"}
  ]

var business = [
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/london+uk", photo: "https://www.zz.co.uk/blog/wp-content/uploads/2015/03/Photo-%C2%A9-QQ7-Fotolia.com_.jpg" }, 
    { name: "Sydney", loc: "Australia", site: "https://www.google.com/maps/place/sydney+australia", photo: "http://elitebusinessbrokers.com.au/wp-content/uploads/2010/12/Sydney-Business-District.png"}, 
    { name: "Toronto", loc: "Canada", site: "https://www.google.com/maps/place/toronto+canada", photo: "http://www.tfsa.ca/financial_services/images/financial_services_overview_toronto.jpg"},
    { name: "Hong Kong", loc: "China", site: "https://www.google.com/maps/place/hong+kong+china", photo: "https://www.prlog.org/12129270-1.jpg"},
    { name: "Mexico City", loc: "Mexico", site: "https://www.google.com/maps/place/Mexico+city", photo: "https://farm1.staticflickr.com/344/19453022663_8b5ff62cb0_b.jpg"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain", photo: "http://www.ociogo.com/images/madrid/0000/151_cuatro-torres-business-area-de-madrid.jpg"}, 
    { name: "New York City", loc: "USA", site: "https://www.google.com/maps/place/new+york+city", photo: "http://chieforganizer.org/wp-content/uploads/2016/02/Wall-Street-Lower-Manhattan-53049.jpg"},
    { name: "Chicago", loc: "USA", site: "https://www.google.com/maps/place/Chicago+Illinois", photo: "http://miriadna.com/desctopwalls/images/max/Chicago-business-district.jpg"},
    { name: "Washington, DC", loc: "USA", site: "https://www.google.com/maps/place/Washington+DC", photo: "https://www.groupon.com/merchant/wp-content/uploads/2013/07/washington-dc-small-business.jpg"},
    { name: "Rio de Janeiro", loc: "Brazil", site: "https://www.google.com/maps/place/Rio+de+Janeiro", photo: "http://maninrio.com/wp-content/uploads/2012/10/rio-de-janeiro-centro.jpeg"}
  ]

var camping = [
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park", photo: "http://cdn.history.com/sites/2/2015/09/iStock_000038100826_Large.jpg" }, 
    { name: "Boya Lake Provincial Park", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Boya+Lake+Provincial+Park+British+Columbia+Canada" , photo: "http://investnorthwestbc.ca/uploads/images/1%20Tourism%20Sector%20Update/Provincial%20Parks/11%20Boya%20Lake.jpg"}, 
    { name: "Miyajima Island", loc: "Miyajima, Japan", site: "https://www.google.com/maps/place/Miyajima+Island+Japan", photo: "http://thetruejapan.com/wp-content/uploads/2015/07/Miyajima-Floating-Torii-Gate-830x450.jpg"},
    { name: "The Isle of Arran", loc: "Arran, Scotland", site: "https://www.google.com/maps/place/The+Isle+of+Arran+Scotland", photo: "http://orig14.deviantart.net/5eed/f/2012/216/e/f/brodick__isle_of_arran__scotland__uk_by_younghappy-d59skzg.jpg"},
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/41/05/a4/flamenco-beach-playa.jpg"},
    { name: "Corcovado National Park", loc: "Playa Caletas de Osa, Costa Rica", site: "https://www.google.com/maps/place/Corcovado+National+Park+Costa+Rica", photo: "https://media-cdn.tripadvisor.com/media/photo-s/03/81/8a/eb/corcovado-national-park.jpg"}, 
    { name: "Sahara Desert", loc: "Ouarzazate, Morocco", site: "https://www.google.com/maps/place/sahara+desert+morocco", photo: "http://www.sahara-desert.net/images/sahara-desert-camps.jpg"},
    { name: "Yellowstone National Park", loc: "Wyoming, USA", site: "https://www.google.com/maps/place/Yellowstone+National+Park", photo: "http://cdn.yellowstoneparknet.com/images/content/627_toEyf_Yellowstone_Camping_md.jpg"},
    { name: "Lake Myvatn", loc: "Reykjahlid, Iceland", site: "https://www.google.com/maps/place/Lake+Myvatn+Iceland", photo: "http://www.earthtripper.com/sites/default/files/styles/article_image_mobile_adaptive/public/lake-myvatn-tent.jpg?itok=80Kt-Zss"},
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon", photo: "http://cdn.allsedona.com/images/content/21066_16985_Desert_View_Grand_Canyon_md.jpg"}
  ]

var gambling = [
    { name: "Niagara Falls", loc: "Niagara Falls, USA / Canada", site: "https://www.google.com/maps/place/Niagara+Falls", photo: "http://www.niagarafallsredevelopment.com/wp-content/gallery/casino/niagara-fallsview.jpg"}, 
    { name: "Downtown Nassau", loc: "Nassau, Bahamas", site: "https://www.google.com/maps/place/Downtown+Nassau+Bahamas", photo: "http://www.nassauparadiseisland.com/wp-content/uploads/2013/08/where-to-stay-atlantis-590x420.jpg"}, 
    { name: "Palm Beach", loc: "Noord, Aruba", site: "https://www.google.com/maps/place/Palm+Beach+Smith+Blvd+Noord+Aruba", photo: "https://s3.amazonaws.com/assets.tripalertz.com/img/deals/374_5164.jpg"},
    { name: "Condado", loc: "San Juan, Puerto Rico", site: "https://www.google.com/maps/place/condado+san+juan+puerto+rico", photo: "https://phgcdn.com/images/uploads/SJUCV/corporatemasthead/SJUCV-Beach.Activities.jpg"},
    { name: "Reno", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Casinos+in+Reno+Nevada", photo: "https://intensegambling-cdnserver1.netdna-ssl.com/wp-content/uploads/2010/12/reno.jpg"},
    { name: "Monte Carlo", loc: "Monte Carlo, Monaco", site: "https://www.google.com/maps/place/Casinos+In+Monte+carlo+Monaco" , photo: "https://media.mnn.com/assets/images/2015/07/CasinoDeMonteCarlo.jpg.638x0_q80_crop-smart.jpg"}, 
    { name: "Southeast Connecticut", loc: "Connecticut, USA", site: "https://www.google.com/maps/place/1+Mohegan+Sun+Blvd,+Uncasville,+CT+06382", photo: "https://mohegansun.com/content/mohegansun/en/hotel-spa-and-golf/special-packages/_jcr_content/genericParsys/textimage_3.img.jpg/1442246089942.jpg"},
    { name: "Atlantic City", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Atlantic+City+New+Jersey", photo: "https://phillystylemag.com/get/files/image/migration/12427_content_Atlantic-City-1.jpg"},
    { name: "Macau", loc: "Macau, China", site: "https://www.google.com/maps/place/Macau+China", photo: "http://a.abcnews.com/images/Blotter/gty_macau_casinos_skyline_nt_120307_wmain.jpg"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"}
  ]

var golfing = [
    { name: "Playa Grande", loc: "Cabrera, Dominican Republic", site: "https://www.google.com/maps/place/Playa+Grande+Dominican+Republic", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62063"}, 
    { name: "Hazeltine National Golf Club", loc: "Minnesota, USA", site: "https://www.google.com/maps/place/Hazeltine+Golf+Chaska+Minnesota", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62064"}, 
    { name: "Maderas Golf Club", loc: "California, USA", site: "https://www.google.com/maps/place/Maderas+Golf+Poway+California", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62065"},
    { name: "Austin Country Club", loc: "Texas, USA", site: "https://www.google.com/maps/place/4408+Long+Champ+Dr,+Austin,+TX+78746", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62066"},
    { name: "TPC Harding Park", loc: "California, USA", site: "https://www.google.com/maps/place/TPC+Harding+Park+San+Francisco", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62067"},
    { name: "Turtle Point", loc: "South Carolina, USA", site: "https://www.google.com/maps/place/Turtle+Point+Kiawah+Island", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62055"}, 
    { name: "West at Gull Lake View Golf Club", loc: "Michigan, USA", site: "https://www.google.com/maps/place/Gull+Golf+Augusta+Michigan", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62056"},
    { name: "Wickenburg Ranch Golf Course", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Wickenburg+Ranch+Golf", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62057"},
    { name: "Cape Breton Island", loc: "Nova Scotia, Canada", site: "https://www.google.com/maps/place/Cape+Breton+Island", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62058"},
    { name: "Royal Troon Golf Club", loc: "Troon, Scotland", site: "https://www.google.com/maps/place/Craigend+Rd,+Troon+KA10+6EP,+UK", photo: "http://res.gdol.com/ap/p.php?a=pv&p=62059"}
  ]

var hiking = [
    { name: "Abisko National Park", loc: "Abisko, Sweden", site: "https://www.google.com/maps/place/Abisko+National+Park", photo: "http://www.sverigesnationalparker.se/globalassets/abisko/textsida-topp-945x500/abisko-nationalpark-lapporten.jpg" }, 
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon" , photo: "http://cdn.allsedona.com/images/content/21066_16985_Desert_View_Grand_Canyon_md.jpg"}, 
    { name: "Mount Everest", loc: "Sagarmatha, Nepal", site: "https://www.google.com/maps/place/Mount+Everest" , photo: "https://www.rmiguides.com/international/_images/slideshows/everest/5.jpg"},
    { name: "Monte Fitz Roy", loc: "Patagonia, Argentina", site: "https://www.google.com/maps/place/Monte+Fitz+Roy" , photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Monte_Fitz_Roy,_El_Chalten,_Santa_Cruz,_Argentina.JPG/440px-Monte_Fitz_Roy,_El_Chalten,_Santa_Cruz,_Argentina.JPG"},
    { name: "Dana Reserve", loc: "Dana, Jordan", site: "https://www.google.com/maps/place/Dana+Reserve+Jordan" , photo: "http://trekity.com/wp-content/uploads/2012/07/4948150841_623bf2b44d_z-640x265.jpg"},
    { name: "Bernese Alps", loc: "Grindelwald, Switzerland", site: "https://www.google.com/maps/place/Bernese+Alps+Switzerland" , photo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Resting_point_with_view_to_Bernese_Alps_at_M%C3%BCrren,_Bern,_Switzerland,_2012_August.jpg"}, 
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park", photo: "http://cdn.history.com/sites/2/2015/09/iStock_000038100826_Large.jpg"},
    { name: "Chilkoot Trail", loc: "Alaska, USA / Yukon, Canada", site: "https://www.google.com/maps/place/Chilkoot+Trail+Skagway+Alaska", photo: "http://infoaboutalaska.com/wp-content/uploads/2013/06/IMG_1440.jpg" },
    { name: "Queen Charlotte Track", loc: "Marlborough Sounds, New Zealand", site: "https://www.google.com/maps/place/Marlborough+Sounds+New+Zealand", photo: "http://homepages.ihug.co.nz/~philclarke/pictonscene.jpg" },
    { name: "Mountains of the Moon", loc: "Rwenzori, Uganda", site: "https://www.google.com/maps/place/Rwenzori+Mountains+Uganda", photo: "https://marianahthotel.files.wordpress.com/2015/04/rwenzori-mountains.jpg" }
  ]

var parks = [
    { name: "Stanley Park", loc: "Vancouver, Canada", site: "https://www.google.com/maps/place/Stanley+Park+Vancouver", photo: "http://i.amz.mshcdn.com/YuIyXsRIpB_6A4N5UkBp4geMr94=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fstanley-park.jpg" }, 
    { name: "Garden of the Gods", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Garden+of+the+Gods+Colorado+Springs", photo: "http://i.amz.mshcdn.com/10r0e3Z62EnX0afR-6fUCAElc1o=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fgarden-of-the-gods.jpg"}, 
    { name: "Central Park", loc: "New York, USA", site: "https://www.google.com/maps/place/Central+Park+nyc", photo: "http://i.amz.mshcdn.com/0UBK9CvlCEDVdhzeFnlVIvmm4Mo=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fcentral-park.jpg"},
    { name: "Millenium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millenium+Park+Chicago", photo: "http://i.amz.mshcdn.com/0aug5PS6V5iLiCNsWihzef7K52w=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fmillenium-park.jpg"},
    { name: "The High Line", loc: "New York, USA", site: "https://www.google.com/maps/place/The+High+Line+New+York", photo: "http://i.amz.mshcdn.com/O92Sa1bpuM3wxuTFd2gWtg7LVfI=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fthe-high-line.jpg"},
    { name: "Kings Park and Botanical Garden", loc: "Perth, Australia", site: "https://www.google.com/maps/place/Kings+Park+Perth+Australia", photo: "http://sullivans.com.au/2015/wp-content/uploads/image/kings_park_pics/kings_park_03.jpg"}, 
    { name: "Park Güell", loc: "Barcelona, Spain", site: "https://www.google.com/maps/place/Park+Güell+Barcelona", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Park_G%C3%BCell_02.jpg/330px-Park_G%C3%BCell_02.jpg"},
    { name: "Parque Ibirapuera", loc: "São Paulo, Brazil", site: "https://www.google.com/maps/place/Parque+Ibirapuera+São+Paulo", photo: "http://i.amz.mshcdn.com/6RxzWaC87MGY1c4SzmHBgmGkkrM=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fibrapuera-park.jpg"},
    { name: "Parque del Buen Retiro", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/El+Retiro+Park+Madrid+Spain", photo: "http://static.thousandwonders.net/Buen.Retiro.Park.original.16412.jpg"},
    { name: "Jardin du Luxembourg", loc: "Paris, France", site: "https://www.google.com/maps/place/Jardin+du+Luxembourg+Paris", photo: "http://en.parisinfo.com/var/otcp/sites/images/media/1.-photos/52.-paris-en-image/jardin-du-luxembourg-850x540-c-otcp-david-lefranc/12223-1-fre-FR/Jardin-du-Luxembourg-850x540-C-OTCP-David-Lefranc.jpg"}
  ]

var nightlife = [
    { name: "Ibiza", loc: "Spain", site: "https://www.google.com/maps/place/Ibiza+Spain", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121148-nightlife-cities-1-ibiza-horizontal-large-gallery.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Gramercy+Theater+nyc", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140922182453-nightlife-cities-3-nyc-horizontal-large-gallery.jpg"},
    { name: "São Paulo", loc: "Brazil", site: "https://www.google.com/maps/place/Yacht+Club+São+Paulo+Brazil", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140923083417-party-cities-sao-paulo-horizontal-large-gallery.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/The+Mayflower+Pub+London+UK", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121713-nightlife-cities-5-london-horizontal-large-gallery.jpg"},
    { name: "Barcelona", loc: "Spain", site: "https://www.google.com/maps/place/Puerto+Olímpico+Barcelona", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121812-nightlife-cities-6-barcelona-horizontal-large-gallery.jpg"}, 
    { name: "Montreal", loc: "Canada", site: "https://www.google.com/maps/place/Downtown+Montreal+Canada", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121920-nightlife-cities-7-montreal-horizontal-large-gallery.jpg"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"},
    { name: "Buenos Aires", loc: "Argentina", site: "https://www.google.com/maps/place/Palermo+Buenos+Aires+Argentina", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122152-nightlife-cities-9-buenos-aires-horizontal-large-gallery.jpg"},
    { name: "Bangkok", loc: "Thailand", site: "https://www.google.com/maps/place/Sofitel+So+Bangkok", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122416-nightlife-cities-10-bangkok-horizontal-large-gallery.jpg"}
  ]

var shopping = [
    { name: "Tokyo", loc: "Japan", site: "https://www.google.com/maps/place/Shinjuku+Tokyo+Japan", photo: "http://www.japan-guide.com/g2/3053_02b.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://blog.radissonblu.com/wp-content/uploads/2014/10/friedrichstrasse-street-berlin.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Fifth+avenue+nyc", photo: "http://newyorktotal.com/wp-content/uploads/2015/04/Fifth-Avenue-Shopping-new-york.jpg"},
    { name: "Moscow", loc: "Russia", site: "https://www.google.com/maps/place/Moscow+Russia", photo: "https://kremlintour.com/sites/default/files/curiuos/499-shopping-in-moscow-top-10-malls-and-markets.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/Oxford+Street+London+UK", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/39/47/d0/oxford-street.jpg"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain", photo: "http://www.cheapinmadrid.com/madrid-cheap/wp-content/uploads/2011/07/shopping_madrid.jpg"}, 
    { name: "Milan", loc: "Italy", site: "https://www.google.com/maps/place/Milan+Italy", photo: "https://blog.ihg.com/wp-content/uploads/2015/08/MilanShoppingCentre-620x270.jpg"},
    { name: "Dubai", loc: "United Arab Emirates", site: "https://www.google.com/maps/place/Dubai+Mall+uae", photo: "http://vizts.com/wp-content/uploads/2016/01/dubai-mall-near-burj-khalifa.jpg"},
    { name: "Los Angeles", loc: "California, USA", site: "https://www.google.com/maps/place/Los+Angeles+Rodeo+Drive", photo: "http://rodeodrive-shop.com/images/SlideShow_Front/Rodeo-Drive-0787.jpg"},
    { name: "Paris", loc: "France", site: "https://www.google.com/maps/place/Champs-Élysées+Paris+France", photo: "http://www.planetware.com/photos-large/F/france-paris-champs-elysees.jpg"}
  ]


var skiing = [
    { name: "Banff National Park", loc: "Alberta, Canada", site: "https://www.google.com/maps/place/Banff+National+Park+Alberta", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/33/10/winter-hiking-at-johnston.jpg" }, 
    { name: "Lake Tahoe", loc: "California, USA", site: "https://www.google.com/maps/place/Lake+Tahoe+California", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "Whistler", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Whistler+British+Columbia", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/b0/3a/7c/whistler-village-in-the.jpg"},
    { name: "Interlaken", loc: "Canton of Bern, Switzerland", site: "https://www.google.com/maps/place/Interlaken+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/7f/40/8f/interlaken.jpg"},
    { name: "Zermatt", loc: "Swiss Alps, Switzerland", site: "https://www.google.com/maps/place/Zermatt+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/18/5b/3b/matterhorn-from-riffelsee.jpg"},
    { name: "Park City", loc: "Utah, USA", site: "https://www.google.com/maps/place/Park+City+Utah", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/55/3c/a7/powder-skiing-in-park.jpg"}, 
    { name: "Vail", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Vail+Colorado", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/46/77/9f/vail.jpg"},
    { name: "Anchorage", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Anchorage+Alaska", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/97/5b/portage-glacier-is-the.jpg"},
    { name: "Breckenridge", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Breckenridge+Colorado", photo: "https://media-cdn.tripadvisor.com/media/vr-splice-j/03/27/94/1a.jpg"},
    { name: "Lake Placid", loc: "New York, USA", site: "https://www.google.com/maps/place/Lake+Placid+New+York", photo: "http://www.getawaymavens.com/wp-content/uploads/2013/03/Golden-Arrow-beach.jpg"}
  ]

var surfing = [
    { name: "Tofino", loc: "Vancouver Island, Canada", site: "https://www.google.com/maps/place/Tofino+Vancouver+Island", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2517.jpg" }, 
    { name: "Les Cavaliers", loc: "Anglet, France", site: "https://www.google.com/maps/place/Les+Cavaliers+Anglet+France", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2417.jpg"}, 
    { name: "White Beach", loc: "Okinawa, Japan", site: "https://www.google.com/maps/place/White+Beach+Okinawa,Japan", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2318.jpg"},
    { name: "Rincon Beach", loc: "Rincon, Puerto Rico", site: "https://www.google.com/maps/place/Rincon+Beach+Puerto+Rico", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2218.jpg"},
    { name: "Watergate Bay", loc: "Cornwall, England", site: "https://www.google.com/maps/place/Watergate+Bay+Cornwall+England", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide2119.jpg"},
    { name: "Riyuewan", loc: "Hainan, China", site: "https://www.google.com/maps/place/Riyuewan+Hainan+China", photo: "http://www.ulanzhou.com/uploadfile/200901/20090115111329313.jpg"}, 
    { name: "Manu Bay", loc: "Raglan, New Zealand", site: "https://www.google.com/maps/place/Manu+Bay+Raglan+New+Zealand", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1717.jpg"},
    { name: "Montañita Beach", loc: "Montañita, Ecuador", site: "https://www.google.com/maps/place/Montañita+Beach+Ecuador", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1617.jpg"},
    { name: "Maninoa", loc: "Samoa", site: "https://www.google.com/maps/place/Maninoa+Samoa", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1517.jpg"},
    { name: "Sultans", loc: "North Male, Maldives", site: "https://www.google.com/maps/place/Sultans+North+Male+Maldives", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1417.jpg"}
  ]


var kayaking = [ 
    { name: "Sea of Cortez", loc: "Baja California, Mexico", site: "https://www.google.com/maps/place/Baja+California+Mexico", photo: "https://www.theadventurejunkies.com/wp-content/uploads/IMG_4848-copy1.jpg?x63268" }, 
    { name: "Vancouver Island", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Vancouver+Island+British+Columbia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/6066198925_98e10135b5_b.jpg?x63268"}, 
    { name: "Amazon Rainforest", loc: "Brazil", site: "https://www.google.com/maps/place/amazon+Rainforest+brazil", photo: "https://www.theadventurejunkies.com/wp-content/uploads/5902456057_8b1068f633_b.jpg?x63268"},
    { name: "Sermilik Fjord", loc: "Greenland", site: "https://www.google.com/maps/place/Sermilik+Greenland", photo: "https://www.theadventurejunkies.com/wp-content/uploads/3238944631_33ac4412f1_o.jpg?x63268"},
    { name: "Napali Coast", loc: "Kauai, Hawaii", site: "https://www.google.com/maps/place/NaPali+Kapaa+Hawaii", photo: "https://www.theadventurejunkies.com/wp-content/uploads/823975100_ba3241376b_b.jpg?x63268"},
    { name: "Fiordland", loc: "New Zealand", site: "https://www.google.com/maps/place/Fiordland+New+Zealand", photo: "https://www.theadventurejunkies.com/wp-content/uploads/109272937_00ecc8060a_b-1.jpg?x63268"}, 
    { name: "Dalmatian Coast", loc: "Croatia", site: "https://www.google.com/maps/place/Dalmatia+Croatia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/10425622874_1e3333c80d_b.jpg?x63268"},
    { name: "Svalbard", loc: "Norway", site: "https://www.google.com/maps/place/Svalbard+Norway", photo: "https://www.theadventurejunkies.com/wp-content/uploads/15322342198_36ff971f3e_h.jpg?x63268"},
    { name: "The Andes", loc: "Patagonia, Chile", site: "https://www.google.com/maps/place/Patagonia+Chile", photo: "https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/419690025_e1769b16a6_o.jpg"},
    { name: "Glacier Bay", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Glacier+Bay+Alaska", photo: "https://www.theadventurejunkies.com/wp-content/uploads/9657169097_524f1a139b_k.jpg?x63268"}
  ]

$('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas-left').toggleClass('active');
});

$('[data-toggle=offcanvasright]').click(function() {
  $('.row-offcanvas-right').toggleClass('active');
});

class Discover extends React.Component {
  render() {
    return (
      <div id = "discoverContainer">
        <h2> Discover </h2>
        <h3 className = "dSubtitle"> Discover only the best attractions the world has to offer! </h3>
          <div className="container">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="row-offcanvas row-offcanvas-right">
                      <div className="col-xs-6 col-sm-2 sidebar-offcanvas" id="sidebarLeft" role="navigation">
                        <p className="visible-xs">
                          <button className="btn btn-primary btn-xs" type="button" data-toggle="offcanvas"><i className="glyphicon glyphicon-chevron-left"></i></button>
                        </p>
                        
                        <div className="well sidebar-nav" >
                          <ul aria-label="List of interests" className="nav">
                            <li>Interests</li>
                            <li><a href="#discover/arts">Arts</a></li>
                            <li><a href="#discover/beaches">Beaches</a></li>
                            <li><a href="#discover/birding">Birding</a></li>
                            <li><a href="#discover/business">Business</a></li>
                            <li><a href="#discover/camping">Camping</a></li>
                            <li><a href="#discover/cycling">Cycling</a></li>
                            <li><a href="#discover/gambling">Gambling</a></li>
                            <li><a href="#discover/golfing">Golfing</a></li>
                            <li><a href="#discover/hiking">Hiking</a></li>
                            <li><a href="#discover/kayaking">Kayaking</a></li>
                            <li><a href="#discover/nightlife">Nightlife</a></li>
                            <li><a href="#discover/parks">Parks</a></li>
                            <li><a href="#discover/shopping">Shopping</a></li>
                            <li><a href="#discover/skiing">Skiing</a></li>
                            <li><a href="#discover/surfing">Surfing</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-10">
                          <a name="discover/arts"><Arts/></a>
                          <a name="discover/beaches"><Beaches /></a>
                          <a name="discover/birding"><Birding/></a>
                          <a name="discover/business"><Business/></a>
                          <a name="discover/camping"><Camping/></a>
                          <a name="discover/cycling"><Cycling/></a>
                          <a name="discover/gambling"><Gambling/></a>
                          <a name="discover/golfing"><Golfing/></a>
                          <a name="discover/hiking"><Hiking/></a>
                          <a name="discover/kayaking"><Kayaking/></a>
                          <a name="discover/nightlife"><Nightlife/></a>
                          <a name="discover/parks"><Parks/></a>
                          <a name="discover/shopping"><Shopping/></a>
                          <a name="discover/skiing"><Skiing/></a>
                          <a name="discover/surfing"><Surfing/></a>
                      </div>                 
                  </div>
                </div>       
              </div>
      </div>
    )
  }
}


class Arts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomArts = _.shuffle(arts);
      this.setState({ 
          'name': [randomArts[0].name, randomArts[1].name, randomArts[2].name],
          'loc': [randomArts[0].loc, randomArts[1].loc, randomArts[2].loc],
          'site': [randomArts[0].site, randomArts[1].site, randomArts[2].site],
          'photo': [randomArts[0].photo, randomArts[1].photo, randomArts[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Arts </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src={this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Beaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo': []
                 };
    
  }
  componentWillMount(){
    var randomBeaches = _.shuffle(beaches);
      this.setState({ 
          'name': [randomBeaches[0].name, randomBeaches[1].name, randomBeaches[2].name],
          'loc': [randomBeaches[0].loc, randomBeaches[1].loc, randomBeaches[2].loc],
          'site': [randomBeaches[0].site, randomBeaches[1].site, randomBeaches[2].site],
          'photo': [randomBeaches[0].photo, randomBeaches[1].photo, randomBeaches[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Beaches </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src= {this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src= {this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Cycling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo': []
                 };
    
  }
  componentWillMount(){
    var randomCycling = _.shuffle(cycling);
      this.setState({ 
          'name': [randomCycling[0].name, randomCycling[1].name, randomCycling[2].name],
          'loc': [randomCycling[0].loc, randomCycling[1].loc, randomCycling[2].loc],
          'site': [randomCycling[0].site, randomCycling[1].site, randomCycling[2].site],
          'photo': [randomCycling[0].photo, randomCycling[1].photo, randomCycling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Cycling </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src={this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Birding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomBirding = _.shuffle(birding);
      this.setState({ 
          'name': [randomBirding[0].name, randomBirding[1].name, randomBirding[2].name],
          'loc': [randomBirding[0].loc, randomBirding[1].loc, randomBirding[2].loc],
          'site': [randomBirding[0].site, randomBirding[1].site, randomBirding[2].site],
          'photo': [randomBirding[0].photo, randomBirding[1].photo, randomBirding[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Birding </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomBusiness = _.shuffle(business);
      this.setState({ 
          'name': [randomBusiness[0].name, randomBusiness[1].name, randomBusiness[2].name],
          'loc': [randomBusiness[0].loc, randomBusiness[1].loc, randomBusiness[2].loc],
          'site': [randomBusiness[0].site, randomBusiness[1].site, randomBusiness[2].site],
          'photo': [randomBusiness[0].photo, randomBusiness[1].photo, randomBusiness[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Business </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Camping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomCamping = _.shuffle(camping);
      this.setState({ 
          'name': [randomCamping[0].name, randomCamping[1].name, randomCamping[2].name],
          'loc': [randomCamping[0].loc, randomCamping[1].loc, randomCamping[2].loc],
          'site': [randomCamping[0].site, randomCamping[1].site, randomCamping[2].site],
          'photo': [randomCamping[0].photo, randomCamping[1].photo, randomCamping[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Camping </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Gambling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(gambling);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Gambling </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Golfing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(golfing);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Golfing </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Hiking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(hiking);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Hiking </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(parks);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Parks </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Nightlife extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(nightlife);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Nightlife </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Kayaking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomKayaking = _.shuffle(kayaking);
      this.setState({ 
          'name': [randomKayaking[0].name, randomKayaking[1].name, randomKayaking[2].name],
          'loc': [randomKayaking[0].loc, randomKayaking[1].loc, randomKayaking[2].loc],
          'site': [randomKayaking[0].site, randomKayaking[1].site, randomKayaking[2].site],
          'photo': [randomKayaking[0].photo, randomKayaking[1].photo, randomKayaking[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Kayaking </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}






class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(shopping);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Shopping </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Skiing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(skiing);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Skiing </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Surfing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(surfing);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Surfing </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {arts,beaches,cycling,birding,business,camping,gambling,golfing,hiking,parks,nightlife,shopping,
skiing,surfing,kayaking};
export default Discover;


