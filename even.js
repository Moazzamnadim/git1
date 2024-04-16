let obj={
    length:5,
     width:20,
     area: function(){
       console.log(this.length*this.width)
     },
     perimeter: function() {
     console.log(2*(this.length+this.width));
     }
   }
   obj.perimeter()
   obj.area()