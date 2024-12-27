function FlipCard(props){

    const style = {
        backgroundColor: props.bgColor,
    }

    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div style={style} class="flip-card-front">
                    <p class="title"></p>
                </div>
            <div style={style} class="flip-card-back">
                <p class="title">{props.name}</p>
        </div>
    </div>
</div>
    );
}

export default FlipCard;