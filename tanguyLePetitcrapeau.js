    //OPEN / CLOSE BANNERS



const listState = { LINK: 0, BUTTON : 1, BANNER : 2}
var list = [
    ["lien-edhec" , "btn-close-edhec"  , "banner-edhec"]  , // EDUCATION
    ["lien-exam" , "btn-close-exam"  , "banner-exam"] ,
    ["lien-recamier" , "btn-close-recamier" , "banner-recamier"],
    ["lien-skk" , "btn-close-skk" , "banner-skk"] , 
    ["lien-berkeley" , "btn-close-berkeley" , "banner-berkeley"],

    ["lien-homerun" , "btn-close-homerun" , "banner-homerun"] , // EXPERIENCE
    ["lien-tee" , "btn-close-tee"  , "banner-tee"] ,
    ["lien-futures" , "btn-close-futures" , "banner-futures"],
    ["lien-patent" , "btn-close-patent" , "banner-patent"] , 
    ["lien-freelance" , "btn-close-freelance" , "banner-freelance"],

    ["lien-spirit" , "btn-close-spirit" , "banner-spirit"] , // SKILLS
    ["lien-business" , "btn-close-business"  , "banner-business"] ,
    ["lien-soft" , "btn-close-soft" , "banner-soft"],
    ["lien-code" , "btn-close-code" , "banner-code"] , 
    ["lien-learning" , "btn-close-learning" , "banner-learning"],

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

    // document.getElementById("lien-futures").addEventListener("click", function() { 
    //     document.getElementById("banner-futures").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-futures").addEventListener("click", function() {
    //     document.getElementById("banner-futures").style.display = "none";
    // });

    // document.getElementById("lien-patent").addEventListener("click", function() { 
    //     document.getElementById("banner-patent").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-patent").addEventListener("click", function() {
    //     document.getElementById("banner-patent").style.display = "none";
    // });

    // document.getElementById("lien-freelance").addEventListener("click", function() { 
    //     document.getElementById("banner-freelance").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-freelance").addEventListener("click", function() {
    //     document.getElementById("banner-freelance").style.display = "none";
    // });


    // // Section - Skills

    // document.getElementById("lien-spirit").addEventListener("click", function() {
    //     document.getElementById("banner-spirit").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-spirit").addEventListener("click", function() {
    //     document.getElementById("banner-spirit").style.display = "none";
    // });
    
    // document.getElementById("lien-business").addEventListener("click", function() {
    //     document.getElementById("banner-business").style.display = "flex";
    // });

    // document.getElementById("btn-close-business").addEventListener("click", function() {
    //     document.getElementById("banner-business").style.display = "none";
    // });

    // document.getElementById("lien-soft").addEventListener("click", function() { 
    //     document.getElementById("banner-soft").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-soft").addEventListener("click", function() {
    //     document.getElementById("banner-soft").style.display = "none";
    // });

    // document.getElementById("lien-code").addEventListener("click", function() { 
    //     document.getElementById("banner-code").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-code").addEventListener("click", function() {
    //     document.getElementById("banner-code").style.display = "none";
    // });

    // document.getElementById("lien-learning").addEventListener("click", function() { 
    //     document.getElementById("banner-learning").style.display = "flex";
    // });
    
    // document.getElementById("btn-close-learning").addEventListener("click", function() {
    //     document.getElementById("banner-learning").style.display = "none";
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
