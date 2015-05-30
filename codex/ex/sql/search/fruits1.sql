 SET @catalog = { 
    Europe: {
      fruits: @[
        {fruit:'Apple'},
        {fruit:'Peach'},          
      ]
    },
    Asia: {
        fruit:'Pineapple'          
    },
    Africa: {
        fruit:'Banana'          
    }
  };

SEARCH /fruits/ FROM @catalog