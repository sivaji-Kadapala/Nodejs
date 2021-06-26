//when ever creating parent directories,we need 
//                  mkdir
//                  WriteFile
//                       (i)recursive:true
//                       (ii)call back
//import fs module,we need require
const fs = require("fs")
//-------------------------------------Start Samung folder-----------------------------------------------------

fs.mkdir("./Mobiles/Samsung", { recursive: true }, function(err) {
  if (err) {
    console.log(err)
  } else {
      
      //-----------First file from Samsung-------------------
    fs.writeFile("./Mobiles/Samsung/Galaxy.txt", "Hey,Iam galaxy from samsung!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Galaxy was saved!-Samsung");
    }
    
}); 
//-----------------Second file from Samsung-------------------
fs.writeFile("./Mobiles/Samsung/Note.txt", "Hey,Iam Note from Samsung!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Note was saved!-Samsung");
    }
    
}); 
//-----------------Third file from Samsung-------------------
fs.writeFile("./Mobiles/Samsung/MSeries.txt", "Hey,Iam MSeries from Samsung!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The MSeries was saved!-Samsung");
    }
    
}); 
  }
})
//-------------------------------------End Samsung folder-----------------------------------------------------
//-------------------------------------Start Nokia folder-----------------------------------------------------

fs.mkdir("./Mobiles/Nokia", { recursive: true }, function(err) {
  if (err) {
    console.log(err)
  } else {
      
        //-----------First file from Nokia-------------------
    fs.writeFile("./Mobiles/Nokia/Asha.txt", "Hey,Iam Asha from Nokia!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Asha was saved!-Nokia");
    }
    
}); 
//-----------------Second file from Nokia-------------------
fs.writeFile("./Mobiles/Nokia/Lumia.txt", "Hey,Iam Lumia from Nokia!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Lumia was saved!-Nokia");
    }
    
}); 
//-----------------Third file from Nokia-------------------
fs.writeFile("./Mobiles/Nokia/XSeries.txt", "Hey,Iam XSeries from Nokia!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The XSeries was saved!-Nokia");
    }
    
}); 
  }
})
//-------------------------------------End Nokia folder-----------------------------------------------------
//-------------------------------------Start Mi folder-----------------------------------------------------
//// recursively create multiple directories
fs.mkdir("./Mobiles/Mi", { recursive: true }, function(err) {
  if (err) {
    console.log(err)
  } else {
     
        //-----------First file from Mi-------------------
    fs.writeFile("./Mobiles/Mi/Note.txt", "Hey,Iam Note from Mi!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Note was saved!-Mi");
    }
    
}); 
//-----------------Second file from Mi-------------------
fs.writeFile("./Mobiles/Mi/ASeries.txt", "Hey,Iam ASeries from Mi!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The ASeries was saved!-Mi");
    }
    
}); 
//-----------------Third file from Mi-------------------
fs.writeFile("./Mobiles/Mi/KSeries.txt", "Hey,Iam KSeries from Mi!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The KSeries was saved!-Mi");
    }
    
});
  }
})
//-------------------------------------End Mi folder-----------------------------------------------------
//-------------------------------------Start Realme folder-----------------------------------------------------

fs.mkdir("./Mobiles/Realme", { recursive: true }, function(err) {
  if (err) {
    console.log(err)
  } else {
      
   //-----------First file from Realme-------------------
    fs.writeFile("./Mobiles/Realme/Note.txt", "Hey,Iam Note from Realme!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Note was saved!-Realme");
    }
    
}); 
//-----------------Second file from Realme-------------------
fs.writeFile("./Mobiles/Realme/Narzo.txt", "Hey,Iam Narzo from Realme!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The Narzo was saved!-Realme");
    }
    
}); 
//-----------------Third file from Realme-------------------
fs.writeFile("./Mobiles/Realme/CSeries.txt", "Hey,Iam CSeries from Realme!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The CSeries was saved!-Realme");
    }
    
});

  }
})
//-------------------------------------End Realme folder-----------------------------------------------------