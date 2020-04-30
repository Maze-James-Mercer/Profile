    //OPEN / CLOSE BANNERS



const listState = { LINK: 0, BUTTON : 1, BANNER : 2}
var list = [
    ["lien-edhec" , "btn-close-edhec"  , "banner-edhec"]  , // EDUCATION
    ["lien-exam" , "btn-close-exam"  , "banner-exam"] ,
    ["lien-recamier" , "btn-close-recamier" , "banner-recamier"],
    ["lien-lyon2" , "btn-close-lyon2" , "banner-lyon2"] , 
    ["lien-blaise" , "btn-close-blaise" , "banner-blaise"],

    ["lien-homerun" , "btn-close-homerun" , "banner-homerun"] , // EXPERIENCE
    ["lien-tee" , "btn-close-tee"  , "banner-tee"] ,
    ["lien-soap" , "btn-close-soap" , "banner-soap"],
    ["lien-tutor" , "btn-close-tutor" , "banner-tutor"] , 
    ["lien-fiducial" , "btn-close-fiducial" , "banner-fiducial"],

    ["lien-spirit" , "btn-close-spirit" , "banner-spirit"] , // SKILLS
    ["lien-management" , "btn-close-management"  , "banner-management"] ,
    ["lien-languages" , "btn-close-languages" , "banner-languages"],
    ["lien-code" , "btn-close-code" , "banner-code"] , 
    ["lien-software" , "btn-close-software" , "banner-software"],

    ["lien-music" , "btn-close-music" , "banner-music"] , // HOBBIES
    ["lien-development" , "btn-close-development"  , "banner-development"] ,
    ["lien-gym" , "btn-close-gym" , "banner-gym"],
    ["lien-travel" , "btn-close-travel" , "banner-travel"] , 
    ["lien-drawing" , "btn-close-drawing" , "banner-drawing"],
    ];


function main() {
    

    for (var i = 0; i < list.length; i++) {
        document.getElementById(list[i][listState.LINK]).addEventListener('click', (function(index) {
            return function() {
                for (var i = 0; i < list.length; i++) {
                    document.getElementById(list[i][listState.BANNER]).style.display = "none";
                }
                document.getElementById(list[index][listState.BANNER]).style.display = "flex";
            };
        } ) ( i ), false); 

        document.getElementById(list[i][listState.BUTTON]).addEventListener('click', (function(index) {
            return function() {
                document.getElementById(list[index][listState.BANNER]).style.display = "none";
            };
        } ) ( i ), false); 
    }

    // Section - Education


    // // Section - Experience

    
    // document.getElementById("lien-tee").addEventListener("click", function() {
    //     document.getElementById("banner-tee").style.display = "flex";
    // });

    // document.getElementById("btn-close-tee").addEventListener("click", function() {
    //     document.getElementById("banner-tee").style.display = "none";
    // });

    // document.getElementById("lien-soap").addEventListener("click", function() { 
    //     document.getElementById("banner-soap").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-soap").addEventListener("click", function() {
    //     document.getElementById("banner-soap").style.display = "none";
    // });

    // document.getElementById("lien-tutor").addEventListener("click", function() { 
    //     document.getElementById("banner-tutor").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-tutor").addEventListener("click", function() {
    //     document.getElementById("banner-tutor").style.display = "none";
    // });

    // document.getElementById("lien-fiducial").addEventListener("click", function() { 
    //     document.getElementById("banner-fiducial").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-fiducial").addEventListener("click", function() {
    //     document.getElementById("banner-fiducial").style.display = "none";
    // });


    // // Section - Skills

    // document.getElementById("lien-spirit").addEventListener("click", function() {
    //     document.getElementById("banner-spirit").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-spirit").addEventListener("click", function() {
    //     document.getElementById("banner-spirit").style.display = "none";
    // });
    
    // document.getElementById("lien-management").addEventListener("click", function() {
    //     document.getElementById("banner-management").style.display = "flex";
    // });

    // document.getElementById("btn-close-management").addEventListener("click", function() {
    //     document.getElementById("banner-management").style.display = "none";
    // });

    // document.getElementById("lien-languages").addEventListener("click", function() { 
    //     document.getElementById("banner-languages").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-languages").addEventListener("click", function() {
    //     document.getElementById("banner-languages").style.display = "none";
    // });

    // document.getElementById("lien-code").addEventListener("click", function() { 
    //     document.getElementById("banner-code").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-code").addEventListener("click", function() {
    //     document.getElementById("banner-code").style.display = "none";
    // });

    // document.getElementById("lien-software").addEventListener("click", function() { 
    //     document.getElementById("banner-software").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-software").addEventListener("click", function() {
    //     document.getElementById("banner-software").style.display = "none";
    // });


    // // Section - Hobbies

    // document.getElementById("lien-music").addEventListener("click", function() {
    //     document.getElementById("banner-music").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-music").addEventListener("click", function() {
    //     document.getElementById("banner-music").style.display = "none";
    // });
    
    // document.getElementById("lien-development").addEventListener("click", function() {
    //     document.getElementById("banner-development").style.display = "flex";
    // });

    // document.getElementById("btn-close-development").addEventListener("click", function() {
    //     document.getElementById("banner-development").style.display = "none";
    // });

    // document.getElementById("lien-gym").addEventListener("click", function() { 
    //     document.getElementById("banner-gym").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-gym").addEventListener("click", function() {
    //     document.getElementById("banner-gym").style.display = "none";
    // });

    // document.getElementById("lien-travel").addEventListener("click", function() { 
    //     document.getElementById("banner-travel").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-travel").addEventListener("click", function() {
    //     document.getElementById("banner-travel").style.display = "none";
    // });

    // document.getElementById("lien-drawing").addEventListener("click", function() { 
    //     document.getElementById("banner-drawing").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-drawing").addEventListener("click", function() {
    //     document.getElementById("banner-drawing").style.display = "none";
    // });

}
