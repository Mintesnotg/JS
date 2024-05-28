class Easter {

    constructor ( name,adress ){
        this.Savior=name
        this.tomb=adress
    }

    reasonforeaster (){
        if(this.tomb==null){
            console.log( this.Savior + " is Risen ")
            this.celebrateEaster();

        }
    }
    celebrateEaster () {
        console.log( " Happy Easter Risen")
    }
}

var easter= new Easter("Jesus");

easter.reasonforeaster();