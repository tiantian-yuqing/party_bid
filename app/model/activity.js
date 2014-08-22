function Activity(name) {
    this.name = name ;
    this.state = 0 ;
    this.sign_up = [];
    this.bids = [];
    this.bidding = [] ;
    this.jjnumber = 1 ;
}

function Bid(i){
    this.bid_name  = "竞价"+i ;
    this.bid_state = 1 ;
}