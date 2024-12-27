function FlipCard(props){
    return(
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
        </div>
        <div class="flip-card-back">
            <p class="title">{props.name}</p>
        </div>
    </div>
</div>
    );
}

export default FlipCard;