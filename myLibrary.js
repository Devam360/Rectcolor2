function IsTouching(walter,jacob){
        if(jacob.x-walter.x< jacob.width/2+walter.width/2 
          && walter.x-jacob.x< jacob.width/2+walter.width/2&& 
          walter.y-jacob.y<jacob.height/2+walter.height/2&& jacob.y-walter.y<jacob.width/2+walter.width/2)
        {
          return true
        }
        else{
          return false
        }
    }